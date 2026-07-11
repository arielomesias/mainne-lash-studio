import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";

/**
 * Enlaza los servicios entre si (classic ⇄ hybrid ⇄ volume), como pide
 * docs/seo-strategy.md §3. Excluye la pagina actual.
 */
export function ServiceCrossLinks({ currentSlug }: { currentSlug: string }) {
  const others = SERVICES.filter((service) => service.slug !== currentSlug);

  return (
    <Section labelledBy="other-sets">
      <SectionHeading id="other-sets">The other two sets</SectionHeading>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {others.map((service) => (
          <Card key={service.slug} className="flex flex-col">
            <h3 className="font-serif text-xl text-ink">{service.name}</h3>
            <p className="mt-3 flex-1 text-sm text-muted">{service.tagline}</p>
            <Link
              href={service.href}
              className="mt-4 inline-block py-1 text-sm font-medium text-olive underline underline-offset-4 hover:text-olive-dark"
            >
              About {service.name.toLowerCase()}
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
