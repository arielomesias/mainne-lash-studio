# Propuesta de Estructura Web SEO — Mainne Lash Studio
### Extensiones de pestañas · Burnaby · New Westminster · Coquitlam · mainnelashstudio.com

> Documento de arquitectura listo para construir con Claude Code. Actualizado: solo extensiones (sin lash lift), marca Mainne Lash Studio, precios provisionales de la competencia, ubicación en Lougheed SkyTrain.

---

## 0. Contexto y restricción estratégica

**Negocio:** Mainne Lash Studio — lash artist independiente que atiende desde su hogar (aún sin salón). **Solo extensiones de pestañas** (no lash lift, no training). Ubicada **frente a la estación SkyTrain de Lougheed** (límite Burnaby / Coquitlam). Objetivo geográfico: Burnaby, New Westminster, Coquitlam.

**Restricción crítica — sin Google Business Profile todavía:** sin GBP no hay Map Pack. La estrategia inicial apunta al **resultado orgánico**. Keywords realmente ganables sin GBP:

| Tipo | Ejemplo | Vol | ¿Ganable orgánico? |
|---|---|---|---|
| "Near me" | `lashes near me` (480), `eyelash extensions near me` (320) | alto | ❌ Map Pack (requiere GBP) |
| **Geo explícita** | `eyelash extensions burnaby` | 110 | ✅ Sí |
| **Geo explícita** | `eyelash extensions coquitlam` | 90 | ✅ Sí |
| **Geo explícita** | `eyelash extensions new westminster` | 50 | ✅ Sí |
| **Informacional** | `how long do eyelash extensions last` | 40 (×20 variantes) | ✅ Sí, sin competencia local |

**Prioridad paralela:** abrir el GBP como *service-area business* con dirección oculta (usar dirección real de casa, nunca buzón virtual). Es la palanca #1 para el ~80% del volumen ("near me"). La web se construye para ganar orgánico ya + quedar lista para el Map Pack.

**Ventaja de ubicación (Lougheed):** no hay volumen de búsqueda para "Lougheed", así que NO es una página. Pero estar frente al SkyTrain de Lougheed es un **diferenciador de conveniencia** que conecta las 3 ciudades por transporte. Se teje como argumento en Home, About y páginas de ciudad.

---

## 1. Arquitectura del sitio (8 páginas core + hub de blog)

Modelo **Hub & Spoke**: Home = hub pilar; ciudades, servicios y blog = spokes.

```
/                                   HUB — Pilar Burnaby (+ Metrotown, + Lougheed access)
│
├── CIUDAD (money / geo) ───────────────────────────
│   ├── /  (el Home ES la página de Burnaby)
│   ├── /eyelash-extensions-new-westminster/
│   └── /eyelash-extensions-coquitlam/
│
├── SERVICIO (topical authority) ────────────────────
│   ├── /classic-lash-extensions/
│   ├── /hybrid-lash-extensions/
│   └── /volume-lash-extensions/     (incluye Mega Volume)
│
├── CONFIANZA / CONVERSIÓN ──────────────────────────
│   ├── /about/                       (lash artist, E-E-A-T, home studio + Lougheed access)
│   └── /book/                        (contacto + precios + reserva)
│
└── /blog/  (hub informacional) ─────────────────────
    ├── /blog/how-long-do-eyelash-extensions-last/
    ├── /blog/classic-vs-hybrid-vs-volume-lashes/
    ├── /blog/eyelash-extension-aftercare-guide/
    └── /blog/are-eyelash-extensions-safe/
```

**Nota de datos:** no existe volumen para combinaciones servicio+ciudad (ej. "volume lash extensions burnaby" = 0). Por eso: las páginas de ciudad cargan la intención geográfica; las de servicio cargan tipo de set + informacional. No mezclar.

---

## 2. Especificación página por página

> **Title** ≤ 60 caracteres · **Meta description** ≤ 155 · **un solo H1** por página. Slugs en inglés (idioma de búsqueda real en Metro Vancouver).

---

### 2.1 · HOME `/` — Pilar Burnaby

**Intención:** commercial/local · **Keyword primaria:** `eyelash extensions burnaby` (110)

- **Title:** `Eyelash Extensions in Burnaby | Mainne Lash Studio`
- **H1:** `Eyelash Extensions in Burnaby, New Westminster & Coquitlam`
- **Meta:** `Classic, hybrid & volume lash extensions in Burnaby. Personal home-studio service by Mainne, steps from Lougheed SkyTrain. Serving New West & Coquitlam.` *(152 chars; la version original con "Personalized" medía 156 y excedía el limite de 155)*

| Keyword | Vol | Comp |
|---|---|---|
| eyelash extensions burnaby | 110 | High |
| lash extensions burnaby | 110 | High |
| eyelash extensions burnaby bc | 110 | High |
| burnaby lashes | 70 | High |
| eyelash extensions metrotown | 10 | High |

**Secciones:**
1. **Hero:** H1 + subtítulo con USP ("private home studio · one client at a time · steps from Lougheed SkyTrain") + CTA "Book your appointment". *(Se eliminó "certified lash artist": no confirmado — ver §2.7.)*
2. **Diferenciador home-studio:** por qué un estudio privado 1-a-1 supera al salón concurrido — calma, atención personalizada, sin apuros.
3. **Conveniencia / Lougheed:** bloque "Easy to reach" — a pasos del SkyTrain de Lougheed, acceso directo desde Burnaby, Coquitlam y New West, sin estrés de estacionamiento.
4. **Servicios (cards):** Classic / Hybrid / Volume → cada card enlaza a su página.
5. **Áreas que atiende:** enlaces a New West y Coquitlam. Mención de Metrotown y Lougheed Town Centre como sectores dentro de Burnaby (captura `eyelash extensions metrotown`).
6. **Cómo funciona:** 3 pasos (Book → Consultation → Enjoy).
7. **FAQ corta** (3-4 preguntas) con FAQPage schema.
8. **CTA final** → `/book/`.

**Enlaza a:** 3 páginas de servicio, 2 de ciudad, `/about/`, `/book/`.
**Schema:** `LocalBusiness`(BeautySalon) + `WebSite` + `FAQPage`. *(Sin `AggregateRating` hasta tener reseñas.)*

---

### 2.2 · `/eyelash-extensions-new-westminster/` — Ciudad

**Keyword primaria:** `eyelash extensions new westminster` (50)

- **Title:** `Eyelash Extensions in New Westminster | Mainne Lash Studio`
- **H1:** `Eyelash Extensions in New Westminster`
- **Meta:** `Classic, hybrid and volume lash extensions for New Westminster clients. A short SkyTrain ride to a private home studio at Lougheed. See pricing.` *(144 chars; la original decía "Certified" y "Book online" — ninguna de las dos es cierta)*

| Keyword | Vol | Comp |
|---|---|---|
| eyelash extensions new westminster | 50 | High |
| lash extensions new westminster | 50 | High |
| lashes new westminster | 30 | High |
| eyelashes new westminster | 10 | High |

**Contenido (reescritura 100% original — evitar plantilla clonada):**
1. Hero geo + CTA.
2. **Contenido localizado real:** barrios/landmarks de New West (Uptown, Sapperton, Columbia St, Quayside), y el ángulo de acceso: New West conecta con Lougheed por SkyTrain (Millennium/Expo Line), lo que hace fácil llegar al estudio.
3. Tipos de set (breve, con enlaces a las páginas de servicio).
4. FAQ localizada + CTA.

**Schema:** `LocalBusiness` + `areaServed`=New Westminster + `Service` + `FAQPage`.

---

### 2.3 · `/eyelash-extensions-coquitlam/` — Ciudad

**Keyword primaria:** `eyelash extensions coquitlam` (90)

- **Title:** `Eyelash Extensions in Coquitlam | Mainne Lash Studio`
- **H1:** `Eyelash Extensions in Coquitlam`
- **Meta:** `Classic, hybrid and volume lash extensions for Coquitlam and Port Coquitlam, minutes from Lougheed SkyTrain. Private home studio. See pricing.` *(142 chars; la original decía "Certified lash artist")*

| Keyword | Vol | Comp |
|---|---|---|
| eyelash extensions coquitlam | 90 | High |
| lash extensions coquitlam | 90 | High |
| lashes coquitlam | 50 | High |
| eyelash extensions port coquitlam | 10 | High |
| eyelash extensions coquitlam centre | 10 | High |

**Contenido:** patrón New West, localizado a Coquitlam (Coquitlam Centre, Port Coquitlam, Burquitlam, **Lougheed** — aquí el ángulo de ubicación es más fuerte porque Lougheed limita con Coquitlam). H2 para "Port Coquitlam" y "Coquitlam Centre". Reescritura 100% original.

**Schema:** `LocalBusiness` + `areaServed`=Coquitlam + Port Coquitlam + `Service` + `FAQPage`.

---

### 2.4 · `/classic-lash-extensions/` — Servicio

- **Title:** `Classic Lash Extensions in Burnaby | Mainne Lash Studio`
- **H1:** `Classic Lash Extensions`
- **Meta:** `Natural, mascara-look classic lash extensions in Burnaby. One extension per natural lash. See pricing, how long they last and what to expect.` *(141 chars; se eliminó "Book online" — no hay reservas online)*

**Keywords (servicio + comparativas que nadie local trabaja):** `classic vs hybrid lashes`, `classic vs volume`, `half set classic lashes vs full set` (10 c/u, Low/Unknown).

**Contenido:** qué es, para quién (look natural/mascara), half vs full set, duración, precio, cuándo classic vs hybrid (enlace al blog comparativo). Fotos antes/después con `alt` optimizado.

**Precios provisionales (competencia — ajustar después):**
| Servicio | Precio | Duración |
|---|---|---|
| Half set | $95 | 1h25 |
| Half set fill | $65 | 1h |
| Full set | $125 | 1h45 |
| Full set fill | $85 | 1h25 |

**Schema:** `Service` + `FAQPage`.

---

### 2.5 · `/hybrid-lash-extensions/` — Servicio

- **Title:** `Hybrid Lash Extensions in Burnaby | Mainne Lash Studio`
- **H1:** `Hybrid Lash Extensions`
- **Meta:** `Hybrid lashes blend classic and volume for texture and fullness. See who they suit, how long they last, and full pricing. Booked by text.` *(137 chars)*

**Keywords:** `hybrid lashes near me` (10), cluster `classic vs hybrid`, `full volume vs hybrid lashes` (10 c/u, comp baja).

**Contenido:** mezcla classic+volume, a quién le queda, duración vs classic, precio.

**Precios provisionales** (fuente de verdad: `docs/business-facts.md`):
| Servicio | Precio | Duración |
|---|---|---|
| Half set (YY 2D) | $110 | 1h15 |
| Half set fill | $75 | 45min |
| YY hybrid (full set) | $125 | 1h30 |
| Full set fill | $85 | 1h |

**Schema:** `Service` + `FAQPage`.

---

### 2.6 · `/volume-lash-extensions/` — Servicio (incluye Mega Volume)

- **Title:** `Volume & Mega Volume Lash Extensions | Mainne Lash Studio`
- **H1:** `Volume & Mega Volume Lash Extensions`
- **Meta:** `Full, dramatic volume and mega volume lashes in Burnaby. Lightweight handmade fans, weight matched to your natural lash. Styles, pricing and aftercare.` *(151 chars; la original decía "by a certified artist" y "safe application" — afirmaciones no respaldadas)*

**Keywords:** `eyelash volume extensions near me` (10), cluster `classic vs volume` / `full volume vs hybrid` (10 c/u). Mega Volume como sección H2 dentro de esta página (no hay volumen para URL separada).

**Contenido:** volume vs mega, densidad de fans (2D–5D vs 6D+), look, seguridad del pelo natural, duración.

**Precios provisionales** (fuente de verdad: `docs/business-facts.md`):
| Servicio | Precio | Duración |
|---|---|---|
| W 4D — Half set | $125 | 1h30 |
| W 4D — Full set | $145 | 2h |
| Light volume — Full set | $175 | 2h30 |
| Full volume — Full set | $200 | 2h45 |
| Mega volume — Full set | $220 | 3h |
| Fills | $75–$140 | según set |

**Schema:** `Service` + `FAQPage`.

---

### 2.7 · `/about/` — Confianza (E-E-A-T)

- **Title:** `About Mainne, Lash Artist in Burnaby` *(el layout añade `| Mainne Lash Studio` → 57 chars)*
- **H1:** `Meet Your Lash Artist`
- **Meta:** `Meet Mainne, the lash artist behind the studio: why a private home studio near Lougheed SkyTrain, and what to expect at your first appointment.` *(143 chars)*

> **Corregido:** el title original (`About Mainne | Certified Lash Artist in Burnaby`) medía 68 chars con el sufijo del layout, y la meta original 166 — ambos por encima del límite. Además, **la palabra "certified" se eliminó**: `docs/business-facts.md` no confirma ninguna certificación y `docs/content-guidelines.md` prohíbe afirmaciones no verificables.

**Propósito SEO:** E-E-A-T — crítico por ser un servicio aplicado cerca de los ojos. Incluir: la historia del estudio en casa (personalización como ventaja, no carencia), la descripción del oficio (aislamiento lash por lash, mapeo del set, peso adaptado), y el ángulo de conveniencia Lougheed. Foto real de Mainne.

**Certificaciones e higiene:** viven en `data/credentials.ts` y se renderizan **solo si están rellenas**. Mientras `CERTIFICATION` sea `null` y `HYGIENE_PRACTICES` esté vacío, esas secciones no existen en la página. No inventar ninguna de las dos: describir un protocolo de sanitización que Mainne no ha confirmado es el mismo error que inventar un certificado.

**Schema:** `Person` + `AboutPage`.

---

### 2.8 · `/book/` — Conversión + precios

- **Title:** `Lash Extension Prices in Burnaby` *(el layout añade `| Mainne Lash Studio` → 53 chars)*
- **H1:** `Book Your Appointment`
- **Meta:** `Book classic, hybrid or volume lash extensions in Burnaby. Full price list & booking. Steps from Lougheed SkyTrain, serving New West & Coquitlam.` *(145 chars)*

> **Corregido:** el title original (`Book Lash Extensions in Burnaby | Prices | Mainne Lash Studio`) medía 61 chars — excedía el límite de 60 sin necesidad de sufijo. El title nuevo lidera con la keyword primaria real de esta página (intención de precio); el verbo "book" ya lo cubre el H1.

**Keywords:** captura intención de precio (`eyelash extensions price`, `lash extensions cost` — cluster de 10 c/u) con la **tabla de precios completa** (consolidar las 3 tablas de servicio arriba). Dirección aproximada = área servida + "near Lougheed SkyTrain".

> **Actualizado:** no hay reservas online. El CTA es **contacto directo** — SMS a `+1 (778) 318-4103` (solo texto, no llamadas) o email a `info@mainnelashstudio.com`. El pago es por Interac e-Transfer y los datos se envían al confirmar. Ver `docs/business-facts.md`.

**Políticas de depósito/cancelación:** pendientes. No están en `docs/business-facts.md` y **no se inventan** — a diferencia de un precio provisional, una política es un compromiso comercial que una clienta puede exigir. El componente `<BookingPolicies>` existe pero no se monta hasta que Mainne las defina.

> **Nota:** precios provisionales copiados de un salón establecido (Blooming Lashes). Un estudio en casa que inicia suele posicionarse algo por debajo — revisar antes de publicar.

**Schema:** `Service` con `offers`/`priceRange`.

---

### 2.9 · `/blog/` — Hub informacional (tráfico awareness, cero competencia local)

Captura el mayor número de keywords informacionales que ningún salón local trabaja. Construye autoridad temática que refuerza las páginas comerciales.

| URL | Keyword primaria | Vol |
|---|---|---|
| `/blog/how-long-do-eyelash-extensions-last/` | how long do eyelash extensions last | 40 (×~20 variantes) |
| `/blog/classic-vs-hybrid-vs-volume-lashes/` | classic vs hybrid vs volume lashes | 10 (×~30 variantes) |
| `/blog/eyelash-extension-aftercare-guide/` | eyelash extension aftercare | 10 (×~30 variantes) |
| `/blog/are-eyelash-extensions-safe/` | are eyelash extensions safe | 10 (×~15 variantes) |

- 800–1.200 palabras c/u. Responder la pregunta en el primer párrafo (para featured snippet). Enlazar a la página de servicio relevante + `/book/`.

> **Construido.** Titles/metas finales (todos bajo límite): hub `Lash Care Guides` (37) · `How Long Do Eyelash Extensions Last?` (57) · `Classic vs Hybrid vs Volume Lashes` (55) · `Eyelash Extension Aftercare Guide` (54) · `Are Eyelash Extensions Safe?` (49). El artículo de seguridad evita afirmaciones médicas y no promete «100% safe» — trata alergia, daño e infección con honestidad (ver `docs/content-guidelines.md`).
- **Schema:** `Article` + `FAQPage` (las variantes de pregunta van como FAQ).
- El artículo "classic vs hybrid vs volume" es el más importante: enlaza a las 3 páginas de servicio (distribución de link equity).

---

## 3. Enlazado interno

```
Home ──► New West, Coquitlam (ciudades)
Home ──► Classic, Hybrid, Volume (servicios)
Ciudades ──► Servicios + /book/
Servicios ──► entre sí (classic⇄hybrid⇄volume) + blog comparativo + /book/
Blog ──► Servicio relevante + /book/
Todo ──► /book/  (conversión)
```
Anchor text descriptivo con keyword. Breadcrumbs en todas las páginas con `BreadcrumbList`.

---

## 4. Schema markup (resumen para Claude Code)

| Página | Schema |
|---|---|
| Home | `LocalBusiness`(BeautySalon) + `WebSite` + `FAQPage` |
| Ciudades | `LocalBusiness` + `areaServed` + `Service` + `FAQPage` |
| Servicios | `Service` + `FAQPage` |
| About | `Person` + `AboutPage` |
| Book | `Service` + `offers`/`priceRange` |
| Blog posts | `Article` + `FAQPage` |
| Todas | `BreadcrumbList` |

**⚠️ Reseñas:** NO implementar `AggregateRating`/`Review` schema todavía (no hay reseñas). Activar en **fase 2**, solo con reseñas reales verificables (idealmente vía GBP). Validar todo con Google Rich Results Test antes de publicar.

---

## 5. Dirección de diseño (PASO 0)

**Paleta:**
- Base: beige, blanco, crema (fondo cálido y suave).
- Acento: **verde olivo** en pequeños detalles (líneas, íconos, CTA secundarios, subrayados).
- Evitar el lujo frío de salón grande → buscar boutique cálida, personal, femenina.

**Motivo gráfico: colas de zorro (foxtail).** Encaja perfecto con una marca de pestañas — la textura plumosa/suave de la cola de zorro evoca la pestaña. Usar como:
- Line-art SVG en olivo o beige, como divisores de sección y detalle de hero.
- Elemento decorativo sutil (esquinas, fondos de cards), nunca saturando.

**Tipografía sugerida:**
- Títulos: serif elegante/editorial (femenino, refinado).
- Cuerpo: sans-serif limpia y legible.

**Mood:** cálido, íntimo, hecho a mano — refuerza el relato "estudio en casa, atención 1-a-1".

---

## 6. Notas técnicas para Claude Code (Next.js)

- **URLs idénticas y estables** desde el día 1 (evita redirecciones y pérdida de equity).
- **SSR/SSG** en todas las páginas (Server Components / `generateStaticParams` para ciudades y servicios) → contenido indexable sin depender de JS.
- **`generateMetadata`** por página (title/description/OG dinámicos).
- **Sitemap.xml + robots.txt** automáticos.
- **Meta geo tags** en páginas de ciudad: `geo.region=CA-BC`, `geo.placename`, `geo.position`, ICBM.
- **Core Web Vitals:** WebP con `next/image`, lazy-load, hero optimizado (LCP). `alt` descriptivo con keyword en fotos antes/después ("volume lash extensions Burnaby before after").
- **Mobile-first:** el 100% de estas búsquedas son móviles.
- **JSON-LD** para todo el schema (componente reutilizable por tipo de página).

---

## 7. Orden de construcción sugerido

1. **Home** (Burnaby, kw 110) — máxima prioridad.
2. **`/book/` + `/about/`** — conversión y confianza.
3. **`/eyelash-extensions-coquitlam/`** (90) y **`/eyelash-extensions-new-westminster/`** (50).
4. **Páginas de servicio** (classic/hybrid/volume).
5. **Blog** (empezar por "classic vs hybrid vs volume" y "how long do they last").

**En paralelo (fuera de la web):** iniciar **licencia municipal de Burnaby** (home-based) + **GBP como service-area business** con dirección oculta → desbloquea el Map Pack y las keywords "near me" (80% del volumen).
