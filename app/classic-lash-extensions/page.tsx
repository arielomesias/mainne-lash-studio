import type { Metadata } from "next";
import Link from "next/link";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PricingTable } from "@/components/PricingTable";
import { ProvisionalPricingNotice } from "@/components/ProvisionalPricingNotice";
import { ServiceCrossLinks } from "@/components/service/ServiceCrossLinks";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SITE_URL } from "@/data/business";
import { CLASSIC_FAQS } from "@/data/faqs";
import { CLASSIC } from "@/data/pricing";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

// 141 caracteres. La meta del spec terminaba en "Book online", que ya no existe.
const DESCRIPTION =
  "Natural, mascara-look classic lash extensions in Burnaby. One extension per natural lash. See pricing, how long they last and what to expect.";

export const metadata: Metadata = {
  title: "Classic Lash Extensions in Burnaby",
  description: DESCRIPTION,
  alternates: { canonical: CLASSIC.href },
  openGraph: {
    title: "Classic Lash Extensions in Burnaby | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}${CLASSIC.href}`,
    type: "website",
  },
};

export default function ClassicPage() {
  return (
    <>
      <JsonLd schema={serviceSchema(CLASSIC)} />
      <JsonLd schema={faqPageSchema(CLASSIC_FAQS)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Classic Lash Extensions", path: CLASSIC.href },
        ])}
      />

      <ServiceHero
        title="Classic Lash Extensions"
        lede={
          <p>
            One extension, bonded to one natural lash, repeated across the lash
            line. Nothing is added between your lashes and nothing is bundled
            together, so the set follows the shape your own lashes already have —
            longer, darker, and awake, rather than obviously done.
          </p>
        }
      />

      <Section tone="cream" labelledBy="who-for">
        <div className="max-w-prose">
          <SectionHeading id="who-for">Who classic is for</SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              If you already have a decent number of natural lashes and what you
              want is length and definition rather than density, classic is the
              honest answer. It is the set that reads as a well-applied coat of
              mascara that never smudges and never needs redoing.
            </p>
            <p>
              It is also the set that shows its limits most clearly. A classic
              set can only ever be as full as the lashes underneath it, because
              there is exactly one extension for each one. If your lash line has
              visible gaps, classic will not close them — that is what{" "}
              <Link
                href="/hybrid-lash-extensions/"
                className="text-olive underline underline-offset-4 hover:text-olive-dark"
              >
                hybrid lashes
              </Link>{" "}
              exist for.
            </p>
            <p>
              Because each extension sits on a single lash, classic is the
              lightest of the three sets and usually the quickest appointment.
              It is a sensible first set if you have never worn extensions and
              are not sure how you will feel about them.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="pricing">
        <SectionHeading id="pricing">Classic pricing</SectionHeading>

        <p className="mt-4 max-w-prose text-muted">
          Fills every two to three weeks keep a set going indefinitely. Leave it
          longer than that and there is usually not enough left on the lash line
          to fill, so it becomes a new full set.
        </p>

        <div className="mt-8">
          <PricingTable service={CLASSIC} />
        </div>

        <ProvisionalPricingNotice />
      </Section>

      <FaqSection faqs={CLASSIC_FAQS} tone="cream" />
      <ServiceCrossLinks currentSlug={CLASSIC.slug} />
    </>
  );
}
