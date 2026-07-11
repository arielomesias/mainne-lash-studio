---
name: seo-page-audit
description: Usar antes de marcar cualquier página de Mainne Lash Studio como terminada. Checklist de validación on-page: headings, metadatos, schema, imágenes, enlazado interno, indexabilidad sin JS y ausencia de datos inventados.
---

# SEO Page Audit — checklist de cierre

Correr **antes** de dar una página por terminada (`CLAUDE.md`, regla no negociable #8). Falla cualquier ítem → la página no está lista.

Levanta el servidor primero: `npm run dev`. Sustituye `RUTA` por la ruta de la página (ej. `/eyelash-extensions-coquitlam/`).

## 1. Headings

- [ ] Exactamente **un** `<h1>`. Verifica: `curl -s localhost:3000RUTA | grep -o '<h1' | wc -l` → `1`
      (`grep -c` cuenta líneas, no ocurrencias — el HTML de Next viene en una sola línea)
- [ ] El `<h1>` coincide con el especificado en `docs/seo-strategy.md` §2.x
- [ ] Jerarquía sin saltos (no hay `h3` sin un `h2` por encima)

## 2. Metadatos

- [ ] `title` ≤ 60 caracteres **contando** el sufijo `| Mainne Lash Studio` que añade el layout
- [ ] `description` ≤ 155 caracteres
- [ ] `alternates.canonical` presente y **con barra final**
- [ ] `openGraph` con title, description y url

## 3. Indexabilidad sin JS

La prueba que más importa: Google debe ver el contenido en el HTML servido.

- [ ] `curl -s localhost:3000RUTA | grep "<frase del H1>"` devuelve resultado
- [ ] El texto de las FAQ aparece en el HTML crudo (no detrás de un client component)
- [ ] `npm run build` marca la ruta como `○ (Static)`, no como dinámica
- [ ] Cero `'use client'` en la página o sus secciones, salvo justificación escrita

## 4. Schema

- [ ] Los bloques JSON-LD esperados según la tabla de la skill `schema-jsonld`
- [ ] `BreadcrumbList` presente
- [ ] **Cero** `aggregateRating` / `review`: `curl -s localhost:3000RUTA | grep -oi 'aggregateRating\|"review"' | wc -l` → `0`
- [ ] **Cero** `streetAddress`: `curl -s localhost:3000RUTA | grep -o 'streetAddress' | wc -l` → `0`
- [ ] Cada pregunta del `FAQPage` está visible en la página
- [ ] Validado en [Rich Results Test](https://search.google.com/test/rich-results)

## 5. Datos y contenido

- [ ] Ningún literal `[CONFIRMAR]` en el HTML: `curl -s localhost:3000RUTA | grep -o 'CONFIRMAR' | wc -l` → `0`
- [ ] Ningún precio hardcodeado — todos vienen de `data/pricing.ts`
- [ ] Ninguna dirección residencial en copy, schema ni metadatos
- [ ] Sin testimonios, reseñas ni cifras de clientas inventadas
- [ ] Sin superlativos no verificables ("best", "#1", "voted")
- [ ] Sin mención de lash lift, brow lamination ni training
- [ ] Sin el claim "certified" mientras `docs/business-facts.md` no lo confirme
- [ ] **Si es página de ciudad:** léela junto a las otras dos. ¿Algún párrafo funcionaría igual pegado en otra ciudad? Reescríbelo. ¿Las FAQ son distintas? ¿Hay 2–3 referencias locales genuinas?

## 6. Imágenes

- [ ] `next/image`, formato WebP
- [ ] `alt` descriptivo con keyword + ciudad cuando sea natural. Sin keyword stuffing
- [ ] `priority` **solo** en la imagen del hero (LCP). Ninguna otra
- [ ] Todas con dimensiones o `aspect-*` que reserven espacio (CLS)

## 7. Enlazado interno

- [ ] Los enlaces salientes que exige `docs/seo-strategy.md` §3 para este tipo de página
- [ ] Anchor text descriptivo con keyword. Cero "read more" / "click here"
- [ ] Al menos un CTA claro hacia `/book/`
- [ ] **Ningún enlace apunta a una ruta que devuelve 404.** Compruébalo antes de deploy

## 8. Mobile-first

- [ ] Revisada a 375px **antes** que en desktop
- [ ] Sin scroll horizontal
- [ ] Objetivos táctiles ≥ 44px
- [ ] `npm run lint` limpio

## 9. Cierre

- [ ] La URL está añadida a `app/sitemap.ts`
- [ ] `npm run build` pasa sin errores ni warnings de tipos
