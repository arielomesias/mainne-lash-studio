import Link from "next/link";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";

/**
 * Enlaces a las 3 paginas de servicio desde una pagina de ciudad.
 *
 * Solo se comparten los enlaces y las cards. El `intro` lo escribe cada
 * ciudad: si este componente trajera su propio parrafo, las dos paginas de
 * ciudad compartirian texto, que es justo lo que docs/content-guidelines.md
 * prohibe.
 */
export function CitySetLinks({
  heading,
  intro,
}: {
  heading: string;
  intro: ReactNode;
}) {
  return (
    <Section tone="cream" labelledBy="sets">
      <SectionHeading id="sets">{heading}</SectionHeading>

      <div className="mt-4 max-w-prose text-muted">{intro}</div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {SERVICES.map((service) => (
          <Card key={service.slug} className="flex flex-col bg-bg">
            <h3 className="font-serif text-lg text-ink">{service.name}</h3>
            <p className="mt-3 flex-1 text-sm text-muted">{service.tagline}</p>
            <p className="mt-4 text-sm text-olive-dark">
              From ${service.fromPrice}
            </p>
            <Link
              href={service.href}
              className="mt-3 inline-block py-1 text-sm font-medium text-olive underline underline-offset-4 hover:text-olive-dark"
            >
              About {service.name.toLowerCase()}
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
