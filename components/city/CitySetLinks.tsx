import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";
import { asset } from "@/lib/asset";

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
      <p className="eyebrow">Choose your finish</p>
      <SectionHeading id="sets" className="mt-4 text-4xl sm:text-5xl">{heading}</SectionHeading>

      <div className="mt-4 max-w-prose text-muted">{intro}</div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {SERVICES.map((service) => (
          <article key={service.slug} className="group overflow-hidden rounded-[1.45rem] border border-beige bg-bg">
            {service.image && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={asset(service.image.src)}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
            )}
            <div className="flex min-h-56 flex-col p-6">
              <h3 className="font-serif text-2xl leading-none text-ink">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.tagline}</p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-beige pt-4">
                <span className="font-serif text-xl text-olive-dark">From ${service.fromPrice}</span>
                <Link href={service.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-olive hover:text-olive-dark">
                  Explore set <span aria-hidden="true" className="ml-2">↗</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
