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
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--bg-primary)';
    }
    else {
        navbar.style.background = 'var(--navbar-bg)';
    }
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
// Stats Counter Animation
// ============================================
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target') || '0');
    const duration = 2000;
    const start = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current >= 1000 ? `${Math.floor(current / 1000)}K+` : `${current}+`;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.stat__number');
            numbers.forEach(num => animateCounter(num));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}
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
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
// ============================================
// Contact Form (mailto)
// ============================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message)
            return;
        const to = 'agustingigena1704@gmail.com';
        const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`);
        const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
}
