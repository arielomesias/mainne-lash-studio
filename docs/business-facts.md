# Business Facts — Fuente única de verdad

Claude Code debe leer este archivo antes de escribir cualquier copy que mencione nombre, precios, ubicación o áreas de servicio. **Nunca inventar ni asumir datos que no estén aquí.** Si falta un dato, dejar un placeholder visible tipo `[CONFIRMAR: teléfono]` en vez de inventarlo.

## Identidad

- **Nombre del negocio:** Mainne Lash Studio
- **Dominio:** mainnelashstudio.com
- **Servicio actual:** extensiones de pestañas Classic, Hybrid, texturizadas/Wispy, Volume y Mega Volume, incluidos los estilos del catálogo visual en `data/catalog.ts`. **No** lash lift, **no** brow lamination, **no** training.
- **Modelo:** estudio privado en el hogar de la artista (aún sin salón físico / storefront público).
- **Ubicación de referencia (no confirmada para uso público todavía):** frente a la estación SkyTrain de Lougheed (límite Burnaby / Coquitlam). Usar como argumento de conveniencia/acceso en copy ("steps from Lougheed SkyTrain"), **no publicar la dirección exacta** en ninguna página (ver nota GBP más abajo).
- **Teléfono:** `+1 (778) 318-4103` — ⚠️ **solo mensajes de texto (SMS). No llamadas.**
  Por eso el sitio enlaza con `sms:+17783184103`, **nunca** con `tel:`: en móvil un `tel:` abre el marcador y provoca exactamente la llamada que Mainne no quiere recibir.
- **Email:** `info@mainnelashstudio.com`
- **Instagram / redes:** `https://www.instagram.com/mainne.ls/`
- **Sistema LED:** Beam Light Arctica, luz blanca de 405 nm. Nunca describir como "UV-free" ni afirmar que elimina el riesgo de alergia.

## Modelo de reserva y pago

Las reservas se harán con **Google Workspace Appointment Schedules**. La web realiza primero un control de elegibilidad y luego abre o embebe el calendario. El flujo es:

1. La clienta confirma que cumple los criterios de elegibilidad LED. No guardar diagnósticos o medicamentos concretos.
2. Elige servicio y hora en Google Calendar. Horario: lunes a viernes, 9:30 a 16:00.
3. Google envía sus correos estándar a clienta y artista.
4. La cita queda pendiente de un depósito de CA$50 por Interac e-Transfer dentro de 12 horas.
5. Mainne confirma la cita y envía la dirección exacta.

La cuenta organizadora es `info@mainnelashstudio.com`. El enlace público de Appointment Schedule todavía está pendiente.

Formato NAP canónico del teléfono, idéntico en todas partes: `+1 (778) 318-4103`.

## Credenciales e higiene — ⚠️ SIN CONFIRMAR

Estos datos alimentan `data/credentials.ts`. Mientras estén sin confirmar, las secciones correspondientes de `/about/` **no se renderizan**. No inventar ninguna: describir un certificado o un protocolo de sanitización que Mainne no ha confirmado es tan grave como inventar una reseña, y con más riesgo — es un servicio aplicado cerca de los ojos.

- **Certificación:** `[CONFIRMAR: nombre exacto del certificado]`
- **Academia emisora:** `[CONFIRMAR]`
- **Año de obtención:** `[CONFIRMAR]`
- **Protocolo de higiene / sanitización:** `[CONFIRMAR: qué se esteriliza, cómo, con qué frecuencia]`

Hasta entonces, **la palabra "certified" no aparece en ninguna página, meta, ni schema del sitio.**

## Políticas de reserva — confirmadas para la primera iteración

- **Depósito:** CA$50 por Interac e-Transfer, aplicado al saldo. Debe recibirse dentro de 12 horas o el horario puede liberarse.
- **Cancelación / cambio:** aviso mínimo de 48 horas. Con aviso suficiente, el depósito se puede transferir una vez. Con menos de 48 horas o no-show, se pierde y se exige uno nuevo.
- **Retrasos:** más de 15 minutos puede acortar el set o cancelar la cita para no afectar a la siguiente clienta; se pierde el depósito si hay cancelación tardía.
- **Cancelación por Mainne:** reembolso completo o transferencia a otra fecha.
- **Embarazo y lactancia:** Mainne no ofrece el servicio LED durante embarazo ni lactancia, por máxima precaución.

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
