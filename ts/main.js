"use strict";
// ============================================
// Theme Toggle
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved)
        return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = themeToggle.querySelector('.theme-toggle__icon');
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
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
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
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
});
// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
        else {
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
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
        }
    });
    navLinks.querySelectorAll('a').forEach(link => {
        const isActive = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'section');
        }
        else {
            link.removeAttribute('aria-current');
        }
    });
});
// ============================================
// Contact Form (Web3Forms + mailto fallback)
// ============================================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit');
function setFormError(fieldId, message) {
    const errorEl = document.getElementById(fieldId);
    const input = errorEl?.previousElementSibling;
    if (errorEl)
        errorEl.textContent = message;
    if (input)
        input.classList.toggle('input-error', !!message);
}
function clearFormErrors() {
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}
function setFormStatus(type, message) {
    if (!formStatus)
        return;
    formStatus.textContent = message;
    formStatus.className = `form-status form-status--${type}`;
}
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearFormErrors();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let valid = true;
        if (!name) {
            setFormError('name-error', 'El nombre es obligatorio');
            valid = false;
        }
        if (!email) {
            setFormError('email-error', 'El email es obligatorio');
            valid = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFormError('email-error', 'Email no válido');
            valid = false;
        }
        if (!message) {
            setFormError('message-error', 'El mensaje es obligatorio');
            valid = false;
        }
        if (!valid)
            return;
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
            });
            if (response.ok) {
                setFormStatus('success', '¡Mensaje enviado! Te respondo a la brevedad.');
                contactForm.reset();
            }
            else {
                setFormStatus('error', 'Error al enviar. Intentá de nuevo o usá el email directo.');
                fallbackMailto(name, email, message);
            }
        }
        catch {
            setFormStatus('error', 'No se pudo conectar. Abriendo tu cliente de email...');
            fallbackMailto(name, email, message);
        }
        finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn--loading');
            }
        }
    });
}
function fallbackMailto(name, email, message) {
    const to = 'agustingigena1704@gmail.com';
    const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
