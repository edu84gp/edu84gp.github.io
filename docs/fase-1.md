# Portfolio: fase 1

Página completa montada sobre la estructura de la fase 0. No se ha publicado todavía.

## Alcance

- Esqueleto semántico y las cuatro fichas completas, no solo el hero.
- Orden: Aplika Jobs, AI Job Search Copilot, Pokédex Web y El Juego de la Vida.
- JavaScript mínimo: foco del contenido principal al usar el salto y selector de tema con `localStorage`. El año del pie es fijo y el menú móvil se resuelve con CSS.
- Tema claro y oscuro automático por `prefers-color-scheme`, con selector manual en la cabecera. La elección se guarda en `localStorage`; mientras no exista, manda el sistema.

## Archivos

- `index.html`: página única con metadatos, datos estructurados, cabecera, hero, cuatro proyectos, método, stack, contacto y pie.
- `assets/css/style.css`: tokens, rejilla, componentes, responsive y movimiento reducido.
- `assets/js/main.js`: foco del contenido principal al usar el enlace de salto y control del tema claro/oscuro.
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
- Los enlaces externos conservan el aviso oculto de pestaña nueva para lectores de pantalla.
- El diagrama del Copilot es vertical para que se lea mejor en móvil.
- La rejilla de proyecto es 55/45 y todas las fichas van con la imagen a la izquierda. Se descartó alternar la posición para mantener la alineación de la columna de lectura.
- El botón primario y el enlace de salto usan el token `--on-accent`: blanco en claro y `#0b1120` en oscuro. Así el contraste no depende de `prefers-color-scheme`, que se equivocaría al forzar el tema contrario.
- La cabecera es fija con `position: sticky`, fondo translúcido y `backdrop-filter`. `scroll-padding-top: 88px` evita que el menú tape el destino de los anclajes, y la imagen de cada ficha se detiene a 88 px.
- El enlace de salto sube a `z-index: 30` para quedar por encima de la cabecera fija cuando recibe el foco.
- En anchos de 480 px o menos se oculta el menú, que solo conserva el botón de contacto, para dejar sitio al selector de tema sin romper la cabecera.
- Los efectos de hover se suavizan: la foto escala 1,05 en 200 ms y la tarjeta cambia de fondo y sombra sin desplazarse. El bloque de movimiento reducido anula el `transform` de la foto.
- La entradilla de Proyectos enlaza a los repositorios de GitHub con el aviso oculto de pestaña nueva.

## Comprobaciones

- Lighthouse móvil y escritorio: 100 en rendimiento, accesibilidad, buenas prácticas y SEO.
- LCP de 1,2 s en móvil y 0,3 s en escritorio; CLS 0; TBT 0 ms.
- Sin scroll horizontal en 320, 360, 390, 768 y 1440.
- Navegación con teclado y foco visible; el enlace de salto lleva el foco al `main`.
- El selector de tema alterna, actualiza `aria-label` y `theme-color`, persiste tras recargar y respeta `prefers-color-scheme` cuando no hay elección guardada.
- La cabecera fija queda a 0 al hacer scroll y el destino de los anclajes aparece a 88 px, por debajo del menú.
- HTML válido en el validador de W3C.
- Los enlaces externos nuevos devuelven 200.

## Estado

- Commit local `4981b81`.
- Sin push y sin publicación hasta que la persona apruebe la página.
