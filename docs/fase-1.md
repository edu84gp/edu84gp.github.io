# Portfolio: fase 1

Página completa publicada sobre la estructura de la fase 0 en `https://edu84gp.github.io/`.

Actualizada el 2026-11-04.

## Alcance

- Esqueleto semántico y las cuatro fichas completas, no solo el hero.
- Orden: Aplika Jobs, AI Job Search Copilot, Pokédex Web y El Juego de la Vida.
- JavaScript mínimo: foco del contenido principal al usar el salto y selector de tema de tres estados. El año del pie es fijo y el menú móvil se resuelve con CSS.
- Tema automático, claro y oscuro. Automático es el valor por defecto y sigue a `prefers-color-scheme`; el ciclo depende del sistema y la elección manual se guarda en `localStorage` con la clave `tema`. El modo automático borra la clave.

## Archivos

- `index.html`: página única con metadatos, datos estructurados, cabecera, hero, cuatro proyectos, método, stack, contacto y pie.
- `assets/css/style.css`: tokens, rejilla, componentes, responsive y movimiento reducido.
- `assets/js/main.js`: foco del contenido principal al usar el enlace de salto y ciclo del tema automático, claro y oscuro, con anuncio en una región `role="status"`.
- `assets/img/aplika-panel.webp`, `pokedex-demo.webp`, `juego-demo.webp`: capturas a 1200×750 y calidad 82.
- `assets/img/copilot-flujo.svg`: diagrama vertical de seis pasos.
- `assets/img/foto-perfil.webp`: retrato recortado a 480 px y 23 KB, mostrado a 120. Sustituye al recorte anterior, que cortaba la cabeza.
- `assets/img/og-image.png`: tarjeta social de 1200×630.
- `assets/img/apple-touch-icon.png` y `favicon.ico`: iconos de 180 px y multi-tamaño.
- `favicon.svg`: chevrones blancos sobre el azul del acento.
- `_config.yml`: excluye `docs/`, `README.md` y `_working` de la publicación.
- `robots.txt` y `sitemap.xml`: una sola URL.

## Decisiones

- Favicon B, dos chevrones. A 16 px el monograma EG perdía las letras.
- Las capturas se redimensionan con recorte centrado para mantener la proporción 8:5; las barras de scroll se recortan antes.
- La foto baja de PNG a WebP: de 1,3 MB a 23 KB. El nuevo retrato incluye la cabeza completa y se recorta dentro del círculo original para eliminar el halo.
- Cada ficha lleva el índice arriba a la izquierda y el título arriba a la derecha, centrado sobre su columna. En anchos de 900 px o menos, ambos se apilan encima de la imagen.
- El texto se pasó por `li-human`: 79,9 sobre 100, PASS, sin términos del lexicón. Se corrigieron «envias», «Pokémons» y la grafía de PokéAPI, y se unificó «opencode» en minúsculas.
- Los enlaces externos conservan el aviso oculto de pestaña nueva para lectores de pantalla. Son 17, incluido el enlace al código de esta página.
- El diagrama del Copilot es vertical para que se lea mejor en móvil.
- La rejilla de proyecto es 55/45 y todas las fichas van con la imagen a la izquierda. Se descartó alternar la posición para mantener la alineación de la columna de lectura.
- El botón primario y el enlace de salto usan el token `--on-accent`: blanco en claro y `#0b1120` en oscuro. Así el contraste no depende de `prefers-color-scheme`, que se equivocaría al forzar el tema contrario.
- La cabecera es fija con `position: sticky`, fondo translúcido y `backdrop-filter`. `scroll-padding-top: 88px` evita que el menú tape el destino de los anclajes, y la imagen de cada ficha se detiene a 88 px.
- El enlace de salto sube a `z-index: 30` para quedar por encima de la cabecera fija cuando recibe el foco.
- En anchos de 480 px o menos se oculta el menú, que solo conserva el botón de contacto, para dejar sitio al selector de tema sin romper la cabecera.
- El selector de tema tiene tres estados: automático, claro y oscuro. El ciclo depende del sistema. Con el sistema en claro: automático claro → oscuro → claro → automático. Con el sistema en oscuro: automático oscuro → claro → oscuro → automático. Desde automático se salta al tema contrario al del sistema; desde el tema que coincide con el sistema se vuelve a automático; desde el otro se va al tema del sistema. Se descartó un ciclo lineal claro → oscuro → automático porque no refleja la preferencia del sistema.
- El botón muestra un medio círculo en automático, una luna en oscuro y un sol en claro. El `aria-label`, el `title` y `theme-color` se actualizan en cada paso; la región `role="status"` anuncia el cambio. El script del `<head>` fija `data-theme` y `data-theme-mode` antes del CSS para evitar el parpadeo.
- A 720 px o menos la foto se coloca por encima del texto con `order: -1`, se centra junto con el eyebrow y el `h1`, y baja a 96 px. El lead, la meta y los botones conservan la alineación izquierda. A 390 px la foto ocupa de 117 a 213 y el `h1` empieza en 269; los botones quedan por debajo del texto. A 721 px vuelve el diseño de dos columnas y la foto a la derecha. Se descartó dejarla debajo de los botones porque separaba la identidad del titular.
- Los cuatro enlaces de perfil, LinkedIn y GitHub en el hero y en contacto, llevan `rel="me noopener noreferrer"` para verificar la identidad desde el sitio.
- El pie enlaza al repositorio `edu84gp/edu84gp.github.io` con el aviso oculto de pestaña nueva y conserva el enlace para volver arriba.
- Los efectos de hover se suavizan: la foto escala 1,05 en 200 ms y la tarjeta cambia de fondo y sombra sin desplazarse. El bloque de movimiento reducido anula el `transform` de la foto.
- Los tokens de hover se ajustan: `--surface-hover` pasa a `#f5f5f5` y `--shadow` a `rgba(198, 199, 202, 0.35)` en claro; en oscuro se mantienen `#141c2e` y `rgba(64, 85, 116, 0.35)`. El botón secundario usa `--accent-soft` de fondo, `--accent-strong` de texto y `--accent` de borde; el contraste es 5,5:1 en claro y 5,7:1 en oscuro. Las tarjetas de método replican el hover de las fichas de proyecto con fondo y sombra. El `transition: all` de `.practice` se limita a `background-color` y `box-shadow`.
- La entradilla de Proyectos enlaza a los repositorios de GitHub con el aviso oculto de pestaña nueva.

## Comprobaciones

- Lighthouse 13.6.0 móvil y escritorio: 100 en rendimiento, accesibilidad, buenas prácticas y SEO.
- LCP de 0,9 s en móvil y 0,2 s en escritorio; CLS 0; TBT 0 ms.
- Sin scroll horizontal en 320, 360, 390, 480, 720, 721, 768 y 1440. A 720 px o menos la foto, el eyebrow y el `h1` están centrados; a 721 px la foto vuelve a la columna derecha y el texto a la izquierda. A 390 px la foto queda por encima del titular y los botones por debajo.
- El botón secundario muestra el tinte de acento en el hero y en contacto, en claro y en oscuro; el texto mantiene 5,5:1 y 5,7:1 de contraste.
- Navegación con teclado y foco visible; el primer Tab enfoca «Saltar al contenido» y Enter lleva el foco a `main` (`activeElement` = `contenido`). El selector de tema muestra un contorno de 3 px.
- Tema con el sistema en claro: automático claro → oscuro → claro → automático. Con el sistema en oscuro: automático oscuro → claro → oscuro → automático. La etiqueta, el icono, `theme-color` y la región de estado cambian en cada paso.
- La elección manual persiste tras recargar; automático borra la clave `tema`; con automático, un cambio de `prefers-color-scheme` actualiza el tema sin recargar.
- La cabecera fija queda a 0 y mide 69 px; el destino de los anclajes aparece a 88 px, por debajo del menú.
- Los cuatro enlaces de perfil llevan `rel="me"`; los 17 enlaces con `target="_blank"` conservan el aviso oculto; el enlace al código del pie apunta al repositorio.
- HTML válido en el validador del W3C: 0 mensajes.
- CSS sin errores de sintaxis con stylelint 18 y una configuración vacía.
- Los enlaces externos devuelven 200, salvo LinkedIn, que responde 999 a peticiones automatizadas y se comprobó en el navegador con la sesión abierta.
- Publicada con el build `8b98ac7` de `main`: la URL responde 200 y carga CSS, JavaScript, fotos, diagrama, favicon, robots y sitemap sin errores de consola ni peticiones fallidas. `README.md` y `docs/fase-1.md` devuelven 404 por la exclusión de `_config.yml`.
- Post Inspector de LinkedIn: vista previa con título, descripción e imagen correctos. Author y Publish date aparecen vacíos porque son campos de artículo y la página es un sitio, no una publicación.

## Estado

- Código en el commit `bb1a699`; documentación en `8b98ac7`; ambos publicados en `main`.
- Publicada el 2026-11-04 en `https://edu84gp.github.io/`. El build de GitHub Pages terminó en estado `built` a las 09:29 UTC.
- El Post Inspector se ejecutó sobre la URL pública; no se pedirá re-scrape salvo que cambien los metadatos sociales.
