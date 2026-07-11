# CLAUDE.md — Mainne Lash Studio

Este archivo se carga siempre. Mantenlo corto y denso: hechos y reglas no negociables. Todo lo demás (estrategia completa, sistema de diseño, checklists) vive en `docs/` y en `.claude/skills/`, y se carga solo cuando aplica.

## Qué es este proyecto

Sitio web Next.js para **Mainne Lash Studio**, lash artist independiente en Burnaby, BC que atiende **solo extensiones de pestañas** desde un estudio privado en su hogar (aún sin salón físico). Objetivo: SEO local orgánico en Burnaby, New Westminster y Coquitlam. Dominio: `mainnelashstudio.com`.

**Documentos de referencia (léelos antes de crear o editar páginas):**
- `docs/seo-strategy.md` — arquitectura completa: las 8 páginas + blog, keyword objetivo, title/H1/meta de cada una, prioridad de construcción.
- `docs/business-facts.md` — fuente única de verdad de nombre, precios, áreas de servicio, NAP. **Nunca inventes estos datos**, siempre léelos de aquí.
- `docs/design-system.md` — paleta, tipografía, motivo de colas de zorro (foxtail), reglas de PASO 0.
- `docs/content-guidelines.md` — reglas de tono, E-E-A-T, y cómo evitar contenido duplicado entre páginas de ciudad.

## Stack técnico

- Next.js (App Router) con Server Components / `generateStaticParams` para páginas de ciudad y servicio — **no CSR puro**, todo debe ser indexable sin depender de JS.
- `generateMetadata` por página para title/description/OG dinámicos.
- Imágenes con `next/image`, formato WebP, lazy-load.
- Deploy: Netlify.
- JSON-LD para todo el schema estructurado (ver skill `schema-jsonld`).

## Reglas no negociables

1. **No inventar reseñas ni calificaciones.** No implementar `AggregateRating`/`Review` schema hasta que existan reseñas reales. Esto aplica también a testimonios de texto: si no hay una reseña real disponible, no se escribe una.
2. **No mezclar keyword de ciudad con keyword de servicio en la misma URL.** Las páginas de ciudad (`/eyelash-extensions-new-westminster/`, `/eyelash-extensions-coquitlam/`) atacan geo. Las páginas de servicio (`/classic-lash-extensions/`, etc.) atacan tipo de set. No crear páginas combinadas — no hay volumen de búsqueda que las justifique (ver `docs/seo-strategy.md` §0).
3. **Cero contenido duplicado entre páginas de ciudad.** Cada página de ciudad debe tener texto 100% original con referencias locales reales (barrios, landmarks, accesos). Nunca clonar el texto de una página y solo cambiar el nombre de la ciudad.
4. **No ofrecer lash lift ni brow lamination en ningún copy.** Mainne solo hace extensiones de pestañas (classic, hybrid, volume, mega volume). Si aparece contenido de competencia mencionando lash lift, no copiarlo.
5. **Precios están marcados como provisionales** (tomados de referencia de mercado, no reales de Mainne — ver `docs/business-facts.md`). Cualquier tabla de precios debe incluir un comentario/nota visible o de desarrollo indicando que son provisionales hasta confirmación.
6. **URLs son definitivas desde el día 1.** No renombrar slugs después de publicados.
7. **Mobile-first siempre.** Diseñar y revisar en viewport móvil primero.
8. Antes de dar una página por terminada, correr el checklist de la skill `seo-page-audit`.

## Comandos del proyecto

```bash
npm run dev       # desarrollo local
npm run build     # build de producción
npm run lint      # lint
```
(Ajustar si el `package.json` define scripts distintos — verificar ahí antes de asumir.)

## Skills disponibles (se invocan solas o con /nombre)

- `seo-page-builder` — usar al crear o editar cualquier página del sitio (home, ciudad, servicio, blog). Aplica la convención de title/meta/H1/keywords/enlazado interno.
- `schema-jsonld` — usar al agregar structured data a una página. Contiene las plantillas JSON-LD por tipo de página.
- `seo-page-audit` — usar antes de marcar una página como terminada. Checklist de validación on-page.
- `design-system-mainne` — usar al construir o estilizar cualquier componente visual. Contiene paleta, tipografía y tratamiento del motivo foxtail (PASO 0 de este proyecto).

## Prioridad de construcción

Ver orden completo en `docs/seo-strategy.md` §7. Resumen: Home → `/book/` + `/about/` → Coquitlam + New Westminster → páginas de servicio (classic/hybrid/volume) → blog.
