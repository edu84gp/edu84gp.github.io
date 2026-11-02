# Portfolio: fase 0

Carpeta de trabajo del portfolio personal, preparada con la estructura del futuro repositorio.

## Decisiones cerradas

- Repositorio: `edu84gp.github.io`, público, con GitHub Pages desde `main` y la raíz.
- URL: https://edu84gp.github.io/
- Una página, HTML, CSS y JavaScript sin build.
- Cuatro proyectos: Aplika Jobs, AI Job Search Copilot, Pokédex Web y El Juego de la Vida.
- Tema automático claro y oscuro según `prefers-color-scheme`, sin selector.
- Acento azul profesional: `#2563eb` en claro y `#60a5fa` en oscuro.
- Sin PDF del CV: el contacto lleva a LinkedIn y al email.
- Copilot se representa con un diagrama de flujo en SVG, no con una captura de terminal.
- Foto de LinkedIn recortada en círculo y limitada a 120 px. El recorte elimina el marco #OPENTOWORK.

## Estructura

- `assets/img/`: imágenes que se publicarán.
  - `aplika-panel.png`: panel Kanban con datos ficticios.
  - `pokedex-demo.png`: grid de la Pokédex; recortar la barra inferior antes de exportar.
  - `juego-demo.png`: tablero con patrón aleatorio; recortar la barra derecha antes de exportar.
  - `foto-perfil.png`: recorte circular sin marco, 480 px.
- `docs/`: documentación interna, no forma parte de la página.
  - `fichas-proyectos.md`: material de origen de las cuatro fichas, con problema, aportación, proceso, resultado, aprendizaje, stack y enlaces.
  - `enlaces.md`: URLs comprobadas y notas de estado.
  - `sistema-visual.md`: paleta, tipografía, rejilla, componentes, imágenes, accesibilidad y rendimiento.
- `_working/`: originales e intermedios del recorte de la foto y de la landing de Aplika. Excluida por `.gitignore`; no se publica.

## Estado

- Fase 0 completada: fichas, enlaces comprobados, sistema visual, capturas y foto preparados.
- Repositorio `edu84gp.github.io` creado, público, con `main` como rama por defecto y primer commit subido.
- GitHub Pages activado automáticamente desde `main` y la raíz, con HTTPS forzado.
- GitHub no permite despublicar un sitio de usuario. Se acordó no tocar nada: hasta la fase 1, Pages publica el `README.md` como portada y sirve `docs/` en crudo.

## Pendiente para la fase 1

- Montar `index.html`, `assets/css/style.css`, `assets/js/main.js` y `favicon.svg`.
- Decidir si `docs/` se excluye de la publicación o se deja como documentación del repositorio.
- Convertir las capturas a WebP de 1200×750 y crear el diagrama SVG del Copilot.
- Redactar el texto final del hero y de las cuatro fichas.
