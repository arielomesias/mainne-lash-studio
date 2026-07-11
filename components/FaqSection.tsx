import { Section, SectionHeading } from "@/components/ui/Section";
import type { Faq } from "@/data/faqs";

/**
 * `<details>/<summary>` nativo en vez de un acordeon con estado: el contenido
 * queda en el HTML servido (indexable sin JS) y la pagina no arrastra ningun
 * client component.
 *
 * El mismo array alimenta el FAQPage JSON-LD de la pagina que renderiza esto.
 * Reutilizable por ciudades y servicios — pero cada pagina pasa SUS preguntas:
 * repetirlas entre paginas de ciudad seria contenido duplicado
 * (docs/content-guidelines.md).
 */
export function FaqSection({
  faqs,
  heading = "Common questions",
  tone = "base",
}: {
  faqs: Faq[];
  heading?: string;
  tone?: "base" | "cream";
}) {
  return (
    <Section tone={tone} labelledBy="faq">
      <SectionHeading id="faq">{heading}</SectionHeading>

      <div className="mt-8 max-w-prose">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b border-beige"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
              <h3 className="font-serif text-lg text-ink">{faq.question}</h3>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl leading-none text-olive transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-5 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
