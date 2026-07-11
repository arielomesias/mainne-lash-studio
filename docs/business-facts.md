# Business Facts — Fuente única de verdad

Claude Code debe leer este archivo antes de escribir cualquier copy que mencione nombre, precios, ubicación o áreas de servicio. **Nunca inventar ni asumir datos que no estén aquí.** Si falta un dato, dejar un placeholder visible tipo `[CONFIRMAR: teléfono]` en vez de inventarlo.

## Identidad

- **Nombre del negocio:** Mainne Lash Studio
- **Dominio:** mainnelashstudio.com
- **Servicio:** únicamente extensiones de pestañas (Classic, Hybrid, Volume, Mega Volume). **No** lash lift, **no** brow lamination, **no** training.
- **Modelo:** estudio privado en el hogar de la artista (aún sin salón físico / storefront público).
- **Ubicación de referencia (no confirmada para uso público todavía):** frente a la estación SkyTrain de Lougheed (límite Burnaby / Coquitlam). Usar como argumento de conveniencia/acceso en copy ("steps from Lougheed SkyTrain"), **no publicar la dirección exacta** en ninguna página (ver nota GBP más abajo).
- **Teléfono:** `+1 (778) 318-4103` — ⚠️ **solo mensajes de texto (SMS). No llamadas.**
  Por eso el sitio enlaza con `sms:+17783184103`, **nunca** con `tel:`: en móvil un `tel:` abre el marcador y provoca exactamente la llamada que Mainne no quiere recibir.
- **Email:** `info@mainnelashstudio.com`
- **Instagram / redes:** `[CONFIRMAR]`

## Modelo de reserva y pago

**No hay reservas ni pago online.** No se usa Square, Fresha ni ninguna plataforma externa. El flujo es:

1. La clienta contacta primero, por SMS o email.
2. Se acuerda el set y la fecha por mensaje.
3. Mainne confirma la cita y envía la dirección exacta.
4. **El pago es por Interac e-Transfer.** Los datos de transferencia se envían al confirmar la cita — **nunca se publican en el sitio**.

Formato NAP canónico del teléfono, idéntico en todas partes: `+1 (778) 318-4103`.

## Credenciales e higiene — ⚠️ SIN CONFIRMAR

Estos datos alimentan `data/credentials.ts`. Mientras estén sin confirmar, las secciones correspondientes de `/about/` **no se renderizan**. No inventar ninguna: describir un certificado o un protocolo de sanitización que Mainne no ha confirmado es tan grave como inventar una reseña, y con más riesgo — es un servicio aplicado cerca de los ojos.

- **Certificación:** `[CONFIRMAR: nombre exacto del certificado]`
- **Academia emisora:** `[CONFIRMAR]`
- **Año de obtención:** `[CONFIRMAR]`
- **Protocolo de higiene / sanitización:** `[CONFIRMAR: qué se esteriliza, cómo, con qué frecuencia]`

Hasta entonces, **la palabra "certified" no aparece en ninguna página, meta, ni schema del sitio.**

## Políticas de reserva — ⚠️ SIN CONFIRMAR

A diferencia de un precio provisional, una política es un compromiso comercial que una clienta puede exigir. No publicar hasta confirmar.

- **Depósito:** `[CONFIRMAR: monto, si es reembolsable]`
- **Cancelación:** `[CONFIRMAR: aviso mínimo, penalización]`
- **Política de retrasos / no-show:** `[CONFIRMAR]`

## Áreas de servicio (para `areaServed` en schema y para copy)

- Burnaby (primaria)
- New Westminster
- Coquitlam (incluye mención de Port Coquitlam, Coquitlam Centre)
- Sub-zonas de Burnaby a mencionar cuando sea natural: Metrotown, Lougheed Town Centre

## Precios — ⚠️ PROVISIONALES

Los siguientes precios fueron tomados de un salón de referencia en Burnaby (Blooming Lashes) **solo para tener estructura y maquetar las tablas**. **No son los precios reales de Mainne.** Reemplazar antes de publicar a producción. Cualquier componente de precios (`PricingTable`, etc.) debe leer estos valores desde un único archivo de datos (ej. `data/pricing.ts` o `.json`), nunca hardcodeados en múltiples componentes, para poder reemplazarlos en un solo lugar cuando lleguen los precios reales.

### Classic
| Servicio | Precio | Duración |
|---|---|---|
| Half set | $95 | 1h25 |
| Half set fill | $65 | 1h |
| Full set | $125 | 1h45 |
| Full set fill | $85 | 1h25 |

### Hybrid (YY 2D)
| Servicio | Precio | Duración |
|---|---|---|
| Half set | $110 | 1h15 |
| Fill | $75 | 45min |
| YY hybrid (full) | $125 | 1h30 |
| Fill | $85 | 1h |

### Volume / Mega Volume
| Servicio | Precio | Duración |
|---|---|---|
| W 4D — Half set | $125 | 1h30 |
| W 4D — Full set | $145 | 2h |
| Light volume — Full set | $175 | 2h30 |
| Full volume — Full set | $200 | 2h45 |
| Mega volume — Full set | $220 | 3h |
| Fills | $75–$140 | según set |

## Reglas de coherencia (NAP)

Nombre, dirección (si algún día se publica) y teléfono deben ser **idénticos carácter por carácter** en:
- El sitio web
- El futuro Google Business Profile
- Cualquier directorio (Yelp, Fresha, etc.)

Inconsistencias en estos datos ("NAP inconsistency") dañan el SEO local. Si se actualiza un dato aquí, debe reflejarse en todo el sitio antes de deploy.

## Nota sobre Google Business Profile (contexto, no acción del sitio)

El negocio aún no tiene GBP. Cuando se cree, será como *service-area business* con dirección oculta al público (dirección real de casa solo en el backend de Google, nunca visible). El sitio web **no debe publicar la dirección residencial exacta** en ninguna página, componente, schema o metadato — solo ciudad/área de servicio.
