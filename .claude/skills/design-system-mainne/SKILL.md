---
name: design-system-mainne
description: Usar al construir o estilizar cualquier componente visual de Mainne Lash Studio. Contiene la paleta, la tipografía, el motivo foxtail y las reglas de componente del PASO 0. Invocar antes de escribir CSS, elegir un color, o crear un componente nuevo.
---

# Design System — Mainne Lash Studio

Fuente completa: `docs/design-system.md`. Esta skill es el resumen operativo.

## Regla cero

Los tokens ya existen en `app/globals.css` dentro de `@theme`. **No definas colores ni fuentes en un componente.** Usa las clases de Tailwind que derivan de los tokens (`bg-cream`, `text-olive`, `border-beige`, `font-serif`).

Si necesitas un color que no está en la paleta, no lo inventes — es señal de que el diseño se está saliendo del sistema.

## Paleta

| Clase Tailwind | Token | Hex | Uso |
|---|---|---|---|
| `bg-bg` / `text-bg` | `--color-bg` | `#FEFCF9` | fondo base |
| `bg-cream` | `--color-cream` | `#F5EDE3` | fondo de sección alterna |
| `bg-beige` / `border-beige` | `--color-beige` | `#E8DCC8` | cards, bordes |
| `text-olive` / `bg-olive` | `--color-olive` | `#6B7248` | **acento** |
| `bg-olive-dark` | `--color-olive-dark` | `#4A5033` | hover, texto sobre olivo |
| `text-ink` | `--color-ink` | `#2E2A24` | texto principal |
| `text-muted` | `--color-muted` | `#7A7266` | texto secundario |

**Proporción no negociable:** el olivo es acento. El 80–90% de la superficie visual debe ser beige / blanco / crema. Si una sección tiene fondo olivo, algo está mal.

Usa olivo en: subrayados, íconos, bordes de foco, CTA, detalles del foxtail, hover.

## Tipografía

- **Títulos (`h1`–`h3`):** `font-serif` → Fraunces. Ya aplicado por defecto en `globals.css`.
- **Cuerpo / UI:** `font-sans` → Inter. Es el default del `body`.
- Ambas cargadas con `next/font/google`. **Nunca** añadir un `<link>` a `fonts.googleapis.com`.
- `line-height` del body es 1.65 — cómodo para el contenido largo del blog. No lo bajes.

## Motivo foxtail

Componente: `components/ui/FoxtailDivider.tsx`. Line-art SVG, trazo fino, `currentColor`.

- Es el divisor de sección. **No uses `<hr>`.**
- Máximo 1–2 apariciones por viewport. Nunca como patrón de fondo repetido.
- Siempre `aria-hidden` — es decorativo.
- Nunca ilustración realista de zorro. Solo abstracción de línea/textura.

## Componentes existentes (reutiliza, no reinventes)

- `components/ui/Button.tsx` — `primary` (olivo/crema) y `secondary` (borde olivo). Detecta enlaces externos solo.
- `components/ui/Card.tsx` — fondo crema, borde beige, sin sombras duras.
- `components/ui/Container.tsx` — ancho máximo + padding responsive.
- `components/ui/Section.tsx` — espaciado vertical + `tone` (`base` / `cream` / `beige`). Exporta también `SectionHeading`.
- `components/ui/FoxtailDivider.tsx`
- `components/FaqSection.tsx` — acordeón con `<details>` nativo, sin JS.

## Reglas de implementación

- **Mobile-first.** Escribe el estilo base para 375px y amplía con `sm:` / `md:` / `lg:`. Nunca al revés.
- **Imágenes:** `next/image`, WebP, `alt` descriptivo con keyword + ciudad cuando sea natural (`"Volume lash extensions Burnaby before and after"`). `priority` **solo** en el hero (es el LCP).
- **Reserva de espacio:** cualquier imagen o media necesita dimensiones o `aspect-*` para no romper CLS.
- **Iconografía:** trazo fino, coherente con el foxtail. Ajusta el `stroke-width` de los íconos de librería.
- **Animación:** sutil o ninguna. `globals.css` ya respeta `prefers-reduced-motion`.
- **Accesibilidad:** el foco visible en olivo ya está global. Cada `<section>` lleva `aria-labelledby` apuntando a su heading.

## Mood

Cálido, íntimo, hecho a mano. El sitio debe sentirse como el estudio real: personal, tranquilo, sin la frialdad de una cadena de salones. Si un componente se siente "corporate" o "luxury frío", está fuera de marca.
