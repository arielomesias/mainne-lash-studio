# Design System — Mainne Lash Studio (PASO 0)

Definir esto ANTES de codear cualquier componente visual. Aplica el patrón PASO 0 del sistema de Megarketing: paleta, tipografía y hero combo se fijan primero, y todo componente nuevo hereda de aquí — no se improvisa color ni tipografía por página.

## Paleta

| Uso | Color | Hex de referencia (ajustar en implementación) |
|---|---|---|
| Fondo base | Blanco cálido | `#FEFCF9` |
| Fondo secundario | Crema | `#F5EDE3` |
| Fondo terciario / cards | Beige | `#E8DCC8` |
| Acento primario | Verde olivo | `#6B7248` |
| Acento oscuro (texto sobre olivo, hover) | Olivo oscuro | `#4A5033` |
| Texto principal | Carbón cálido (no negro puro) | `#2E2A24` |
| Texto secundario | Gris cálido | `#7A7266` |

Regla: el olivo es **acento**, no color dominante. Úsalo en: subrayados, íconos, bordes de foco, CTA secundarios, detalles del motivo foxtail, hover states. El 80-90% de la superficie visual debe ser beige/blanco/crema.

## Tipografía

- **Títulos (H1, H2):** serif elegante/editorial — transmite boutique refinado, no salón corporativo. (Sugerencias a evaluar en implementación: Playfair Display, Cormorant, Fraunces.)
- **Cuerpo / UI:** sans-serif limpia y muy legible en móvil. (Sugerencias: Inter, Work Sans, Montserrat.)
- Jerarquía: H1 grande y con espaciado generoso (letter-spacing leve), cuerpo con line-height cómodo (1.6+) para lectura de contenido informacional del blog.

## Motivo gráfico: cola de zorro (foxtail)

Concepto central de marca: la textura plumosa/suave de una cola de zorro evoca visualmente una pestaña — es el puente entre "lash" y un elemento orgánico y cálido, coherente con el ángulo "estudio en casa, hecho con cuidado".

**Cómo usarlo:**
- Line-art SVG minimalista (trazo fino, no ilustración recargada), en olivo sobre fondo crema, o en beige sobre fondo blanco.
- Como divisor de sección (reemplaza un `<hr>` genérico).
- Como elemento decorativo sutil: esquina de una card, fondo del hero a baja opacidad, ícono de bullet en listas de servicios.
- **Nunca** como elemento central saturado ni repetido más de 1-2 veces por viewport — debe sentirse como detalle, no como patrón de fondo (wallpaper).
- Evitar cualquier referencia realista/fotográfica de zorro (mantenerse en abstracción de línea/textura, coherente con estética boutique).

## Mood / dirección general

Cálido, íntimo, hecho a mano. El sitio debe sentirse como el estudio real: personal, tranquilo, sin la frialdad de una cadena de salones. Esto refuerza el copy de `/about/` y el USP de "atención 1-a-1 en un espacio privado".

## Reglas de componentes (heredar de aquí, no reinventar por página)

- **Botones primarios:** fondo olivo, texto crema, radio de esquina suave (no completamente cuadrado, tampoco pill extremo).
- **Cards de servicio:** fondo beige/crema, borde sutil, sin sombras duras — sombras suaves y difusas si se usan.
- **Imágenes antes/después:** siempre con `alt` descriptivo que incluya keyword + ciudad cuando aplique (ej. `alt="Volume lash extensions Burnaby before and after"`).
- **Iconografía:** trazo fino, coherente con el line-art del foxtail — evitar íconos genéricos de librería sin ajustar el grosor de trazo.

## Animación (si se implementa)

Mantener minimalista y con propósito — coherente con el mood cálido/íntimo, no un sitio "flashy". Si se usa scroll animation, mantenerla sutil (fade/slide corto), nunca agresiva. Evaluar si aplica el estándar de Megarketing (GSAP limitado a secciones clave, Sticky Split / Marquee) — solo si encaja con el mood boutique; si no, preferir animaciones más discretas dado el segmento (belleza personal, no tech/corporate).
