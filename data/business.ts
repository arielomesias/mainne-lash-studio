/**
 * Fuente unica de verdad en codigo para NAP y datos de negocio.
 * Espejo de docs/business-facts.md — si cambia alli, cambia aqui.
 *
 * Los campos sin confirmar son `null` a proposito: los componentes los omiten
 * condicionalmente en vez de renderizar el literal "[CONFIRMAR]" en produccion.
 */

export const SITE_URL = "https://mainnelashstudio.com";
export const BUSINESS_NAME = "Mainne Lash Studio";

/**
 * La direccion residencial exacta NUNCA se publica: ni en copy, ni en schema,
 * ni en metadatos. El negocio operara como service-area business con direccion
 * oculta (docs/business-facts.md). Solo ciudad y area de servicio.
 */
export const CITY = "Burnaby";
export const REGION = "BC";
export const REGION_FULL = "British Columbia";
export const COUNTRY = "CA";

export const AREAS_SERVED = ["Burnaby", "New Westminster", "Coquitlam", "Port Coquitlam"] as const;

/** Booking is handled by a Google Workspace Appointment Schedule. */
export const GOOGLE_BOOKING_URL: string | null = null;
export const GOOGLE_BOOKING_EMBED_URL: string | null = null;

export const OPENING_HOURS = {
  days: "Monday–Friday",
  opens: "9:30 AM",
  closes: "4:00 PM",
  schema: "Mo-Fr 09:30-16:00",
} as const;

export const DEPOSIT_AMOUNT = 50;
export const DEPOSIT_DEADLINE_HOURS = 12;
export const CANCELLATION_NOTICE_HOURS = 48;

export const BOOKING_POLICIES = [
  {
    title: "CA$50 booking deposit",
    body: "Your booking is held pending a CA$50 Interac e-Transfer. The deposit is applied to your appointment balance and must be received within 12 hours of booking or the time may be released.",
  },
  {
    title: "48-hour changes",
    body: "Cancel or reschedule at least 48 hours before your appointment and the deposit may be transferred once to a new date. Changes inside 48 hours and no-shows forfeit the deposit; a new deposit is required to rebook.",
  },
  {
    title: "Late arrivals",
    body: "Please arrive on time. A delay of more than 15 minutes may shorten the set or require cancellation so the following appointment is not affected. A late cancellation forfeits the deposit.",
  },
  {
    title: "If Mainne needs to cancel",
    body: "You may move the full deposit to another date or receive it back. Your exact studio address is shared only after the booking and deposit are confirmed.",
  },
] as const;

/** Formato NAP canonico. Debe ser identico en el sitio, el futuro GBP y
 *  cualquier directorio: una inconsistencia de NAP daña el SEO local. */
export const PHONE = "+1 (778) 318-4103";

/**
 * ⚠️ SMS, no `tel:`. Mainne no acepta llamadas — solo mensajes de texto.
 * Un `tel:` en movil abre el marcador y provoca justo la llamada que no quiere.
 */
export const PHONE_SMS_HREF = "sms:+17783184103";
export const PHONE_IS_SMS_ONLY = true;

export const EMAIL = "info@mainnelashstudio.com";

export const INSTAGRAM_URL = "https://www.instagram.com/mainne.ls/";

export const BEAM_LIGHT_PRODUCT_URL =
  "https://beamlight-lashes.ca/product/beam-light-arctica-led-lash-system-complete-set-incl-online-training-certificate-extra-25-off-with-code-set25/";

/** Coordenadas aproximadas de la estacion SkyTrain de Lougheed (punto publico,
 *  no la casa). Usadas para geo tags de paginas de ciudad. */
export const LOUGHEED_STATION = { lat: 49.2485, lng: -122.8971 } as const;
