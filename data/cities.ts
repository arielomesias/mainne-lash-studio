/**
 * Paginas de ciudad (docs/seo-strategy.md §2.2 y §2.3).
 *
 * Aqui SOLO vive lo estructurado: slug, geo, areaServed. El copy de cada
 * ciudad se escribe a mano en su propia pagina y debe ser 100% distinto — una
 * plantilla compartida con el nombre de la ciudad sustituido es exactamente el
 * contenido duplicado que docs/content-guidelines.md prohibe.
 *
 * Las coordenadas son del centro de cada ciudad (dato publico), nunca de la
 * casa de Mainne.
 */

export type City = {
  slug: string;
  href: string;
  /** Nombre para copy y para `areaServed` en schema. */
  name: string;
  /** Ciudades adicionales que cubre la pagina (ej. Port Coquitlam). */
  alsoServes: string[];
  geo: { lat: number; lng: number };
};

export const NEW_WESTMINSTER: City = {
  slug: "new-westminster",
  href: "/eyelash-extensions-new-westminster/",
  name: "New Westminster",
  alsoServes: [],
  geo: { lat: 49.2057, lng: -122.911 },
};

export const COQUITLAM: City = {
  slug: "coquitlam",
  href: "/eyelash-extensions-coquitlam/",
  name: "Coquitlam",
  alsoServes: ["Port Coquitlam"],
  geo: { lat: 49.2838, lng: -122.7932 },
};

export const CITIES: City[] = [NEW_WESTMINSTER, COQUITLAM];

/**
 * Meta geo tags para paginas de ciudad (docs/seo-strategy.md §6).
 * Se pasan a `metadata.other` de Next.
 */
export function geoMetaTags(city: City): Record<string, string> {
  const position = `${city.geo.lat};${city.geo.lng}`;

  return {
    "geo.region": "CA-BC",
    "geo.placename": city.name,
    "geo.position": position,
    ICBM: `${city.geo.lat}, ${city.geo.lng}`,
  };
}
