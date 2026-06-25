// ============================================
// Theme Toggle
// ============================================
const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
const html = document.documentElement;

function getPreferredTheme(): string {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme: string): void {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = themeToggle.querySelector('.theme-toggle__icon') as HTMLElement;
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// ============================================
// Hamburger Menu
// ============================================
const hamburger = document.getElementById('hamburger') as HTMLButtonElement;
const navLinks = document.getElementById('nav-links') as HTMLElement;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar') as HTMLElement;
window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
});

// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        } else {
            entry.target.classList.remove('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// ============================================
// Active Nav Link on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        const isActive = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'section');
        } else {
            link.removeAttribute('aria-current');
        }
    });
});

// ============================================
// Contact Form (Formspree + mailto fallback)
// ============================================
const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
const formStatus = document.getElementById('form-status') as HTMLDivElement | null;
const submitBtn = document.getElementById('form-submit') as HTMLButtonElement | null;

function setFormError(fieldId: string, message: string): void {
    const errorEl = document.getElementById(fieldId) as HTMLSpanElement | null;
    const input = errorEl?.previousElementSibling as HTMLElement | null;
    if (errorEl) errorEl.textContent = message;
    if (input) input.classList.toggle('input-error', !!message);
}

function clearFormErrors(): void {
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

function setFormStatus(type: 'success' | 'error' | '', message: string): void {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = `form-status form-status--${type}`;
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearFormErrors();

        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();

        let valid = true;

        if (!name) { setFormError('name-error', 'El nombre es obligatorio'); valid = false; }
        if (!email) { setFormError('email-error', 'El email es obligatorio'); valid = false; }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFormError('email-error', 'Email no válido'); valid = false;
        }
        if (!message) { setFormError('message-error', 'El mensaje es obligatorio'); valid = false; }

        if (!valid) return;

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('btn--loading');
        }
        setFormStatus('', '');

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setFormStatus('success', '¡Mensaje enviado! Te respondo a la brevedad.');
                contactForm.reset();
            } else {
                const data = await response.json();
                setFormStatus('error', data?.error || 'Error al enviar. Usá el enlace de email directo.');
                fallbackMailto(name, email, message);
            }
        } catch {
            setFormStatus('error', 'No se pudo conectar. Abriendo tu cliente de email...');
            fallbackMailto(name, email, message);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn--loading');
            }
        }
    });
}

function fallbackMailto(name: string, email: string, message: string): void {
    const to = 'agustingigena1704@gmail.com';
    const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
