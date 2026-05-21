const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('translatorAPI', {
    translate: (payload) => ipcRenderer.invoke('translate', payload),
    minimize: () => ipcRenderer.send('window-minimize'),
    maximize: () => ipcRenderer.send('window-maximize'),
    close: () => ipcRenderer.send('window-close'),
    setAlwaysOnTop: (flag) => ipcRenderer.send('set-always-on-top', flag),
    setOpacity: (opacity) => ipcRenderer.send('set-opacity', opacity),
    setIgnoreMouseEvents: (ignore, options) => ipcRenderer.send('set-ignore-mouse-events', ignore, options),
    onTranslationChunk: (callback) => {
        const listener = (event, chunk) => callback(chunk);
        ipcRenderer.on('translation-chunk', listener);
        return listener;
    },
    onTranslationEnd: (callback) => {
        const listener = (event) => callback();
        ipcRenderer.on('translation-end', listener);
        return listener;
    },
    removeListeners: () => {
        ipcRenderer.removeAllListeners('translation-chunk');
        ipcRenderer.removeAllListeners('translation-end');
    }
});

