import Link from "next/link";

import { ProvisionalPricingNotice } from "@/components/ProvisionalPricingNotice";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";

export function ServiceCards() {
  return (
    <Section tone="cream" labelledBy="lash-sets">
      <SectionHeading id="lash-sets">Choose your lash set</SectionHeading>

      <p className="mt-4 max-w-prose text-muted">
        Every set starts from the same place — your own natural lashes, and how
        much they can comfortably carry. The difference is density.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {SERVICES.map((service) => (
          <Card key={service.slug} className="flex flex-col bg-bg">
            <h3 className="font-serif text-xl text-ink">{service.name}</h3>
            <p className="mt-3 flex-1 text-sm text-muted">{service.tagline}</p>

            <p className="mt-5 text-sm text-olive-dark">
              From ${service.fromPrice}
            </p>

            <Link
              href={service.href}
              className="mt-4 inline-block py-1 text-sm font-medium text-olive underline underline-offset-4 hover:text-olive-dark"
            >
              {/* Anchor text descriptivo con keyword, no "read more". */}
              About {service.name.toLowerCase()}
            </Link>
          </Card>
        ))}
      </div>

      <ProvisionalPricingNotice />
    </Section>
  );
}
