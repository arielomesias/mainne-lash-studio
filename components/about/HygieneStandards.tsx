import { Section, SectionHeading } from "@/components/ui/Section";
import { HYGIENE_PRACTICES } from "@/data/credentials";

/**
 * No renderiza nada mientras HYGIENE_PRACTICES este vacio.
 *
 * Describir un protocolo de sanitizacion que Mainne no ha confirmado seria
 * inventar — y con mas riesgo que un precio provisional, porque es una
 * afirmacion de seguridad sobre un servicio aplicado cerca de los ojos.
 */
export function HygieneStandards() {
  if (HYGIENE_PRACTICES.length === 0) return null;

  return (
    <Section tone="cream" labelledBy="hygiene">
      <SectionHeading id="hygiene">Hygiene in the studio</SectionHeading>

      <ul className="mt-6 max-w-prose space-y-3">
        {HYGIENE_PRACTICES.map((practice) => (
          <li key={practice} className="flex gap-3 text-muted">
            <span aria-hidden="true" className="text-olive">
              &bull;
            </span>
            {practice}
          </li>
        ))}
      </ul>
    </Section>
  );
}
