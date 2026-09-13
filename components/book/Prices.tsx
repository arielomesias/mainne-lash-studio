import Image from "next/image";

import { PricingTable } from "@/components/PricingTable";
import { ProvisionalPricingNotice } from "@/components/ProvisionalPricingNotice";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";
import { asset } from "@/lib/asset";

export function Prices() {
  return (
    <Section tone="cream" labelledBy="prices">
      <p className="eyebrow">Plan your set</p>
      <SectionHeading id="prices" className="mt-4 text-4xl sm:text-5xl">Prices</SectionHeading>

      <p className="mt-4 max-w-prose text-muted">
        A fill keeps an existing set going and costs less than starting over.
        Come back every two to three weeks and you will rarely need a full set
        again. Leave it much longer and there is not enough left to fill.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article key={service.slug} className="overflow-hidden rounded-[1.5rem] border border-beige bg-bg">
            {service.image && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={asset(service.image.src)}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <PricingTable service={service} />
            </div>
          </article>
        ))}
      </div>

      <ProvisionalPricingNotice />
    </Section>
  );
}
