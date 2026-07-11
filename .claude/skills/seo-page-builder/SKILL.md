---
name: seo-page-builder
description: Usar al crear o editar cualquier página del sitio de Mainne Lash Studio (home, ciudad, servicio, blog). Aplica la convención de title/meta/H1, el enlazado interno del modelo hub & spoke, y las reglas anti-duplicado entre páginas de ciudad.
---

# SEO Page Builder — Mainne Lash Studio

Fuentes: `docs/seo-strategy.md` (arquitectura y specs por página) y `docs/content-guidelines.md` (tono, E-E-A-T, anti-duplicado).

## Antes de escribir nada

1. Lee la sección §2.x de `docs/seo-strategy.md` correspondiente a la página. El title, H1 y meta **ya están escritos ahí**. No los reinventes.
2. Lee `docs/business-facts.md` si vas a mencionar precios, ubicación, contacto o áreas de servicio. **Nunca inventes estos datos.**
3. Los precios se leen de `data/pricing.ts`, nunca hardcodeados.

## Reglas on-page

- **Un solo `<h1>` por página.** El resto son `h2` / `h3` en jerarquía correcta.
- **Title ≤ 60 caracteres.** El layout ya añade `| Mainne Lash Studio` vía `template`, así que el `title` de la página va **sin** el sufijo.
- **Meta description ≤ 155 caracteres.**
- `alternates: { canonical: '/ruta/' }` en cada página. **Con barra final** — `trailingSlash: true` está activo.
- URLs definitivas desde el día 1. **No renombrar slugs publicados.**
- Todo Server Component. Si necesitas interactividad, busca una solución HTML nativa primero (ej. `<details>` en vez de un acordeón con estado). Nada crítico para SEO puede depender de JS.

## Arquitectura de enlaces (hub & spoke)

```
Home (Burnaby)  ──►  ciudades, servicios, /about/, /book/
Ciudades        ──►  servicios + /book/
Servicios       ──►  entre sí + blog comparativo + /book/
Blog            ──►  servicio relevante + /book/
Todo            ──►  /book/
```

Anchor text **descriptivo y con keyword**. Nunca "read more", "click here", "learn more".
Añade `BreadcrumbList` en todas las páginas (usa `breadcrumbSchema()` de `lib/schema.ts`).

## Regla de oro: no mezclar geo con servicio

Las páginas de ciudad atacan la intención geográfica. Las de servicio atacan el tipo de set.
**No crear páginas combinadas** (`/volume-lash-extensions-burnaby/`) — no hay volumen de búsqueda que las justifique.

## Anti-duplicado entre páginas de ciudad

Home (=Burnaby), `/eyelash-extensions-new-westminster/` y `/eyelash-extensions-coquitlam/` comparten estructura pero el texto debe ser **100% distinto**. Cada página de ciudad necesita:

- 2–3 referencias locales genuinas (barrios, landmarks, estaciones, arterias) específicas de esa ciudad.
- Un ángulo de acceso propio (qué línea de SkyTrain, desde dónde).
- FAQ **distintas** de las otras páginas. No las mismas preguntas con la ciudad cambiada.

**Test:** si un párrafo funcionaría igual de bien pegado en cualquiera de las tres, reescríbelo.

Las FAQ de la Home viven en `data/faqs.ts`. Cada página de ciudad exporta las suyas ahí, en su propia constante.

## Copy

- **Idioma: inglés.** Siempre.
- Tono cálido, cercano, profesional. Como Mainne le hablaría a una clienta en su estudio.
- **Prohibido:** reseñas o testimonios inventados; superlativos no verificables ("best in Burnaby", "#1"); mencionar lash lift, brow lamination o training (Mainne no los ofrece); afirmaciones médicas o de seguridad sin respaldo; copiar copy de competidores ni parafraseado.
- **Prohibido publicar la dirección residencial exacta** en copy, schema o metadatos. Solo ciudad + "steps from Lougheed SkyTrain".
- El claim "certified lash artist" **no se usa** hasta que `docs/business-facts.md` confirme la certificación concreta.
- **Páginas de servicio:** responde qué es, para quién, cuánto dura y cuánto cuesta *antes* de empujar la venta.
- **Blog:** responde la pregunta del título en el primer párrafo (featured snippet). CTA al final, sin interrumpir. 800–1.200 palabras.

## Al terminar

1. Añade la URL a `app/sitemap.ts` — nunca antes de que la página exista.
2. Corre el checklist de la skill `seo-page-audit`.
