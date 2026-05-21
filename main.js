const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const https = require('https');
const http = require('http');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 950,
    height: 480,
    minWidth: 150,
    minHeight: 150,
    alwaysOnTop: true,
    frame: false, // Sleek frameless modern window
    transparent: true, // Enable OS-level transparent backdrop support
    hasShadow: true,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile('index.html');
}

// Window control IPC handlers
ipcMain.on('window-minimize', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.minimize();
});

ipcMain.on('window-maximize', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }
});

ipcMain.on('window-close', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.close();
});

ipcMain.on('set-always-on-top', (event, flag) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.setAlwaysOnTop(flag);
});

ipcMain.on('set-opacity', (event, opacity) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    const safeOpacity = Math.max(0.1, Math.min(1.0, parseFloat(opacity)));
    win.setOpacity(safeOpacity);
  }
});

ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    win.setIgnoreMouseEvents(ignore, options);
  }
});

// Handle translation request in main process with streaming support
ipcMain.handle('translate', async (event, { apiUrl, apiKey, modelName, systemPrompt, userText, reasoningEffort, thinkingType }) => {
  return new Promise((resolve, reject) => {
    let url;
    try {
      url = new URL(apiUrl);
    } catch (e) {
      return reject('Invalid API URL');
    }

    const payload = {
      model: modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userText }
      ],
      stream: true // Enable SSE Streaming
    };

    // Append optional reasoning parameters if configured
    if (reasoningEffort && reasoningEffort !== 'none') {
      payload.reasoning_effort = reasoningEffort;
    }
    if (thinkingType && thinkingType !== 'none') {
      payload.thinking = { type: thinkingType };
    }

    const body = JSON.stringify(payload);

    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + (url.search || ''),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const lib = url.protocol === 'https:' ? https : http;

    const req = lib.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        let errData = '';
        res.on('data', (chunk) => { errData += chunk; });
        res.on('end', () => {
          reject(`API Error (Status ${res.statusCode}): ${errData}`);
        });
        return;
      }

      // Timeout if server stops sending data mid-stream (60s inactivity)
      res.setTimeout(60000, () => {
        req.destroy();
        event.sender.send('translation-end');
        reject('Response timed out: server stopped sending data');
      });

      res.setEncoding('utf8');
      let buffer = '';
      let fullText = '';

      res.on('data', (chunk) => {
        buffer += chunk;
        let lines = buffer.split('\n');
        buffer = lines.pop(); // Hold onto the last incomplete line

        for (let line of lines) {
          line = line.trim();
          if (!line) continue;
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') continue;
            try {
              const json = JSON.parse(dataStr);
              const content = json.choices?.[0]?.delta?.content;
              if (content) {
                fullText += content;
                // Forward the chunk to renderer
                event.sender.send('translation-chunk', content);
              }
            } catch (err) {
              // Ignore incomplete/malformed chunks
            }
          }
        }
      });

      res.on('end', () => {
        // Flush any remaining buffer data
        const lastLine = buffer.trim();
        if (lastLine.startsWith('data: ')) {
          const dataStr = lastLine.slice(6).trim();
          if (dataStr !== '[DONE]') {
            try {
              const json = JSON.parse(dataStr);
              const content = json.choices?.[0]?.delta?.content;
              if (content) {
                fullText += content;
                event.sender.send('translation-chunk', content);
              }
            } catch (err) {}
          }
        }
        event.sender.send('translation-end');
        resolve(fullText);
      });
    });

    // Connection-level timeout (30s to establish connection)
    req.setTimeout(30000, () => {
      req.destroy();
      reject('Connection timed out: could not reach API server within 30 seconds');
    });

    req.on('error', (e) => reject(e.message));
    req.write(body);
    req.end();
  });
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

