// ============================================
// i18n — Internationalization Module
// ============================================

type Lang = 'es' | 'en';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Lang = 'es';

function getInitialLang(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'en' ? 'en' : DEFAULT_LANG;
}

function applyLang(lang: Lang): void {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll<HTMLElement>('[data-es]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });

    document.querySelectorAll<HTMLElement>('[data-placeholder-es]').forEach(el => {
        const text = el.getAttribute(`data-placeholder-${lang}`);
        if (text && 'placeholder' in el) {
            (el as HTMLInputElement | HTMLTextAreaElement).placeholder = text;
        }
    });

    const label = document.querySelector('.lang-toggle__label');
    if (label) label.textContent = lang.toUpperCase();
}

function toggleLang(): void {
    const current = document.documentElement.getAttribute('lang') as Lang;
    const next: Lang = current === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
}

applyLang(getInitialLang());
document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);
