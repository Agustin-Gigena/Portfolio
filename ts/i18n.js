"use strict";
// ============================================
// i18n — Internationalization Module
// ============================================
const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'es';
function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en')
        return saved;
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'en' ? 'en' : DEFAULT_LANG;
}
function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-es]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text)
            el.textContent = text;
    });
    document.querySelectorAll('[data-placeholder-es]').forEach(el => {
        const text = el.getAttribute(`data-placeholder-${lang}`);
        if (text && 'placeholder' in el) {
            el.placeholder = text;
        }
    });
    const label = document.querySelector('.lang-toggle__label');
    if (label)
        label.textContent = lang.toUpperCase();
}
function toggleLang() {
    const current = document.documentElement.getAttribute('lang');
    const next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
}
applyLang(getInitialLang());
document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);
