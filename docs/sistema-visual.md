# Sistema visual del portfolio

Propuesta cerrada el 2026-11-02 con las decisiones de la persona: tema automático claro y oscuro, acento azul profesional, sin foto grande y sin PDF del CV.

## Dirección

Editorial técnico y sobrio. Una sola columna de lectura, capturas grandes y mucho aire. El color de marca se limita a enlaces, botones y detalles; el color visual lo aportan las capturas de los proyectos.

## Paleta

### Tema claro

| Token | Valor | Uso | Contraste |
| --- | --- | --- | --- |
| `--bg` | `#f7f8fa` | Fondo de página | — |
| `--surface` | `#ffffff` | Tarjetas y bloques | — |
| `--text` | `#111827` | Texto principal | 16,69:1 sobre `--bg` |
| `--muted` | `#4b5563` | Texto secundario | 7,11:1 sobre `--bg` |
| `--border` | `#e5e7eb` | Bordes y separadores | — |
| `--accent` | `#2563eb` | Enlaces y botones | 4,86:1 sobre `--bg`; 5,17:1 sobre blanco |
| `--accent-strong` | `#1d4ed8` | Hover y foco | — |
| `--accent-soft` | `#dbeafe` | Fondos suaves | — |
| `--focus` | `#1d4ed8` | Anillo de foco | — |

### Tema oscuro

| Token | Valor | Uso | Contraste |
| --- | --- | --- | --- |
| `--bg` | `#0b1120` | Fondo de página | — |
| `--surface` | `#111827` | Tarjetas y bloques | — |
| `--text` | `#f9fafb` | Texto principal | 18,02:1 sobre `--bg` |
| `--muted` | `#9ca3af` | Texto secundario | 7,42:1 sobre `--bg` |
| `--border` | `#1f2937` | Bordes y separadores | — |
| `--accent` | `#60a5fa` | Enlaces y botones | 7,41:1 sobre `--bg` |
| `--accent-strong` | `#93c5fd` | Hover y foco | 10,44:1 sobre `--bg` |
| `--accent-soft` | `#1e3a8a` | Fondos suaves | — |
| `--focus` | `#93c5fd` | Anillo de foco | — |

El texto blanco sobre `--accent` en tema claro da 5,17:1 y cumple AA. En tema oscuro, el botón primario usa fondo `--accent` y texto `#0b1120`, no blanco.

## Tipografía

- Familia: pila del sistema, sin fuentes externas.
- Texto: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- Código y etiquetas: `ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace`.
- Cuerpo: 17 px en escritorio y 16 px en móvil, con interlineado 1,65.
- `h1`: `clamp(2.5rem, 6vw, 4rem)`, peso 700 y `letter-spacing` negativo leve.
- `h2`: `clamp(1.75rem, 3vw, 2.25rem)`.
- `h3`: 1,25 rem.
- Antetítulo: 0,75 rem, mayúsculas y `letter-spacing` de 0,08 em.
- Ancho máximo de párrafo: 65 caracteres.

## Espaciado y rejilla

- Escala base de 4 px: 4, 8, 12, 16, 24, 32, 48, 64, 96 y 128.
- Contenedor máximo: 1120 px.
- Margen lateral: 24 px en móvil y 32 px en escritorio.
- Sección: 80 px arriba y abajo en escritorio; 48 px en móvil.
- Rejilla de proyecto: 55 % imagen y 45 % texto en escritorio; una columna por debajo de 900 px.
- Hero: texto a la izquierda y foto de 120 px a la derecha; en móvil, texto y foto de 96 px debajo.

## Estructura de la página

1. Cabecera con nombre, anclas a Proyectos, Cómo trabajo y Contacto. En móvil se ocultan las anclas y queda el botón de contacto.
2. Hero con nombre, rol, una frase de posicionamiento, ubicación, disponibilidad y botones de email y LinkedIn.
3. Cuatro proyectos, cada uno con captura, problema, aportación, resultado, aprendizaje, stack y enlaces.
4. Cómo trabajo, con cuatro prácticas verificables.
5. Stack agrupado por frontend, backend, datos, IA y calidad.
6. Contacto con email, LinkedIn y GitHub.
7. Pie con nombre, año y una línea sobre cómo está hecha la página.

## Componentes

- **Botón primario:** fondo `--accent`, texto blanco en claro y `#0b1120` en oscuro, radio de 8 px, altura mínima de 44 px.
- **Botón secundario:** fondo transparente, borde `--border`, texto `--text`.
- **Etiqueta de stack:** fondo `--accent-soft`, texto `--accent-strong`, radio completo, 12 px.
- **Ficha de proyecto:** captura arriba, texto debajo; sin sombras fuertes, solo borde y un radio de 12 px.
- **Enlaces en texto:** subrayados y con `text-underline-offset` de 3 px; el color no es el único indicador.
- **Foco:** contorno de 3 px con `--focus` y separación de 2 px.

## Imágenes

- Capturas a 1440×900, recortadas a 1200×750 y exportadas en WebP con calidad 82.
- Aplika: `assets/img/aplika-panel.png`, panel Kanban con datos ficticios.
- Copilot: diagrama SVG propio, sin captura de terminal.
- Pokédex: `assets/img/pokedex-demo.png`, recortar la barra de scroll inferior antes de exportar.
- Juego: `assets/img/juego-demo.png`, recortar la barra de scroll derecha antes de exportar.
- Foto: `assets/img/foto-perfil.png`, recorte circular de 480 px. Se muestra a 120 px como máximo porque el origen útil es de 240 px. El recorte elimina el marco verde de LinkedIn. Si se quiere una foto mayor, hay que pedir el original sin marco.
- Texto alternativo descriptivo: qué muestra la captura y qué demuestra, no «imagen de».
- `loading="lazy"` en las capturas de proyecto y `decoding="async"` en todas.

## Movimiento

- Transiciones de 160 ms para hover y foco.
- Sin animaciones de entrada, parallax ni scroll reveal.
- `prefers-reduced-motion: reduce` desactiva las transiciones.

## Tema automático

- `color-scheme: light dark` en `:root` y en la etiqueta `meta`.
- Variables en `:root` para el tema claro y un bloque `@media (prefers-color-scheme: dark)` para el oscuro.
- Sin botón de tema, sin `localStorage` y sin script de inicialización.
- Los controles nativos, el scrollbar y los formularios heredan el esquema del sistema.

## Accesibilidad

- Enlace «Saltar al contenido» como primer elemento enfocable.
- Un solo `h1`; `h2` por sección y `h3` por proyecto.
- HTML semántico con `header`, `nav`, `main`, `section` y `footer`.
- Navegación completa con teclado y foco visible.
- Contraste mínimo de 4,5:1 en texto normal y 3:1 en texto grande, comprobado en los dos temas.
- Sin contenido que dependa solo del color.
- `lang="es"` y `dir="ltr"`.
- Sin movimiento automático ni parpadeos.

## Rendimiento

- Sin fuentes externas, sin frameworks y sin librerías.
- CSS por debajo de 15 KB, HTML por debajo de 30 KB y JavaScript inexistente o menor de 2 KB.
- Peso total por debajo de 1 MB.
- Imágenes en WebP, dimensiones declaradas y carga diferida salvo la foto del hero.

## Pendiente de validación

- Revisar la propuesta de neutros y la alternancia de las fichas en la primera maqueta.
- Confirmar el texto del hero y el orden de los cuatro proyectos.
- Si la foto no convence en la maqueta, el hero funciona sin ella sin cambiar la rejilla.
