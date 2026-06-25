---
name: Portfolio Agustin Gigena
description: Portfolio profesional de desarrollador .NET Full Stack
colors:
  senal: "#2563eb"
  senal-hover: "#1d4ed8"
  senal-profunda: "#7c3aed"
  acento-calido: "#f59e0b"
  ink: "#1a1a1a"
  muted: "#666666"
  bg: "#ffffff"
  bg-secondary: "#f8f9fa"
  surface: "#ffffff"
  border: "#e5e7eb"
  tag-bg: "#e8f0fe"
  tag-text: "#1a56db"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.2
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "50%"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "4rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.senal}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.senal-hover}"
    textColor: "#ffffff"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.border}"
  input:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border}"
    padding: "12px 16px"
  tag:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.tag-text}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
  nav-link:
    textColor: "{colors.muted}"
    fontSize: "0.9rem"
    fontWeight: 500
---

# Design System: Portfolio Agustin Gigena

## 1. Overview

**Creative North Star: "La Consola Oscura"**

El portfolio se concibe como una terminal abierta: fondo oscuro como canvas, señales de color que transmiten información, tipografía precisa. Cada elemento está donde tiene que estar porque su función lo exige, no porque ocupe espacio. El modo claro es el turno diurno: mismo rigor, fondo más luminoso, misma intensidad de señal.

El sistema rechaza explícitamente: portfolios template, glorificación decorativa (glassmorphism, gradientes sin propósito, sombras expansivas), layouts que esconden la información detrás de adornos. La deuda técnica visual no se perdona: si un elemento no comunica expertise, sobra.

**Key Characteristics:**
- Alto contraste en ambos modos (oscuro como lienzo principal, claro como alternancia)
- Paleta de tres acentos con roles definidos (Señal, Señal-profunda, Acento-cálido)
- Interacciones sólidas y predecibles — el hover no sorprende, confirma
- Elevación híbrida: superficies planas en reposo, sombra suave al interactuar
- Sin texto gradiente, sin glassmorphism, sin bordes decorativos laterales

## 2. Colors

Dos modos completos: oscuro (lienzo principal, `#0a0a0a`) y claro (`#ffffff`). Los nombres de token refieren al modo claro; los valores oscuros se describen por variante.

### Primary
- **Señal** (#2563eb / #3b82f6 en oscuro): Azul de acento principal. Se usa exclusivamente para elementos interactivos (links, botones, íconos) y números destacados (stats). No es decorativo — su presencia siempre implica acción o información primaria.

### Secondary
- **Señal-profunda** (#7c3aed / #8b5cf6 en oscuro): Púrpura. Aparece en bordes de tarjetas en hover, fondos de timeline dot, y como segundo acento en gradientes. Marca distinción sin competir con Señal.

### Tertiary
- **Acento-cálido** (#f59e0b / #fbbf24 en oscuro): Ámbar. Reservado para metadata temporal (fechas en timeline, educación) y glows decorativos. Aporta calidez al ecosistema frío de azules.

### Neutral
- **Ink** (#1a1a1a claro / #f0f0f0 oscuro): Texto primario. Contraste ≥ 15:1 en claro, ≥ 14:1 en oscuro.
- **Muted** (#666666 claro / #999999 oscuro): Texto secundario, subtítulos, descripciones. Contraste ≥ 5.5:1 en claro (supera WCAG AA para texto pequeño).
- **Bg** (#ffffff claro / #0a0a0a oscuro): Fondo de página principal.
- **Bg-secondary** (#f8f9fa claro / #1a1a1a oscuro): Fondos alternos, inputs.
- **Surface** (#ffffff claro / #1a1a1a oscuro): Tarjetas, contenedores.
- **Border** (#e5e7eb claro / #2a2a2a oscuro): Líneas divisorias, bordes de inputs y tarjetas.
- **Tag-bg / Tag-text** (#e8f0fe / #1a56db claro; #1e3a5f / #93c5fd oscuro): Fondo y texto de chips de tecnología/skills.

### Named Rules
**La Regla de Señal.** El acento azul aparece solo en elementos con los que se interactúa o que comunican información primaria. No se usa como relleno decorativo, fondo de sección, o borde lateral. Su presencia es siempre intencional.

## 3. Typography

**Display Font:** Inter (700)
**Body Font:** Inter (400, 500, 600, 700)
**Mono Font:** JetBrains Mono (400, 500, 600)

**Character:** Una familia sans-serif geométrica para todo el espectro — de titulares a cuerpo. Inter es funcional, legible, y no compite con el contenido. El mono JetBrains aparece exclusivamente para código, etiquetas técnicas y metadata, marcando el territorio del desarrollador sin caer en lo afectado.

### Hierarchy
- **Display** (700, `clamp(2.2rem, 6vw, 3.5rem)`, 1.1): Hero name. Letter-spacing -0.02em. `text-wrap: balance`.
- **Headline** (700, `clamp(1.5rem, 4vw, 2rem)`, 1.3): Section titles (Sobre mí, Experiencia, Skills, etc.). Acompañados de subtítulo muted debajo.
- **Title** (600, 1.2rem, 1.4): Nombres de empresa en timeline, títulos de proyectos, categorías de skills.
- **Body** (400, 1rem, 1.7): Texto corrido, descripciones. Ancho máximo de línea 65–75ch.
- **Label** (600, 0.85rem, 1.2): Labels de formulario, encabezados de metadata.
- **Mono** (500, 0.85rem, 1.5): Tags de tecnología, fechas, código. Font-family JetBrains Mono.

### Named Rules
**La Regla de la Señal Visual.** Inter es la única voz. No se introducen segundas familias sans-serif que compitan con Inter. JetBrains Mono es la excepción única y exclusiva para contenido técnico.

## 4. Elevation

Sistema híbrido: las superficies son planas en reposo (sin sombra, con borde de 1px). La elevación aparece exclusivamente como respuesta a interacción o para destacar contenido principal.

- Hover de tarjeta: `box-shadow: 0 8px 24px var(--card-shadow-hover)` + translateY(-2px a -4px)
- Hover de botón: `box-shadow: 0 4px 16px var(--btn-shadow)` + translateY(-1px)
- Hover de link de contacto: `box-shadow: 0 4px 12px var(--card-shadow)` + translateY(0)
- Foto de perfil (hero): `box-shadow: 0 8px 32px var(--card-shadow)` — elevación estructural, no interactiva

Los valores de sombra se duplican por modo (claro y oscuro) mediante variables CSS.

### Named Rules
**La Regla Sin Sombra en Reposo.** Ninguna superficie tiene sombra por defecto. La elevación es una respuesta, no un estado basal. Excepción: la foto de perfil del hero, que es un punto focal estructural.

## 5. Components

### Buttons
- **Shape:** Bordes suaves (8px). Sin borde visible. Padding vertical 12px, horizontal 24px.
- **Primary:** Fondo Señal (`--accent`), texto blanco, peso 600. Hover: Señal-hover, sombra 0 4px 16px, translateY(-1px), opacidad 0.9.
- **States:** Hover + sombra + levantamiento. Focus: outline none + border-color cambia a accent.

### Cards
- **Corner Style:** Esquinas suaves (12px). 
- **Background:** Surface.
- **Shadow Strategy:** Sin sombra en reposo. Borde de 1px solid border. En hover: sombra 0 8px 24px + translateY(-2px a -4px) + border-color cambia a Señal-profunda.
- **Internal Padding:** 24px (1.5rem).
- **Usos:** Proyectos, educación, stats. Cada uno con variante propia (project-card, education\_\_item, stat).

### Chips / Tags
- **Style:** Fondo tag-bg, texto tag-text. Sin borde. Radio 6px (sm).
- **Hover:** Gradiente Señal → Señal-profunda como fondo, texto blanco, translateY(-2px).
- **Usos:** Tecnologías en skills, tags de proyectos.

### Inputs / Fields
- **Style:** Fondo bg-secondary, borde 1px solid border, radio 8px. Padding 12px 16px.
- **Focus:** Borde cambia a Señal. Sin glow, sin outline adicional.
- **States:** Placeholder en muted. Error (futuro): borde rojo sin glow.

### Navigation
- **Style:** Fixed顶部，backdrop-filter blur(12px), fondo navbar-bg semitransparente. Logo: tamaño 1.25rem, peso 700, underline gradiente. Links: color muted, peso 500, tamaño 0.9rem, hover a Señal con underline animation.
- **Mobile:** Menú hamburguesa, links en columna al togglear.

## 6. Do's and Don'ts

### Do:
- **Do** usar Señal (azul) exclusivamente para elementos interactivos y números destacados.
- **Do** mantener contraste ≥ 4.5:1 en texto body y placeholder.
- **Do** usar `text-wrap: balance` en headings y `text-wrap: pretty` en párrafos largos.
- **Do** espaciar con ritmo: separaciones generosas entre secciones (6rem), compactas dentro de componentes (1rem).
- **Do** respetar el modo oscuro como lienzo principal y el claro como alternancia equivalente.
- **Do** usar translateY + shadow como respuesta a hover de tarjetas y botones.

### Don't:
- **Don't** usar gradient text (`background-clip: text` + gradiente). El hero name actual usa esta técnica y es una violación conocida del sistema. Reemplazar por color sólido Señal.
- **Don't** usar side-stripe borders (borde izquierdo/derecho > 1px como acento decorativo).
- **Don't** aplicar glassmorphism (backdrop-filter blur decorativo en superficies).
- **Don't** usar sombras en superficies en reposo. La elevación se gana con la interacción.
- **Don't** mezclar fuentes sans-serif. Inter es la única familia para texto proporcional.
- **Don't** caer en layouts template: portfolios Bootstrap, themes prefabricados, secciones idénticas con icono + heading + texto.
- **Don't** usar emojis como íconos principales donde corresponde SVG inline.
- **Don't** superponer `border: 1px solid` + `box-shadow` con blur ≥ 16px en el mismo elemento.
- **Don't** usar "eyebrow" tracking uppercase repetido sobre cada sección.
