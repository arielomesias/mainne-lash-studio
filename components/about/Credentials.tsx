import { Section, SectionHeading } from "@/components/ui/Section";
import { CERTIFICATION } from "@/data/credentials";

/**
 * No renderiza nada mientras CERTIFICATION sea null.
 * Rellena data/credentials.ts y esta seccion aparece sola.
 */
export function Credentials() {
  if (!CERTIFICATION) return null;

  return (
    <Section labelledBy="credentials">
      <SectionHeading id="credentials">Training</SectionHeading>

      <div className="mt-6 max-w-prose">
        <p className="font-serif text-xl text-ink">{CERTIFICATION.name}</p>
        <p className="mt-2 text-muted">
          {CERTIFICATION.issuer} &middot; {CERTIFICATION.year}
        </p>
      </div>
    </Section>
  );
}
