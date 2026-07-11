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

/**
 * No hay reservas ni pago online. La clienta contacta primero por SMS o email,
 * se acuerda la cita por mensaje, y el pago es por Interac e-Transfer con los
 * datos enviados al confirmar (docs/business-facts.md).
 */

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

// TODO [CONFIRMAR]: mientras sea null, el enlace no se renderiza.
export const INSTAGRAM_URL: string | null = null;

/** Coordenadas aproximadas de la estacion SkyTrain de Lougheed (punto publico,
 *  no la casa). Usadas para geo tags de paginas de ciudad. */
export const LOUGHEED_STATION = { lat: 49.2485, lng: -122.8971 } as const;
