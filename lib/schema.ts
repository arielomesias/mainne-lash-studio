/**
 * Factories de JSON-LD por tipo de pagina (docs/seo-strategy.md §4).
 * Las paginas de ciudad, servicio y blog reutilizan estas en vez de escribir
 * schema a mano.
 *
 * ⚠️ PROHIBIDO hasta fase 2: `aggregateRating` y `review`. Mainne no tiene
 * reseñas reales todavia y Google penaliza el schema inventado
 * (CLAUDE.md, regla no negociable #1).
 *
 * ⚠️ PROHIBIDO siempre: `address` con calle. El negocio es un service-area
 * business con direccion oculta (docs/business-facts.md).
 */

import {
  AREAS_SERVED,
  BUSINESS_NAME,
  CITY,
  COUNTRY,
  EMAIL,
  PHONE,
  REGION,
  SITE_URL,
} from "@/data/business";
import type { BlogPost } from "@/data/blog";
import type { City } from "@/data/cities";
import { CERTIFICATION } from "@/data/credentials";
import { CURRENCY, PRICE_RANGE, SERVICES } from "@/data/pricing";
import type { ServicePricing } from "@/data/pricing";
import type { Faq } from "@/data/faqs";

/** @id estable para poder referenciar el negocio desde otros nodos. */
export const BUSINESS_ID = `${SITE_URL}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    url: SITE_URL,
    // Sin "certified": el claim no se usa hasta que docs/business-facts.md
    // confirme la certificacion concreta (docs/content-guidelines.md).
    description:
      "Independent lash artist offering classic, hybrid and volume eyelash extensions from a private home studio in Burnaby, BC.",
    priceRange: PRICE_RANGE,
    currenciesAccepted: "CAD",
    paymentAccepted: "Interac e-Transfer",
    telephone: PHONE,
    email: EMAIL,
    // `contactOption` deja explicito que el numero es solo para SMS.
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      email: EMAIL,
      contactType: "reservations",
      availableLanguage: ["en"],
    },
    // Sin `streetAddress`: solo ciudad y provincia.
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
    makesOffer: [
      "Classic Lash Extensions",
      "Hybrid Lash Extensions",
      "Volume Lash Extensions",
      "Mega Volume Lash Extensions",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    inLanguage: "en-CA",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Persona detrás del negocio. Alimenta el E-E-A-T de /about/. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about/#mainne`,
    name: "Mainne",
    jobTitle: "Lash artist",
    worksFor: { "@id": BUSINESS_ID },
    url: `${SITE_URL}/about/`,
    // `hasCredential` solo si hay una certificacion confirmada. Mientras
    // CERTIFICATION sea null, la clave no existe (ver data/credentials.ts).
    ...(CERTIFICATION && {
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: CERTIFICATION.name,
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: CERTIFICATION.issuer },
      },
    }),
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about/#page`,
    url: `${SITE_URL}/about/`,
    name: "Meet Your Lash Artist",
    mainEntity: { "@id": `${SITE_URL}/about/#mainne` },
    about: { "@id": BUSINESS_ID },
  };
}

/**
 * Service de /book/ con un `offers` por cada fila de precio.
 * Los precios salen de data/pricing.ts — nunca hardcodeados aqui.
 * Las filas con precio en rango (`price: null`) se omiten: un `Offer` sin
 * `price` numerico es invalido para Google.
 */
export function bookingServiceSchema() {
  const offers = SERVICES.flatMap((service) =>
    service.rows
      .filter((row) => row.price !== null)
      .map((row) => ({
        "@type": "Offer",
        name: `${service.name} — ${row.service}`,
        price: row.price,
        priceCurrency: CURRENCY,
        availability: "https://schema.org/InStock",
      })),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/book/#service`,
    name: "Eyelash Extensions",
    serviceType: "Eyelash extensions",
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
    offers,
    // priceRange no es propiedad valida de Service; va en la oferta agregada.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lash extension sets",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: CURRENCY,
          minPrice: service.fromPrice,
        },
      })),
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "priceRange",
      value: PRICE_RANGE,
    },
  };
}

/** Ofertas de un set concreto, generadas desde data/pricing.ts. */
function offersFor(service: ServicePricing) {
  return service.rows
    .filter((row) => row.price !== null)
    .map((row) => ({
      "@type": "Offer",
      name: row.service,
      price: row.price,
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
    }));
}

/** Schema de una pagina de servicio (classic / hybrid / volume). */
export function serviceSchema(service: ServicePricing) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${service.href}#service`,
    name: service.name,
    serviceType: "Eyelash extensions",
    description: service.tagline,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
    offers: offersFor(service),
  };
}

/**
 * Schema de una pagina de ciudad: el mismo servicio, acotado a esa ciudad.
 *
 * No se emite un segundo nodo `LocalBusiness` aqui — el layout ya monta uno
 * global con su `@id`, y duplicarlo con otro `areaServed` le daria a Google dos
 * descripciones del mismo negocio. Se referencia con `provider`.
 */
export function cityServiceSchema(city: City) {
  const served = [city.name, ...city.alsoServes];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${city.href}#service`,
    name: `Eyelash Extensions in ${city.name}`,
    serviceType: "Eyelash extensions",
    provider: { "@id": BUSINESS_ID },
    areaServed: served.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lash extension sets",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: CURRENCY,
          minPrice: service.fromPrice,
        },
      })),
    },
  };
}

/**
 * Article de un post del blog. El autor es el negocio, no una Person con
 * credenciales — no afirmamos autoria experta que no podemos respaldar
 * (docs/content-guidelines.md). `publisher` referencia el negocio global.
 */
export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${post.href}#article`,
    headline: post.title,
    description: post.description,
    inLanguage: "en-CA",
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: `${SITE_URL}${post.href}`,
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(trail: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
