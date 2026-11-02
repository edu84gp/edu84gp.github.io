# Fichas de proyectos

Material de origen para el portfolio. No es el texto final de la web: es la versión completa de la que se recortará cada ficha.

## Criterios comunes

- Cuatro proyectos: Aplika Jobs, AI Job Search Copilot, Pokédex Web y El Juego de la Vida.
- Cada ficha responde a problema, aportación, proceso, resultado y aprendizaje.
- No se inventan métricas. Cuando no hay medición, se declara el alcance real.
- Aplika Jobs es un proyecto en equipo y el código es privado; se atribuye la autoría compartida.
- Las capturas de Aplika usan la cuenta ficticia «Candidata Demo».

## Aplika Jobs

**Una línea:** plataforma Full Stack que centraliza ofertas, calcula su compatibilidad con IA y prepara CV, carta y email adaptados.

**Problema:** las ofertas están repartidas entre portales, alertas y newsletters; adaptar el CV y la carta a cada una consume tiempo y se hace sin saber qué palabras clave busca el filtro ATS.

**Aportación:** backend e integración de IA.

- API REST con Express 5 y TypeScript estricto.
- Modelo y persistencia con PostgreSQL, Supabase, Prisma 7 y migraciones.
- Motor de búsqueda con JSearch, cron, deduplicación, caducidad y persistencia por lotes.
- Orquestador de matching con estados, umbral configurable, reintentos y creación de candidaturas.
- Optimizador ATS y generación de carta y email con Groq y OpenAI como respaldo.
- Autenticación JWT, bcrypt, RBAC y OAuth de Google y LinkedIn con Supabase.
- Rate limiting con Redis y respaldo en memoria, validación con Zod y errores tipados.
- Integración del frontend React y Vite en autenticación y flujos de datos.

**Proceso y decisiones:**

- API con rutas, controladores finos, servicios por funcionalidad y middlewares de autenticación, validación y errores.
- Persistencia concentrada en Prisma y operaciones sensibles agrupadas en transacciones.
- Integración de IA aislada del dominio, con salida JSON y tolerancia a fallos del proveedor.
- Controles de calidad con TypeScript, Biome, `prisma validate`, documentación y revisión de endpoints.

**Resultado:** el backend cubre el ciclo completo desde el CV hasta la candidatura, el CV adaptado y la carta. Hay demo pública y caso de estudio con capturas y fragmentos saneados. No se publican métricas de conversión ni de entrevistas porque no existe una medición controlada.

**Aprendizaje:** límites transaccionales, idempotencia, contratos tipados y errores recuperables en un flujo con IA.

**Stack:** Node.js 20, TypeScript, Express 5, PostgreSQL, Supabase, Prisma 7, Groq, OpenAI, JSearch, Redis, React, Vite, Render, Vercel, Biome y Pino.

**Enlaces:**

- Demo: https://aplika-jobs.vercel.app/
- Caso de estudio: https://github.com/edu84gp/aplika-jobs-case-study

**Imagen:** `assets/img/aplika-panel.png`. Panel Kanban con datos ficticios. No usar la landing porque incluye afirmaciones de marketing del producto que no son métricas propias.

**Notas:** proyecto de Eduardo García Prieto y Roberto Antonio López. El código es privado; el repositorio público documenta arquitectura, decisiones y cuatro fragmentos. No atribuirse el diseño de producto ni la interfaz completa.

## AI Job Search Copilot

**Una línea:** sistema de agentes sobre opencode que convierte una oferta en un flujo reproducible: análisis de encaje, CV adaptado a ATS, carta, registro de la candidatura y preparación de la entrevista.

**Problema:** la búsqueda de empleo se reparte entre portales, hojas de cálculo y documentos sueltos; cada oferta exige adaptar el CV, escribir la carta, registrar el envío y preparar la entrevista sin un proceso repetible.

**Aportación:** proyecto propio, diseñado y construido de principio a fin.

- 15 agentes con permisos acotados por herramienta.
- 10 servidores MCP.
- 20 comandos y 14 skills.
- Registro de candidaturas en SQLite como fuente única.
- Agenda diaria, plan semanal y seguimiento de tareas.
- Generación y verificación del CV en DOCX y PDF.
- Prácticas de LinkedIn y preparación de entrevistas.
- Documentación de decisiones y memoria del proyecto.
- Workflow de GitHub Actions para Markdown y enlaces.

**Proceso y decisiones:**

- Cada agente declara qué herramientas necesita; el resto queda fuera.
- Las instrucciones viven en `.opencode/agents`, los comandos en `.opencode/commands` y las skills en `.opencode/skills`.
- Los MCPs cubren navegador, GitHub, Google Calendar, memoria, SQLite y documentación.
- SQLite manda sobre Google Tasks; el espejo es de solo ida.
- Cada fase queda versionada en `docs/` y el CHANGELOG registra el avance.

**Resultado:** se usa a diario para buscar ofertas, adaptar el CV y registrar candidaturas. El repositorio es público y la CI de calidad está en verde. No hay métricas de entrevistas ni de conversión.

**Aprendizaje:** diseño de agentes con mínimo privilegio, separación entre instrucciones y herramientas, reproducibilidad, documentación de decisiones y automatización con control humano.

**Stack:** opencode, MCP, Node.js, Python, SQLite, GitHub Actions y Playwright.

**Enlaces:**

- Repositorio: https://github.com/edu84gp/ai-job-search-copilot

**Imagen:** diagrama de flujo en SVG. Nodos propuestos: oferta, análisis de encaje, CV adaptado, carta y email, registro en SQLite y preparación de entrevista. Alrededor, una etiqueta con «15 agentes · 10 MCPs · 20 comandos · 14 skills».

**Notas:** no tiene interfaz gráfica. No simular un dashboard ni una captura de producto que no existe.

## Pokédex Web

**Una línea:** Pokédex web sin frameworks que consume la PokéAPI y muestra 1025 Pokémon en un grid paginado con ficha de detalle.

**Problema:** practicar el consumo de una API REST real con paginación y detalle, y construir una pieza de portfolio frontend sin depender de un framework.

**Aportación:** aplicación completa.

- Módulos separados de API, interfaz y controlador.
- 30 Pokémon por página y 35 páginas.
- Peticiones en paralelo con `Promise.all` para traer los detalles de cada página.
- Modal de detalle con estadísticas, habilidades y tipos.
- Color por tipo, diseño responsive y manejo de errores.
- Favicon SVG y README con arquitectura y flujo de datos.

**Proceso y decisiones:**

- `api.js` solo habla con la red y normaliza los datos.
- `ui.js` solo toca el DOM.
- `main.js` gestiona el estado de página y conecta ambas capas.
- Validación del `offset` entre 0 y 1024 y manejo de fallos de red.
- Sin build, sin dependencias y sin framework.

**Resultado:** demo pública con los 1025 Pokémon, 35 páginas y ficha de detalle. El README documenta arquitectura, instalación y flujo. Quedan pendientes buscador, favoritos y pruebas automatizadas.

**Aprendizaje:** separación de responsabilidades, peticiones asíncronas en paralelo, renderizado del DOM, casos borde de paginación y diseño responsive sin framework.

**Stack:** HTML5, CSS3, JavaScript ES6+, PokéAPI y GitHub Pages.

**Enlaces:**

- Demo: https://edu84gp.github.io/pokedex_web/
- Repositorio: https://github.com/edu84gp/pokedex_web

**Imagen:** `assets/img/pokedex-demo.png`. Recortar para quitar la barra de scroll horizontal de la captura.

**Notas:** los datos e imágenes pertenecen a PokéAPI, Nintendo, Creatures Inc. y GAME FREAK. El código es MIT.

## El Juego de la Vida

**Una línea:** simulador del autómata celular de Conway en JavaScript vanilla, con tablero configurable, edición de células y navegación por teclado.

**Problema:** practicar algoritmos, estado matricial, renderizado del DOM y accesibilidad sin dependencias ni framework.

**Aportación:** aplicación completa.

- Reglas B3/S23 sobre una matriz finita y vecindario de Moore.
- Tablero inicial de 30×30, configurable entre 1×1 y 99×99.
- Patrón aleatorio con un porcentaje de células vivas entre el 10 % y el 50 %.
- Clic, Enter y Espacio para alternar células; flechas, Inicio y Fin para navegar.
- Intervalo único, velocidad de 10 a 2000 ms y botones coherentes con el estado.
- Tablero accesible con `role="grid"`, celdas `gridcell`, roving tabindex y región de estado.
- Despliegue de `main` en GitHub Pages con GitHub Actions.

**Proceso y decisiones:**

- La siguiente generación se calcula sobre una copia de la matriz para evitar estados intermedios.
- Los bordes son finitos y no envolventes.
- Delegación de eventos en el tablero y formulario sin recarga.
- Renderizado con DOM y CSS Grid, sin `canvas`.
- El patrón aleatorio es una función pura que devuelve una matriz nueva.

**Resultado:** demo pública con tablero editable, patrones, velocidad y controles de teclado. El README documenta decisiones, límites y próximos pasos. No hay pruebas automatizadas ni auditoría formal de accesibilidad.

**Aprendizaje:** separar lógica y UI con módulos ES, calcular sobre una copia, usar delegación de eventos, implementar navegación por teclado con un único tab stop y desplegar estático con Actions y Pages.

**Stack:** HTML5, CSS3, JavaScript vanilla, GitHub Actions y GitHub Pages.

**Enlaces:**

- Demo: https://edu84gp.github.io/el-juego-de-la-vida/
- Repositorio: https://github.com/edu84gp/el-juego-de-la-vida

**Imagen:** `assets/img/juego-demo.png`, con patrón aleatorio generado.

**Notas:** la accesibilidad está revisada a nivel básico y el README lo declara. No afirmar que está auditada.
