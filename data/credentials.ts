/**
 * Credenciales y protocolo de higiene de Mainne.
 *
 * ⚠️ TODO SIN CONFIRMAR. Ver docs/business-facts.md.
 *
 * Las extensiones de pestañas se aplican cerca de los ojos: Google trata este
 * contenido con escrutinio de E-E-A-T, y una clienta puede exigir lo que aqui
 * se afirme. Inventar un certificado o un protocolo de sanitizacion es tan
 * grave como inventar una resenya.
 *
 * Mientras estos valores esten vacios, las secciones de /about/ que los
 * consumen NO se renderizan. Rellenar aqui y aparecen solas — cero cambios de
 * markup.
 */

export type Certification = {
  /** Nombre exacto del certificado. */
  name: string;
  /** Academia u organismo emisor. */
  issuer: string;
  /** Año de obtención. */
  year: number;
};

// TODO [CONFIRMAR]: nombre exacto del certificado, academia y año.
// Mientras sea null, la palabra "certified" no aparece en ninguna parte del
// sitio, ni en copy, ni en metas, ni en el schema Person.
export const CERTIFICATION: Certification | null = null;

// TODO [CONFIRMAR]: qué se esteriliza, cómo y con qué frecuencia.
// Cada string es un bullet de la sección de higiene de /about/.
export const HYGIENE_PRACTICES: string[] = [];
