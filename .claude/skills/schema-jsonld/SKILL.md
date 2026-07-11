---
name: schema-jsonld
description: Usar al agregar structured data (JSON-LD) a cualquier página de Mainne Lash Studio. Contiene las plantillas de schema por tipo de página y las prohibiciones de AggregateRating y de dirección física.
---

# Schema JSON-LD — Mainne Lash Studio

Fuente: `docs/seo-strategy.md` §4. Las factories ya existen en `lib/schema.ts` — **reutilízalas**, no escribas JSON-LD a mano.

## Dos prohibiciones absolutas

1. **Nunca `aggregateRating` ni `review`.** Mainne no tiene reseñas reales. Google penaliza el schema inventado y es la regla no negociable #1 de `CLAUDE.md`. Se activa en fase 2, solo con reseñas verificables (idealmente vía GBP).
2. **Nunca `streetAddress`.** El negocio es un *service-area business* con dirección oculta. En `PostalAddress` solo van `addressLocality`, `addressRegion` y `addressCountry`.

## Cómo se inyecta

`components/JsonLd.tsx` es el único punto de inyección. Escapa `<` para que un `</script>` dentro del copy no rompa el documento.

```tsx
import { JsonLd } from "@/components/JsonLd";
<JsonLd schema={faqPageSchema(CITY_FAQS)} />
```

`app/layout.tsx` ya monta `LocalBusiness` + `WebSite` globalmente. **No los repitas por página.**

## Qué schema lleva cada página

| Página | Schema | Factory disponible |
|---|---|---|
| Home | `LocalBusiness`(BeautySalon) + `WebSite` + `FAQPage` | ya en layout; `faqPageSchema()` |
| Ciudades | `LocalBusiness` + `areaServed` + `Service` + `FAQPage` | `faqPageSchema()`; falta `serviceSchema()` |
| Servicios | `Service` + `FAQPage` | falta `serviceSchema()` |
| About | `Person` + `AboutPage` | falta |
| Book | `Service` con `offers` / `priceRange` | falta |
| Blog posts | `Article` + `FAQPage` | falta `articleSchema()` |
| **Todas** | `BreadcrumbList` | `breadcrumbSchema()` |

Cuando construyas una página cuyo schema aún no tiene factory, **añádela a `lib/schema.ts`** en vez de escribir el objeto inline.

## Factories existentes

```ts
import {
  localBusinessSchema,  // BeautySalon, areaServed, makesOffer, priceRange
  websiteSchema,
  faqPageSchema,        // (faqs: Faq[])
  breadcrumbSchema,     // (trail: Crumb[])
  BUSINESS_ID,          // @id estable para referenciar el negocio
} from "@/lib/schema";
```

## Reglas

- El `FAQPage` schema debe describir preguntas **que el usuario ve en la página**. Por eso `data/faqs.ts` alimenta a la vez el `<FaqSection>` y el JSON-LD. Nunca escribas FAQ en el schema que no estén renderizadas.
- Los precios de cualquier `offers` salen de `data/pricing.ts`. Están marcados como provisionales.
- Referencia el negocio desde otros nodos con `{ "@id": BUSINESS_ID }` en vez de repetir el objeto entero.
- Páginas de ciudad: añadir meta geo tags (`geo.region=CA-BC`, `geo.placename`, `geo.position`, `ICBM`). Las coordenadas públicas son las de la estación de Lougheed (`LOUGHEED_STATION` en `data/business.ts`), **no las de la casa**.

## Validación

Antes de dar una página por publicada, pasa su HTML por el [Rich Results Test](https://search.google.com/test/rich-results). Extrae los bloques así:

```bash
curl -s localhost:3000/ | grep -o '<script type="application/ld+json">[^<]*'
```

Confirma que **no** aparecen `aggregateRating`, `review` ni `streetAddress`.
