// UI Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.getElementById('close-settings');
const saveSettingsBtn = document.getElementById('save-settings');
const translateBtn = document.getElementById('translate-btn');

const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

// Window Controls (Frameless Titlebar)
const winCloseBtn = document.getElementById('win-close');
const winMinimizeBtn = document.getElementById('win-minimize');
const winMaximizeBtn = document.getElementById('win-maximize');

// Custom Toolbar Action Elements
const pinBtn = document.getElementById('pin-btn');
const layoutBtn = document.getElementById('layout-btn');
const targetLangSelect = document.getElementById('target-lang');
const transparentModeBtn = document.getElementById('transparent-mode-btn');
const exitTransparentBtn = document.getElementById('exit-transparent-btn');
const mainContainer = document.getElementById('main-container');
const dragZone = document.getElementById('drag-zone');

// Floating Panel Helpers
const clearBtn = document.getElementById('clear-btn');
const clearBtnRight = document.getElementById('clear-btn-right');
const pasteTranslateBtn = document.getElementById('paste-translate-btn');
const pasteTranslateBtnRight = document.getElementById('paste-translate-btn-right');
const copyBtn = document.getElementById('copy-btn');
const clearBtnTop = document.getElementById('clear-btn-top');
const pasteTranslateBtnTop = document.getElementById('paste-translate-btn-top');
const copyBtnTop = document.getElementById('copy-btn-top');
const toastContainer = document.getElementById('toast-container');

// Settings Inputs
const apiUrlInput = document.getElementById('api-url');
const apiKeyInput = document.getElementById('api-key');
const modelNameInput = document.getElementById('model-name');
const systemPromptInput = document.getElementById('system-prompt');
const opacitySlider = document.getElementById('opacity-slider');
const opacityValueSpan = document.getElementById('opacity-value');
const transOpacitySlider = document.getElementById('trans-opacity-slider');
const transOpacityValueSpan = document.getElementById('trans-opacity-value');
const uiLangSelect = document.getElementById('ui-lang');
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValueSpan = document.getElementById('font-size-value');

// // 8 Common UI Translations (i18n)
const uiTranslations = {
    'en': {
        settingsTitle: 'Settings',
        uiLangLabel: 'UI Language',
        apiUrlLabel: 'API URL (OpenAI compatible)',
        apiKeyLabel: 'API Key',
        modelLabel: 'Model',
        thinkingLabel: 'Thinking Mode',
        thinkingAuto: 'None (Auto)',
        thinkingEnabled: 'Enabled',
        thinkingDisabled: 'Disabled',
        reasoningLabel: 'Reasoning Effort',
        reasoningAuto: 'None (Auto)',
        reasoningLow: 'Low',
        reasoningMedium: 'Medium',
        reasoningHigh: 'High',
        reasoningMax: 'Max',
        opacityLabel: 'Window Opacity',
        transOpacityLabel: 'Transparent Mode Opacity',
        fontSizeLabel: 'Text Font Size',
        promptLabel: 'System Prompt Customization',
        promptHelp: 'Note: The system will automatically instruct the model on the target language selected in the toolbar.',
        saveBtn: 'Save',
        clearBtnLabel: 'Clear',
        pasteBtnLabel: 'Paste & Go',
        copyBtnLabel: 'Copy',
        inputPlaceholder: 'Paste text here to translate... (Ctrl+Enter to translate)',
        translateBtnLabel: 'Translate',
        titlePin: 'Toggle Always on Top',
        titleLayout: 'Toggle Layout Split',
        titleTheme: 'Toggle Theme',
        titleSettings: 'Settings',
        titleTranslate: 'Translate (Ctrl+Enter)',
        titleMinimize: 'Minimize',
        titleMaximize: 'Maximize/Restore',
        titleClose: 'Close',
        titleClear: 'Clear All',
        titlePaste: 'Paste clipboard and translate instantly',
        titleCopy: 'Copy Translation'
    },
    'zh': {
        settingsTitle: '设置',
        uiLangLabel: '界面语言',
        apiUrlLabel: 'API 接口地址 (兼容 OpenAI)',
        apiKeyLabel: 'API 密钥 (API Key)',
        modelLabel: '模型名称 (Model)',
        thinkingLabel: '思考模式 (Thinking)',
        thinkingAuto: '自动 (Auto)',
        thinkingEnabled: '强制开启',
        thinkingDisabled: '强制关闭',
        reasoningLabel: '思考深度 (Reasoning Effort)',
        reasoningAuto: '自动 (Auto)',
        reasoningLow: '低深度 (快速)',
        reasoningMedium: '中等深度',
        reasoningHigh: '高深度',
        reasoningMax: '最大深度',
        opacityLabel: '窗口透明度',
        transOpacityLabel: '透明模式透明度',
        fontSizeLabel: '文本字体大小',
        promptLabel: '系统提示词自定义',
        promptHelp: '注意：系统在翻译时会自动在后台拼接所选的目标语言指令。',
        saveBtn: '保存设置',
        clearBtnLabel: '清空',
        pasteBtnLabel: '粘贴并翻译',
        copyBtnLabel: '复制',
        inputPlaceholder: '在此粘贴文本进行翻译... (Ctrl+Enter 翻译)',
        translateBtnLabel: '翻译',
        titlePin: '置顶窗口',
        titleLayout: '切换分栏布局',
        titleTheme: '切换深浅主题',
        titleSettings: '设置参数',
        titleTranslate: '执行翻译 (Ctrl+Enter)',
        titleMinimize: '最小化窗口',
        titleMaximize: '最大化/还原窗口',
        titleClose: '关闭应用',
        titleClear: '清空全部内容',
        titlePaste: '读取剪贴板并立刻翻译',
        titleCopy: '复制翻译结果'
    },
    'ja': {
        settingsTitle: '設定',
        uiLangLabel: '表示言語',
        apiUrlLabel: 'API URL (OpenAI 互換)',
        apiKeyLabel: 'API キー (API Key)',
        modelLabel: 'モデル (Model)',
        thinkingLabel: '思考モード (Thinking)',
        thinkingAuto: '自動 (Auto)',
        thinkingEnabled: '有効',
        thinkingDisabled: '無効',
        reasoningLabel: '思考の深さ (Reasoning Effort)',
        reasoningAuto: '自動 (Auto)',
        reasoningLow: '低深度 (高速)',
        reasoningMedium: '中深度',
        reasoningHigh: '高深度',
        reasoningMax: '最大深度',
        opacityLabel: 'ウィンドウの不透明度',
        transOpacityLabel: '透明モードの不透明度',
        fontSizeLabel: 'テキストのフォントサイズ',
        promptLabel: 'システムプロンプトのカスタマイズ',
        promptHelp: '注意: 翻訳時にツールバーで选择されたターゲット言語の指示が自動的に追加されます。',
        saveBtn: '設定を保存',
        clearBtnLabel: 'クリア',
        pasteBtnLabel: '貼り付け翻訳',
        copyBtnLabel: 'コピー',
        inputPlaceholder: '翻訳するテキストをここに貼り付け... (Ctrl+Enter で翻訳)',
        translateBtnLabel: '翻訳',
        titlePin: 'ウィンドウを最前面に固定',
        titleLayout: '分割レイアウトの切り替え',
        titleTheme: 'テーマの切り替え',
        titleSettings: '設定',
        titleTranslate: '翻訳を実行 (Ctrl+Enter)',
        titleMinimize: '最小化',
        titleMaximize: '最大化/復元',
        titleClose: '閉じる',
        titleClear: 'すべてクリア',
        titlePaste: 'クリップボードから貼り付けて翻訳',
        titleCopy: '翻訳をコピー'
    },
    'ko': {
        settingsTitle: '설정',
        uiLangLabel: '인터페이스 언어',
        apiUrlLabel: 'API URL (OpenAI 호환)',
        apiKeyLabel: 'API 키 (API Key)',
        modelLabel: '모델 (Model)',
        thinkingLabel: '생각 모드 (Thinking)',
        thinkingAuto: '자동 (Auto)',
        thinkingEnabled: '활성화',
        thinkingDisabled: '비활성화',
        reasoningLabel: '생각의 깊이 (Reasoning Effort)',
        reasoningAuto: '자동 (Auto)',
        reasoningLow: '낮음 (빠름)',
        reasoningMedium: '보통',
        reasoningHigh: '높음',
        reasoningMax: '최대',
        opacityLabel: '창 투명도',
        transOpacityLabel: '투명 모드 불투명도',
        fontSizeLabel: '텍스트 글꼴 크기',
        promptLabel: '시스템 프롬프트 사용자 정의',
        promptHelp: '참고: 번역할 때 툴바에서 선택한 대상 언어에 대한 지침이 자동으로 추가됩니다.',
        saveBtn: '설정 저장',
        clearBtnLabel: '지우기',
        pasteBtnLabel: '붙여넣기 및 번역',
        copyBtnLabel: '복사',
        inputPlaceholder: '여기에 번역할 텍스트 붙여넣기... (Ctrl+Enter로 번역)',
        translateBtnLabel: '번역',
        titlePin: '창 항상 위에 유지',
        titleLayout: '화면 분할 레이아웃 전환',
        titleTheme: '테마 전환',
        titleSettings: '설정',
        titleTranslate: '번역 실행 (Ctrl+Enter)',
        titleMinimize: '최소화',
        titleMaximize: '최대화/이전 크기로 복원',
        titleClose: '닫기',
        titleClear: '모두 지우기',
        titlePaste: '클립보드에서 붙여넣고 즉시 번역',
        titleCopy: '번역 복사'
    },
    'es': {
        settingsTitle: 'Configuración',
        uiLangLabel: 'Idioma de la interfaz',
        apiUrlLabel: 'API URL (Compatible OpenAI)',
        apiKeyLabel: 'Clave API (API Key)',
        modelLabel: 'Modelo',
        thinkingLabel: 'Modo de Pensamiento',
        thinkingAuto: 'Ninguno (Auto)',
        thinkingEnabled: 'Habilitado',
        thinkingDisabled: 'Deshabilitado',
        reasoningLabel: 'Esfuerzo de Razonamiento',
        reasoningAuto: 'Ninguno (Auto)',
        reasoningLow: 'Bajo',
        reasoningMedium: 'Medio',
        reasoningHigh: 'Alto',
        reasoningMax: 'Máximo',
        opacityLabel: 'Opacidad de la Ventana',
        transOpacityLabel: 'Opacidad del Modo Transparente',
        fontSizeLabel: 'Tamaño de Letra de Texto',
        promptLabel: 'Personalización de Prompt del Sistema',
        promptHelp: 'Nota: El sistema indicará automáticamente al modelo el idioma de destino seleccionado en la barra de herramientas.',
        saveBtn: 'Guardar',
        clearBtnLabel: 'Limpiar',
        pasteBtnLabel: 'Pegar y Traducir',
        copyBtnLabel: 'Copiar',
        inputPlaceholder: 'Pegue el texto aquí para traducir... (Ctrl+Enter para traducir)',
        translateBtnLabel: 'Traducir',
        titlePin: 'Fijar ventana al frente',
        titleLayout: 'Cambiar diseño de paneles',
        titleTheme: 'Cambiar tema',
        titleSettings: 'Configuración',
        titleTranslate: 'Traducir (Ctrl+Enter)',
        titleMinimize: 'Minimizar',
        titleMaximize: 'Maximizar/Restaurar',
        titleClose: 'Cerrar',
        titleClear: 'Limpiar todo',
        titlePaste: 'Pegar portapapeles y traducir al instante',
        titleCopy: 'Copiar traducción'
    },
    'fr': {
        settingsTitle: 'Paramètres',
        uiLangLabel: 'Langue de l’interface',
        apiUrlLabel: 'API URL (Compatible OpenAI)',
        apiKeyLabel: 'Clé API (API Key)',
        modelLabel: 'Modèle',
        thinkingLabel: 'Mode de Pensée',
        thinkingAuto: 'Aucun (Auto)',
        thinkingEnabled: 'Activé',
        thinkingDisabled: 'Désactivé',
        reasoningLabel: 'Effort de Raisonnement',
        reasoningAuto: 'Aucun (Auto)',
        reasoningLow: 'Faible',
        reasoningMedium: 'Moyen',
        reasoningHigh: 'Élevé',
        reasoningMax: 'Maximum',
        opacityLabel: 'Opacité de la Fenêtre',
        transOpacityLabel: 'Opacité du Mode Transparent',
        fontSizeLabel: 'Taille de la Police du Texte',
        promptLabel: 'Personnalisation du Prompt Système',
        promptHelp: 'Remarque : Le système demandera automatiquement au modèle de traduire dans la langue cible sélectionnée.',
        saveBtn: 'Enregistrer',
        clearBtnLabel: 'Effacer',
        pasteBtnLabel: 'Coller & Traduire',
        copyBtnLabel: 'Copier',
        inputPlaceholder: 'Collez le texte ici pour le traduire... (Ctrl+Enter pour traduire)',
        translateBtnLabel: 'Traduire',
        titlePin: 'Épingler la fenêtre au premier plan',
        titleLayout: 'Changer la disposition des panneaux',
        titleTheme: 'Changer le thème',
        titleSettings: 'Paramètres',
        titleTranslate: 'Traduire (Ctrl+Enter)',
        titleMinimize: 'Réduire',
        titleMaximize: 'Agrandir/Restaurer',
        titleClose: 'Fermer',
        titleClear: 'Tout effacer',
        titlePaste: 'Coller le presse-papiers et traduire instantanément',
        titleCopy: 'Copier la traduction'
    },
    'de': {
        settingsTitle: 'Einstellungen',
        uiLangLabel: 'Benutzeroberfläche Sprache',
        apiUrlLabel: 'API URL (OpenAI kompatibel)',
        apiKeyLabel: 'API-Schlüssel (API Key)',
        modelLabel: 'Modell',
        thinkingLabel: 'Denkmodus',
        thinkingAuto: 'Keiner (Auto)',
        thinkingEnabled: 'Aktiviert',
        thinkingDisabled: 'Deaktiviert',
        reasoningLabel: 'Denkaufwand',
        reasoningAuto: 'Keiner (Auto)',
        reasoningLow: 'Niedrig',
        reasoningMedium: 'Mittel',
        reasoningHigh: 'Hoch',
        reasoningMax: 'Maximal',
        opacityLabel: 'Fenster-Deckkraft',
        transOpacityLabel: 'Transparenter Modus Deckkraft',
        fontSizeLabel: 'Schriftgröße des Textes',
        promptLabel: 'System-Prompt Anpassung',
        promptHelp: 'Hinweis: Das System weist das Modell automatisch an, in die in der Symbolleiste ausgewählte Zielsprache zu übersetzen.',
        saveBtn: 'Speichern',
        clearBtnLabel: 'Löschen',
        pasteBtnLabel: 'Einfügen & Los',
        copyBtnLabel: 'Kopieren',
        inputPlaceholder: 'Text hier einfügen zum Übersetzen... (Strg+Eingabe zum Übersetzen)',
        translateBtnLabel: 'Übersetzen',
        titlePin: 'Fenster immer im Vordergrund halten',
        titleLayout: 'Layout-Aufteilung wechseln',
        titleTheme: 'Thema wechseln',
        titleSettings: 'Einstellungen',
        titleTranslate: 'Übersetzen (Strg+Eingabe)',
        titleMinimize: 'Minimieren',
        titleMaximize: 'Maximieren/Wiederherstellen',
        titleClose: 'Schließen',
        titleClear: 'Alles löschen',
        titlePaste: 'Zwischenablage einfügen und sofort übersetzen',
        titleCopy: 'Übersetzung kopieren'
    },
    'ru': {
        settingsTitle: 'Настройки',
        uiLangLabel: 'Язык интерфейса',
        apiUrlLabel: 'API URL (совместимый с OpenAI)',
        apiKeyLabel: 'Ключ API (API Key)',
        modelLabel: 'Модель',
        thinkingLabel: 'Режим размышления',
        thinkingAuto: 'Авто',
        thinkingEnabled: 'Включен',
        thinkingDisabled: 'Выключен',
        reasoningLabel: 'Глубина размышления',
        reasoningAuto: 'Авто',
        reasoningLow: 'Низкая (быстро)',
        reasoningMedium: 'Средняя',
        reasoningHigh: 'Высокая',
        reasoningMax: 'Максимальная',
        opacityLabel: 'Прозрачность окна',
        transOpacityLabel: 'Прозрачность режима',
        fontSizeLabel: 'Размер шрифта текста',
        promptLabel: 'Системный промпт',
        promptHelp: 'Примечание: система автоматически добавит инструкцию по переводу на язык, выбранный на панели инструментов.',
        saveBtn: 'Сохранить настройки',
        clearBtnLabel: 'Очистить',
        pasteBtnLabel: 'Вставить и перевести',
        copyBtnLabel: 'Копировать',
        inputPlaceholder: 'Вставьте текст сюда для перевода... (Ctrl+Enter для перевода)',
        translateBtnLabel: 'Перевод',
        titlePin: 'Закрепить поверх всех окон',
        titleLayout: 'Переключить ориентацию панелей',
        titleTheme: 'Сменить тему оформления',
        titleSettings: 'Параметры',
        titleTranslate: 'Выполнить перевод (Ctrl+Enter)',
        titleMinimize: 'Свернуть окно',
        titleMaximize: 'Развернуть/Восстановить окно',
        titleClose: 'Закрыть программу',
        titleClear: 'Очистить все поля',
        titlePaste: 'Вставить из буфера и сразу перевести',
        titleCopy: 'Скопировать перевод'
    }
};

// Mappings for languages
const langNames = {
    'zh': 'Chinese (中文)',
    'en': 'English',
    'ja': 'Japanese (日本語)',
    'ko': 'Korean (한국어)',
    'de': 'German (Deutsch)',
    'fr': 'French (Français)',
    'es': 'Spanish (Español)',
    'ru': 'Russian (Русский)'
};

// Localized toast messages (Bug #7 fix)
const toastMessages = {
    'en': { settingsSaved: '⚙ Settings saved successfully!', transparentEnter: '✨ Entered Transparent Mode', transparentExit: 'Returned to Main Mode' },
    'zh': { settingsSaved: '⚙ 设置保存成功！', transparentEnter: '✨ 已进入透明置顶模式', transparentExit: '返回主模式' },
    'ja': { settingsSaved: '⚙ 設定を保存しました！', transparentEnter: '✨ 透明モードに入りました', transparentExit: '通常モードに戻りました' },
    'ko': { settingsSaved: '⚙ 설정이 저장되었습니다!', transparentEnter: '✨ 투명 모드로 전환됨', transparentExit: '메인 모드로 복귀' },
    'de': { settingsSaved: '⚙ Einstellungen gespeichert!', transparentEnter: '✨ Transparenter Modus aktiviert', transparentExit: 'Zum Hauptmodus zurückgekehrt' },
    'fr': { settingsSaved: '⚙ Paramètres enregistrés !', transparentEnter: '✨ Mode transparent activé', transparentExit: 'Retour au mode principal' },
    'es': { settingsSaved: '⚙ ¡Configuración guardada!', transparentEnter: '✨ Modo transparente activado', transparentExit: 'Regreso al modo principal' },
    'ru': { settingsSaved: '⚙ Настройки сохранены!', transparentEnter: '✨ Прозрачный режим включён', transparentExit: 'Возврат в главный режим' }
};

// Default Settings
const defaultSettings = {
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    apiKey: '',
    modelName: 'gpt-3.5-turbo',
    systemPrompt: "You are a professional translator. Translate the given text accurately. Maintain tone, format, and markdown structure perfectly.",
    theme: 'light',
    alwaysOnTop: true,
    layout: 'horizontal',
    targetLang: 'zh',
    thinkingType: 'none',
    reasoningEffort: 'none',
    opacity: 1.0,
    transOpacity: 0.35,
    uiLang: 'en',
    fontSize: 14
};

// Load Settings
let currentSettings = { ...defaultSettings };
try {
    const saved = localStorage.getItem('translator-settings');
    if (saved) {
        currentSettings = { ...defaultSettings, ...JSON.parse(saved) };
    }
} catch(e) {
    console.error("Failed to load settings", e);
}

// Variables to keep track of state
let lastTranslatedText = '';
let isTransparentMode = false;
let previousAlwaysOnTopState = true;
let lastIgnoreState = null;

// --- Initialization and Setting Applicators ---

// 0. Apply UI Language Translation (i18n)
function applyUILanguage(langCode) {
    const translations = uiTranslations[langCode] || uiTranslations['en'];
    
    // Add runtime fallbacks for Transparent Mode buttons
    const localFallbacks = {
        'en': { titleTransparentMode: 'Enter Transparent Mode', titleExitTransparent: 'Return to Main Mode' },
        'zh': { titleTransparentMode: '进入透明模式', titleExitTransparent: '返回主模式' },
        'ja': { titleTransparentMode: '透明モードに入る', titleExitTransparent: '通常モードに戻る' },
        'ko': { titleTransparentMode: '투명 모드 진입', titleExitTransparent: '메인 모드로 복귀' },
        'de': { titleTransparentMode: 'Transparenter Modus', titleExitTransparent: 'Zurück zum Hauptmodus' },
        'fr': { titleTransparentMode: 'Mode Transparent', titleExitTransparent: 'Retour au Mode Principal' },
        'es': { titleTransparentMode: 'Modo Transparente', titleExitTransparent: 'Volver al Modo Principal' },
        'ru': { titleTransparentMode: 'Прозрачный режим', titleExitTransparent: 'Вернуться в главный режим' }
    };
    const fallback = localFallbacks[langCode] || localFallbacks['en'];
    if (!translations.titleTransparentMode) translations.titleTransparentMode = fallback.titleTransparentMode;
    if (!translations.titleExitTransparent) translations.titleExitTransparent = fallback.titleExitTransparent;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            el.placeholder = translations[key];
        }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[key]) {
            el.title = translations[key];
        }
    });
}
applyUILanguage(currentSettings.uiLang || 'en');

// 1. Apply Theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}
applyTheme(currentSettings.theme);

// 2. Apply Always-on-top
function applyAlwaysOnTop(isPin) {
    if (isPin) {
        pinBtn.classList.add('active');
    } else {
        pinBtn.classList.remove('active');
    }
    window.translatorAPI.setAlwaysOnTop(isPin);
}
// Initial state sync (brief timeout to allow electron window to fully initiate bindings)
setTimeout(() => {
    applyAlwaysOnTop(currentSettings.alwaysOnTop);
    window.translatorAPI.setOpacity(currentSettings.opacity || 1.0);
    document.documentElement.style.setProperty('--trans-bg-opacity', (currentSettings.transOpacity ?? 0.35).toString());
}, 200);

// 3. Apply Layout
function applyLayout(layout, instant = false) {
    const hLine = layoutBtn.querySelector('.layout-h-line');
    const vLine = layoutBtn.querySelector('.layout-v-line');
    
    const changeClasses = () => {
        if (layout === 'vertical') {
            mainContainer.classList.remove('horizontal-layout');
            mainContainer.classList.add('vertical-layout');
            if (hLine) hLine.style.display = 'none';
            if (vLine) vLine.style.display = 'block';
        } else {
            mainContainer.classList.remove('vertical-layout');
            mainContainer.classList.add('horizontal-layout');
            if (hLine) hLine.style.display = 'block';
            if (vLine) vLine.style.display = 'none';
        }
    };

    if (instant) {
        changeClasses();
    } else {
        mainContainer.classList.add('layout-transitioning');
        setTimeout(() => {
            changeClasses();
            requestAnimationFrame(() => {
                mainContainer.classList.remove('layout-transitioning');
            });
        }, 150);
    }
}
applyLayout(currentSettings.layout, true);

// 4. Set Selected Target Language
targetLangSelect.value = currentSettings.targetLang;

// 5. Apply Font Size
function applyFontSize(size) {
    document.documentElement.style.setProperty('--font-size-text', size + 'px');
}
applyFontSize(currentSettings.fontSize || 14);

// 5. Populate Settings Modal Inputs
function populateSettings() {
    apiUrlInput.value = currentSettings.apiUrl;
    apiKeyInput.value = currentSettings.apiKey;
    modelNameInput.value = currentSettings.modelName;
    document.getElementById('thinking-type').value = currentSettings.thinkingType || 'none';
    document.getElementById('reasoning-effort').value = currentSettings.reasoningEffort || 'none';
    opacitySlider.value = Math.round((currentSettings.opacity || 1.0) * 100);
    opacityValueSpan.textContent = opacitySlider.value + '%';
    transOpacitySlider.value = Math.round((currentSettings.transOpacity ?? 0.35) * 100);
    transOpacityValueSpan.textContent = transOpacitySlider.value + '%';
    uiLangSelect.value = currentSettings.uiLang || 'en';
    applyUILanguage(uiLangSelect.value); // Sync settings UI state
    fontSizeSlider.value = currentSettings.fontSize || 14;
    fontSizeValueSpan.textContent = fontSizeSlider.value + 'px';
    systemPromptInput.value = currentSettings.systemPrompt;
}

// --- Save Configurations ---

function saveSettings() {
    currentSettings.apiUrl = apiUrlInput.value.trim();
    currentSettings.apiKey = apiKeyInput.value.trim();
    currentSettings.modelName = modelNameInput.value.trim();
    currentSettings.thinkingType = document.getElementById('thinking-type').value;
    currentSettings.reasoningEffort = document.getElementById('reasoning-effort').value;
    currentSettings.opacity = parseFloat(opacitySlider.value) / 100;
    currentSettings.transOpacity = parseFloat(transOpacitySlider.value) / 100;
    currentSettings.uiLang = uiLangSelect.value;
    currentSettings.fontSize = parseInt(fontSizeSlider.value);
    currentSettings.systemPrompt = systemPromptInput.value.trim();
    localStorage.setItem('translator-settings', JSON.stringify(currentSettings));
    
    // Apply font size
    applyFontSize(currentSettings.fontSize);
    
    // Apply transparent mode backdrop opacity CSS variable
    document.documentElement.style.setProperty('--trans-bg-opacity', currentSettings.transOpacity.toString());

    if (isTransparentMode) {
        window.translatorAPI.setOpacity(1.0); // OS Window remains fully solid
    } else {
        window.translatorAPI.setOpacity(currentSettings.opacity);
    }
    applyUILanguage(currentSettings.uiLang);
    settingsModal.classList.remove('active');
    const t = toastMessages[currentSettings.uiLang] || toastMessages['en'];
    showToast(t.settingsSaved);
}

// --- Window Manager Click Bindings ---

winCloseBtn.addEventListener('click', () => window.translatorAPI.close());
winMinimizeBtn.addEventListener('click', () => window.translatorAPI.minimize());
winMaximizeBtn.addEventListener('click', () => window.translatorAPI.maximize());

// --- Toolbar Action Listeners ---

// Toggle Theme
themeToggleBtn.addEventListener('click', () => {
    currentSettings.theme = currentSettings.theme === 'light' ? 'dark' : 'light';
    applyTheme(currentSettings.theme);
    localStorage.setItem('translator-settings', JSON.stringify(currentSettings));
    showToast(`☀ Theme switched to ${currentSettings.theme} mode`);
});

// Toggle Always-on-Top Pin
pinBtn.addEventListener('click', () => {
    currentSettings.alwaysOnTop = !currentSettings.alwaysOnTop;
    applyAlwaysOnTop(currentSettings.alwaysOnTop);
    localStorage.setItem('translator-settings', JSON.stringify(currentSettings));
    showToast(currentSettings.alwaysOnTop ? '📌 Always on top: Locked' : '🔓 Always on top: Unlocked');
});

// Toggle Split Layout
layoutBtn.addEventListener('click', () => {
    currentSettings.layout = currentSettings.layout === 'horizontal' ? 'vertical' : 'horizontal';
    applyLayout(currentSettings.layout);
    localStorage.setItem('translator-settings', JSON.stringify(currentSettings));
    showToast(currentSettings.layout === 'horizontal' ? '◧ Layout: Horizontal Split' : '◫ Layout: Vertical Split');
});

// Select Target Language
targetLangSelect.addEventListener('change', () => {
    currentSettings.targetLang = targetLangSelect.value;
    localStorage.setItem('translator-settings', JSON.stringify(currentSettings));
    showToast(`🌐 Target Language: ${langNames[currentSettings.targetLang]}`);
});

// Settings Modal Triggers
settingsBtn.addEventListener('click', () => {
    populateSettings();
    settingsModal.classList.add('active');
});
closeSettingsBtn.addEventListener('click', () => {
    if (isTransparentMode) {
        window.translatorAPI.setOpacity(1.0);
        document.documentElement.style.setProperty('--trans-bg-opacity', (currentSettings.transOpacity ?? 0.35).toString());
    } else {
        window.translatorAPI.setOpacity(currentSettings.opacity || 1.0);
    }
    applyUILanguage(currentSettings.uiLang || 'en'); // Revert language changes
    applyFontSize(currentSettings.fontSize || 14); // Revert font size changes
    settingsModal.classList.remove('active');
});
saveSettingsBtn.addEventListener('click', saveSettings);

// Close settings on background click
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        if (isTransparentMode) {
            window.translatorAPI.setOpacity(1.0);
            document.documentElement.style.setProperty('--trans-bg-opacity', (currentSettings.transOpacity ?? 0.35).toString());
        } else {
            window.translatorAPI.setOpacity(currentSettings.opacity || 1.0);
        }
        applyUILanguage(currentSettings.uiLang || 'en'); // Revert language changes
        applyFontSize(currentSettings.fontSize || 14); // Revert font size changes
        settingsModal.classList.remove('active');
    }
});

// UI Language Select Dropdown Dynamic Change Preview
uiLangSelect.addEventListener('change', () => {
    applyUILanguage(uiLangSelect.value);
});

// Opacity Slider Real-time Preview Listener
opacitySlider.addEventListener('input', (e) => {
    const val = e.target.value;
    opacityValueSpan.textContent = val + '%';
    if (!isTransparentMode) {
        window.translatorAPI.setOpacity(val / 100);
    }
});

// Transparent Mode Opacity Slider Real-time Preview Listener
transOpacitySlider.addEventListener('input', (e) => {
    const val = e.target.value;
    transOpacityValueSpan.textContent = val + '%';
    if (isTransparentMode) {
        // Real-time CSS backdrop alpha update (keeping text 100% opaque)
        document.documentElement.style.setProperty('--trans-bg-opacity', (val / 100).toString());
    }
});

// Font Size Slider Real-time Preview Listener
fontSizeSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    fontSizeValueSpan.textContent = val + 'px';
    applyFontSize(val);
});

// --- Floating Pane Helper Buttons ---

// Paste and Translate Clipboard text
pasteTranslateBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        if (text && text.trim()) {
            inputText.value = text;
            showToast('📋 Clipboard pasted');
            doTranslate();
        } else {
            showToast('⚠ Clipboard is empty or contains non-text content');
        }
    } catch (err) {
        showToast('⚠ Failed to read clipboard: ' + err);
    }
});

// Paste and Translate Clipboard text (Right Pane for Transparent Mode)
pasteTranslateBtnRight.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        if (text && text.trim()) {
            inputText.value = text;
            showToast('📋 Clipboard pasted');
            doTranslate();
        } else {
            showToast('⚠ Clipboard is empty or contains non-text content');
        }
    } catch (err) {
        showToast('⚠ Failed to read clipboard: ' + err);
    }
});

// Clear Input/Output fields
clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.innerHTML = '';
    lastTranslatedText = '';
    showToast('🧹 Fields cleared');
});

// Clear Input/Output fields (Right Pane for Transparent Mode)
clearBtnRight.addEventListener('click', () => {
    inputText.value = '';
    outputText.innerHTML = '';
    lastTranslatedText = '';
    showToast('🧹 Fields cleared');
});

// Copy Output field markdown text
copyBtn.addEventListener('click', async () => {
    if (!lastTranslatedText) {
        showToast('⚠ Nothing to copy!');
        return;
    }
    try {
        await navigator.clipboard.writeText(lastTranslatedText);
        showToast('✓ Translation copied!');
    } catch (err) {
        showToast('⚠ Copy failed: ' + err);
    }
});

// Consolidated Top Actions (Transparent Mode)
clearBtnTop.addEventListener('click', () => {
    inputText.value = '';
    outputText.innerHTML = '';
    lastTranslatedText = '';
    showToast('🧹 Fields cleared');
});

pasteTranslateBtnTop.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        if (text && text.trim()) {
            inputText.value = text;
            showToast('📋 Clipboard pasted');
            doTranslate();
        } else {
            showToast('⚠ Clipboard is empty or contains non-text content');
        }
    } catch (err) {
        showToast('⚠ Failed to read clipboard: ' + err);
    }
});

copyBtnTop.addEventListener('click', async () => {
    if (!lastTranslatedText) {
        showToast('⚠ Nothing to copy!');
        return;
    }
    try {
        await navigator.clipboard.writeText(lastTranslatedText);
        showToast('✓ Translation copied!');
    } catch (err) {
        showToast('⚠ Copy failed: ' + err);
    }
});

// --- Toast alert creator ---
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    
    // Auto remove previous toasts to avoid stack overflow
    while (toastContainer.children.length > 2) {
        toastContainer.removeChild(toastContainer.firstChild);
    }
    
    toastContainer.appendChild(toast);
    
    // Smooth fadeout exit
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px) scale(0.95)';
        setTimeout(() => {
            if (toast.parentNode === toastContainer) {
                toastContainer.removeChild(toast);
            }
        }, 500);
    }, 2000);
}

// --- Translation Core Handlers ---

// Ctrl+Enter shortcut in textarea
inputText.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        doTranslate();
    }
});

// Translate Button
translateBtn.addEventListener('click', doTranslate);

// Core Translation Logic
async function doTranslate() {
    // Bug #6 fix: prevent re-entrant calls from rapid clicking
    if (translateBtn.disabled) return;

    const text = inputText.value.trim();

    if (!text) {
        const statusEl = document.createElement('span');
        statusEl.className = 'output-status';
        statusEl.textContent = 'Nothing to translate.';
        outputText.innerHTML = '';
        outputText.appendChild(statusEl);
        return;
    }

    if (!currentSettings.apiUrl || !currentSettings.apiKey) {
        const statusEl = document.createElement('span');
        statusEl.className = 'output-status';
        statusEl.textContent = '⚠ Please configure API URL and API Key in settings first.';
        outputText.innerHTML = '';
        outputText.appendChild(statusEl);
        settingsBtn.click();
        return;
    }

    translateBtn.disabled = true;
    outputText.innerHTML = '<span class="output-status">Connecting to translation API...</span>';

    // Formulate a robust target language instruction
    const targetLangName = langNames[currentSettings.targetLang] || 'Chinese';
    const dynamicInstruction = `\n\nCRITICAL REQUIREMENT: Translate all user text strictly into ${targetLangName}. Maintain any original Markdown, lists, paragraph breaks, or structural elements precisely. Do NOT provide any preamble, introductory notes, explanation, or meta-comments. Output ONLY the raw translated text.`;
    const finalSystemPrompt = currentSettings.systemPrompt + dynamicInstruction;

    // Reset translation streaming states
    window.translatorAPI.removeListeners();
    let accumulatedText = '';

    // Register SSE Stream Chunk handler
    window.translatorAPI.onTranslationChunk((chunk) => {
        accumulatedText += chunk;
        // Parse with marked and display with a typing glow cursor
        outputText.innerHTML = (window.marked ? window.marked.parse(accumulatedText) : accumulatedText) + '<span class="streaming-cursor"></span>';
        // Auto scroll viewport down to follow stream
        outputText.scrollTop = outputText.scrollHeight;
    });

    // Register SSE Stream Completion handler
    window.translatorAPI.onTranslationEnd(() => {
        // Render final result without typing cursor
        outputText.innerHTML = window.marked ? window.marked.parse(accumulatedText) : accumulatedText;
        lastTranslatedText = accumulatedText;
        translateBtn.disabled = false;
        window.translatorAPI.removeListeners();
        showToast('✓ Translation complete');
    });

    try {
        await window.translatorAPI.translate({
            apiUrl: currentSettings.apiUrl,
            apiKey: currentSettings.apiKey,
            modelName: currentSettings.modelName,
            systemPrompt: finalSystemPrompt,
            userText: text,
            thinkingType: currentSettings.thinkingType,
            reasoningEffort: currentSettings.reasoningEffort
        });
    } catch (err) {
        const statusEl = document.createElement('span');
        statusEl.className = 'output-status';
        statusEl.textContent = 'Error: ' + err;
        outputText.innerHTML = '';
        outputText.appendChild(statusEl);
        translateBtn.disabled = false;
        window.translatorAPI.removeListeners();
        showToast('⚠ Translation failed');
    }
}

// --- Transparent Mode Toggles ---

transparentModeBtn.addEventListener('click', () => {
    isTransparentMode = true;
    previousAlwaysOnTopState = currentSettings.alwaysOnTop;
    
    // Enforce Always-On-Top
    applyAlwaysOnTop(true);
    
    // Keep the OS window opacity at 1.0 (fully solid) so text and buttons are 100% opaque
    window.translatorAPI.setOpacity(1.0);
    
    // Apply transparent mode backdrop opacity CSS variable
    document.documentElement.style.setProperty('--trans-bg-opacity', (currentSettings.transOpacity ?? 0.35).toString());
    
    document.body.classList.add('transparent-mode');
    
    // Initialize window to ignore mouse events (letting clicks pass through to background window/desktop)
    // enabling the "forward" option lets HTML hover and mousemove events still fire in our window context
    window.translatorAPI.setIgnoreMouseEvents(true, { forward: true });
    lastIgnoreState = true;
    
    const t = toastMessages[currentSettings.uiLang] || toastMessages['en'];
    showToast(t.transparentEnter);
});

exitTransparentBtn.addEventListener('click', () => {
    isTransparentMode = false;
    
    // Restore Always-On-Top configuration
    applyAlwaysOnTop(previousAlwaysOnTopState);
    
    // Restore saved window-level opacity
    window.translatorAPI.setOpacity(currentSettings.opacity || 1.0);
    
    // Restore full mouse interaction intercepting
    window.translatorAPI.setIgnoreMouseEvents(false);
    lastIgnoreState = false;
    
    document.body.classList.remove('transparent-mode');
    
    const t = toastMessages[currentSettings.uiLang] || toastMessages['en'];
    showToast(t.transparentExit);
});

// Geometric bounding box checking for the transparent floating capsule
// This avoids Chromium DOM hit-testing limitations when the window is click-through
function isOverCapsule(clientX, clientY) {
    if (window.innerWidth <= 250) {
        // Small layout for screen widths <= 250px
        const left = window.innerWidth / 2 - 75.5 - 6;
        const right = window.innerWidth / 2 + 75.5 + 6;
        const top = 8 - 6;
        const bottom = 64 + 6;
        return (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom);
    } else {
        // Standard layout
        const left = window.innerWidth / 2 - 107.5 - 6;
        const right = window.innerWidth / 2 + 107.5 + 6;
        const top = 16 - 6;
        const bottom = 96 + 6;
        return (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom);
    }
}

// Dynamic Click-Through Management for Transparent Mode Overlay
window.addEventListener('mousemove', (e) => {
    if (e.buttons > 0) return; // Critical: Do not alter state during active clicks/dragging
    
    if (!isTransparentMode) {
        if (lastIgnoreState !== false) {
            window.translatorAPI.setIgnoreMouseEvents(false);
            lastIgnoreState = false;
        }
        return;
    }

    // Bug #3 fix: When settings modal is open, keep mouse events enabled
    if (settingsModal.classList.contains('active')) {
        if (lastIgnoreState !== false) {
            window.translatorAPI.setIgnoreMouseEvents(false);
            lastIgnoreState = false;
        }
        return;
    }
    
    // In transparent mode, rely purely on geometric coordinate hit-testing of the capsule
    const isInteractive = isOverCapsule(e.clientX, e.clientY);
    
    if (isInteractive) {
        if (lastIgnoreState !== false) {
            window.translatorAPI.setIgnoreMouseEvents(false);
            lastIgnoreState = false;
        }
    } else {
        if (lastIgnoreState !== true) {
            window.translatorAPI.setIgnoreMouseEvents(true, { forward: true });
            lastIgnoreState = true;
        }
    }
});
