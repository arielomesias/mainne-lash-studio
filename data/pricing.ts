/**
 * ⚠️ PRECIOS PROVISIONALES.
 *
 * Tomados de un salon de referencia en Burnaby (Blooming Lashes) solo para
 * maquetar. NO son los precios reales de Mainne. Reemplazar antes de publicar
 * a produccion. Ver docs/business-facts.md.
 *
 * Este es el unico lugar donde viven los precios. Ningun componente los
 * hardcodea (CLAUDE.md, regla no negociable #5).
 */

export const PRICING_IS_PROVISIONAL = true;
export const CURRENCY = "CAD";

export type PriceRow = {
  service: string;
  /** En dolares. `null` cuando el precio es un rango (ver `priceLabel`). */
  price: number | null;
  priceLabel: string;
  duration: string;
};

/**
 * Foto de un ojo real que representa el set en la lista desplegable
 * "Our Eyelash Services and Prices". Mainne entrega estas imagenes despues.
 */
export type ServiceImage = { src: string; alt: string };

export type ServicePricing = {
  slug: string;
  name: string;
  href: string;
  /** Resumen de una linea para las cards de la Home. */
  tagline: string;
  /** 1-2 frases que se muestran al abrir el set en el acordeon de precios. */
  description: string;
  /** Precio "desde", para mostrar en cards sin volcar la tabla entera. */
  fromPrice: number;
  /**
   * Foto del ojo para el acordeon de servicios. `null` -> se muestra un marco
   * placeholder hasta que exista la imagen real. Para anadirla: pon el archivo
   * en /public y setea `image: { src: "/eye-classic.webp", alt: "..." }`.
   */
  image: ServiceImage | null;
  rows: PriceRow[];
};

export const CLASSIC: ServicePricing = {
  slug: "classic",
  name: "Classic Lash Extensions",
  href: "/classic-lash-extensions/",
  tagline: "One extension per natural lash, for a soft mascara look.",
  description:
    "One extension placed on each of your natural lashes. It adds length and a soft, defined line — the look of good mascara you never have to take off. If you have never worn extensions, this is the gentlest place to start.",
  fromPrice: 95,
  image: null,
  rows: [
    { service: "Half set", price: 95, priceLabel: "$95", duration: "1h 25m" },
    { service: "Half set fill", price: 65, priceLabel: "$65", duration: "1h" },
    { service: "Full set", price: 125, priceLabel: "$125", duration: "1h 45m" },
    { service: "Full set fill", price: 85, priceLabel: "$85", duration: "1h 25m" },
  ],
};

export const HYBRID: ServicePricing = {
  slug: "hybrid",
  name: "Hybrid Lash Extensions",
  href: "/hybrid-lash-extensions/",
  tagline: "Classic and volume mixed together for texture and fullness.",
  description:
    "Single classic lashes and lightweight handmade fans mixed across the lash line. It fills gaps and adds a little texture and depth, without the full density of a volume set — a middle ground that flatters most eyes.",
  fromPrice: 110,
  image: null,
  rows: [
    { service: "Half set (YY 2D)", price: 110, priceLabel: "$110", duration: "1h 15m" },
    { service: "Half set fill", price: 75, priceLabel: "$75", duration: "45m" },
    { service: "YY hybrid full set", price: 125, priceLabel: "$125", duration: "1h 30m" },
    { service: "Full set fill", price: 85, priceLabel: "$85", duration: "1h" },
  ],
};

export const VOLUME: ServicePricing = {
  slug: "volume",
  name: "Volume & Mega Volume Lash Extensions",
  href: "/volume-lash-extensions/",
  tagline: "Lightweight handmade fans for a full, dramatic set.",
  description:
    "Fine, handmade fans fanned onto each natural lash, from a soft, airy volume up to a dense mega set. The fuller looks use more lashes per fan, so they take a little longer to apply and to map to your eye shape.",
  fromPrice: 125,
  image: null,
  rows: [
    { service: "W 4D — Half set", price: 125, priceLabel: "$125", duration: "1h 30m" },
    { service: "W 4D — Full set", price: 145, priceLabel: "$145", duration: "2h" },
    { service: "Light volume — Full set", price: 175, priceLabel: "$175", duration: "2h 30m" },
    { service: "Full volume — Full set", price: 200, priceLabel: "$200", duration: "2h 45m" },
    { service: "Mega volume — Full set", price: 220, priceLabel: "$220", duration: "3h" },
    { service: "Fills", price: null, priceLabel: "$75–$140", duration: "Depends on set" },
  ],
};

export const SERVICES: ServicePricing[] = [CLASSIC, HYBRID, VOLUME];

/** Rango completo del sitio, para `priceRange` en LocalBusiness schema. */
export const PRICE_RANGE = "$65–$220";

// Los precios falsos no deben llegar a produccion sin que nadie se entere.
// El aviso de UI solo existe en dev, asi que el build tiene que gritar.
if (process.env.NODE_ENV === "production" && PRICING_IS_PROVISIONAL) {
  console.warn(
    "\n⚠️  Building with PROVISIONAL pricing from a reference salon.\n" +
      "   Set real prices in data/pricing.ts and flip PRICING_IS_PROVISIONAL to false.\n",
  );
}
