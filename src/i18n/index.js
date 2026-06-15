import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en/translation.json';
import translationES from './es/translation.json';

const STORAGE_KEY = 'portfolio.lang';
const SUPPORTED = ['es', 'en'];

function detectInitialLanguage() {
    if (typeof window === 'undefined') return 'es';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (window.navigator.language || 'es').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
}

const resources = {
    en: { translation: translationEN },
    es: { translation: translationES },
};

i18n.use(initReactI18next).init({
    resources,
    lng: detectInitialLanguage(),
    fallbackLng: 'es',
    supportedLngs: SUPPORTED,
    keySeparator: false,
    interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
    if (typeof window !== 'undefined' && SUPPORTED.includes(lng)) {
        window.localStorage.setItem(STORAGE_KEY, lng);
        document.documentElement.lang = lng;
    }
});

if (typeof document !== 'undefined') {
    document.documentElement.lang = i18n.language;
}

export default i18n;
