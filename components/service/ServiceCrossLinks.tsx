import Image from "next/image";
import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";
import { asset } from "@/lib/asset";

/**
 * Enlaza los servicios entre si (classic ⇄ hybrid ⇄ volume), como pide
 * docs/seo-strategy.md §3. Excluye la pagina actual.
 */
export function ServiceCrossLinks({ currentSlug }: { currentSlug: string }) {
  const others = SERVICES.filter((service) => service.slug !== currentSlug);

  return (
    <Section labelledBy="other-sets">
      <p className="eyebrow">Still comparing?</p>
      <SectionHeading id="other-sets" className="mt-4 text-4xl sm:text-5xl">
        See the difference up close.
      </SectionHeading>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {others.map((service) => (
          <article key={service.slug} className="group overflow-hidden rounded-[1.5rem] border border-beige bg-cream">
            {service.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={asset(service.image.src)}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
              </div>
            )}
            <div className="p-6 sm:p-7">
              <h3 className="font-serif text-2xl text-ink">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.tagline}</p>
              <Link
                href={service.href}
                className="mt-5 inline-flex min-h-11 items-center border-b border-olive/40 text-sm font-semibold text-olive transition hover:border-olive-dark hover:text-olive-dark"
              >
                Explore {service.name.toLowerCase()}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
