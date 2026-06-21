# Portfolio Agustin Gigena — Design Spec

**Fecha:** 2026-06-21
**Estado:** Aprobado

---

## 1. Resumen

Portfolio personal de Agustin Gigena, desarrollador Full Stack / .NET Developer. Single page application estática con scroll suave, modo oscuro/claro con auto-detección, diseño moderno y minimalista.

**Stack:** HTML5 + CSS3 + TypeScript vanilla (sin frameworks)

---

## 2. Tech Stack

- HTML5 semántico
- CSS3 con variables CSS para theming
- TypeScript vanilla (compilado a JS)
- Google Fonts: Inter
- Sin dependencias externas

---

## 3. Theming

**Variables CSS:** Paleta de colores definida en `:root` y `[data-theme="dark"]`

| Variable | Claro | Oscuro |
|---|---|---|
| `--bg-primary` | `#ffffff` | `#0a0a0a` |
| `--bg-secondary` | `#f8f9fa` | `#1a1a1a` |
| `--text-primary` | `#1a1a1a` | `#f0f0f0` |
| `--text-secondary` | `#666666` | `#999999` |
| `--accent` | `#2563eb` | `#3b82f6` |
| `--border` | `#e5e7eb` | `#2a2a2a` |
| `--navbar-bg` | `rgba(255,255,255,0.85)` | `rgba(10,10,10,0.85)` |

**Detección:** `prefers-color-scheme` + `localStorage` para persistir preferencia
**Toggle:** Botón en navbar, override manual del usuario

---

## 4. Layout

### Navbar
- Fixed arriba, `backdrop-filter: blur(10px)`
- Logo/nombre a la izquierda
- Links: Inicio, Sobre mí, Experiencia, Skills, Proyectos, Contacto
- Botón toggle dark/light a la derecha
- Scroll: background se vuelve sólido después de 50px

### Secciones (en orden)
1. **Hero** — Foto circular, nombre, título, tagline, links a redes
2. **Sobre mí** — Perfil resumido + stats (años exp, proyectos, tecnologías, horas código)
3. **Experiencia** — Timeline vertical con cada puesto laboral
4. **Skills** — Categorías: Backend, Frontend, DevOps, Herramientas (chips con iconos)
5. **Educación + Certificaciones** — Formación académica y cursos
6. **Proyectos** — Cards grid: nombre, descripción, tech tags, link GitHub
7. **Blog** — Placeholder para futuro contenido
8. **Contacto** — Formulario (UI) + links directos (email, LinkedIn, GitHub)

### Footer
- Copyright + links a redes sociales

---

## 5. Componentes

### Hero
- Foto circular (borde sutil)
- Nombre: Inter bold, 3-4rem
- Título: "Desarrollador Full Stack / .NET Developer"
- Icons de redes: LinkedIn, GitHub, Email (SVG inline)

### Stats
- 4 métricas: Años de experiencia (4+), Proyectos (5+), Tecnologías (9+), Horas de código
- Animación de conteo al entrar en viewport (IntersectionObserver)

### Experiencia (Timeline)
- Línea vertical con puntos
- Año a la izquierda, detalles a la derecha
- Empresa, cargo, bullets con logros
- Responsive: apila verticalmente en mobile

### Skills/Stack
- Chips/badges agrupados por categoría
- Iconos: SVG inline o emojis
- Hover: cambio de color de fondo

### Proyectos
- Cards grid (2-3 columnas desktop, 1 mobile)
- Contenido: nombre, descripción, tech tags, link GitHub
- Hover: sombra + borde accent + translate-up

### Contacto
- Formulario: nombre, email, mensaje (solo UI)
- Links: email, LinkedIn, GitHub
- Botón "Descargar CV" (futuro)

---

## 6. Animaciones

- **Scroll reveal:** Elementos aparecen al entrar en viewport (IntersectionObserver)
- **Transiciones:** 200-300ms ease
- **Hover effects:** Sombras, translate-up en cards
- **Navbar:** Blur effect que se vuelve sólido al scrollear

---

## 7. Responsive

- Breakpoints: 768px (tablet), 480px (mobile)
- Navbar: hamburger menu en mobile
- Stats: 2x2 grid en mobile
- Projects: 1 columna en mobile

---

## 8. Deploy — GitHub Pages

**Enfoque:**
- Repositorio en GitHub: `Agustin-Gigena/Portfolio`
- Branch fuente: `main`
- GitHub Pages sirve archivos estáticos directamente desde la raíz del repo
- No se usa GitHub Actions para build — el JS compilado se commitea al repo
- URL pública: `https://agustin-gigena.github.io/Portfolio/`

**Estrategia de build:**
- TypeScript se compila localmente con `tsc` antes de commitear
- El archivo `ts/main.js` resultante se incluye en el repo (no se genera en CI)
- No hay pipeline de deploy — el push a `main` activa la publicación automática en GitHub Pages

**Archivos servidos por GitHub Pages:**
- `index.html` (entry point)
- `css/styles.css`
- `ts/main.js` (compilado desde TypeScript)
- `img/*` (fotos, favicon)
- Cualquier asset estático adicional

**Restricciones:**
- Solo archivos estáticos (HTML, CSS, JS, imágenes)
- Sin backend, sin server-side rendering
- Sin dependencias que requieran node_modules en runtime
- Ruta base: `/Portfolio/` (repo name) — todos los links internos deben usar paths relativos

---

## 9. Estructura de Archivos

```
/
├── index.html
├── css/
│   └── styles.css
├── ts/
│   └── main.ts
├── img/
│   ├── profile.jpg
│   └── favicon.ico
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-06-21-portfolio-design.md
└── package.json
```

---

## 10. Contenido (del CV)

### Datos personales
- Nombre: Agustin Gigena
- Título: Desarrollador Full Stack / .NET Developer
- Teléfono: (+54) 3489-599338
- Email: agustingigena1704@gmail.com
- LinkedIn: agustingigena
- GitHub: Agustin-Gigena

### Experiencia
1. **Alephoo — Desarrollador de Soluciones (2024 - Presente)**
   - Líder de soporte técnico avanzado
   - Sistema turnero con notificaciones en tiempo real (PHP, CodeIgniter, Doctrine)
   - Scripts automatizados de validación CI/CD

2. **2022 - Presente (+4 años) — Independiente**
   - Aplicación .NET Core para gestión de rugby (Entity Framework, MySQL/PostgreSQL)
   - Sistema de actualización automática con GitHub
   - Herramientas de automatización en C# y Linux

### Skills
- Python, C#, .NET Framework, PHP 8.4, Doctrine, CodeIgniter, MySQL, HTML, CSS

### Educación
- Tecnnicatura Universitaria en Programación — UTN FRD (2024 - Actualidad, 2° año)
- Curso Blazor en .NET 10

### Proyectos
- OpenCode Integration (extensión VS Code)
- RugbyEngine (C#)
- AuthEro (C#)
- GameOfLife (Rust)
- phpstan-rust
