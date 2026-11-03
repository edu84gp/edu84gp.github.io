# Portfolio: fase 1

Página completa montada sobre la estructura de la fase 0. No se ha publicado todavía.

## Alcance

- Esqueleto semántico y las cuatro fichas completas, no solo el hero.
- Orden: Aplika Jobs, AI Job Search Copilot, Pokédex Web y El Juego de la Vida.
- JavaScript mínimo: 12 líneas para enfocar el contenido principal al usar el salto de contenido. El año del pie es fijo y el menú móvil se resuelve con CSS.
- Tema claro y oscuro automático, sin selector ni `localStorage`.

## Archivos

- `index.html`: página única con metadatos, datos estructurados, cabecera, hero, cuatro proyectos, método, stack, contacto y pie.
- `assets/css/style.css`: tokens, rejilla, componentes, responsive y movimiento reducido.
- `assets/js/main.js`: foco programático del contenido principal al usar el enlace de salto.
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
- Cada ficha lleva el índice arriba a la izquierda y el título arriba a la derecha. En anchos de 900 px o menos, ambos se apilan encima de la imagen.
- El texto se pasó por `li-human`: 79,9 sobre 100, PASS, sin términos del lexicón. Se corrigieron «envias», «Pokémons» y la grafía de PokéAPI, y se unificó «opencode» en minúsculas.
- Los enlaces externos conservan el aviso oculto de pestaña nueva para lectores de pantalla.
- El diagrama del Copilot es vertical para que se lea mejor en móvil.
- La rejilla de proyecto es 55/45 y todas las fichas van con la imagen a la izquierda. Se descartó alternar la posición para mantener la alineación de la columna de lectura.
- El botón primario usa texto blanco en claro y `#0b1120` en oscuro, como fija el sistema visual.

## Comprobaciones

- Lighthouse móvil y escritorio: 100 en rendimiento, accesibilidad, buenas prácticas y SEO.
- LCP de 1,2 s en móvil y 0,3 s en escritorio; CLS 0; TBT 0 ms.
- Sin scroll horizontal en 360, 390, 768 y 1440.
- Navegación con teclado y foco visible; el enlace de salto lleva el foco al `main`.
- HTML válido en el validador de W3C.
- Los enlaces externos nuevos devuelven 200.

## Estado

- Commit local `4981b81`.
- Sin push y sin publicación hasta que la persona apruebe la página.
