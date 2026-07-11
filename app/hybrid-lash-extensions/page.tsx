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
import { HYBRID_FAQS } from "@/data/faqs";
import { HYBRID } from "@/data/pricing";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

// 137 caracteres.
const DESCRIPTION =
  "Hybrid lashes blend classic and volume for texture and fullness. See who they suit, how long they last, and full pricing. Booked by text.";

export const metadata: Metadata = {
  title: "Hybrid Lash Extensions in Burnaby",
  description: DESCRIPTION,
  alternates: { canonical: HYBRID.href },
  openGraph: {
    title: "Hybrid Lash Extensions in Burnaby | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}${HYBRID.href}`,
    type: "website",
  },
};

export default function HybridPage() {
  return (
    <>
      <JsonLd schema={serviceSchema(HYBRID)} />
      <JsonLd schema={faqPageSchema(HYBRID_FAQS)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hybrid Lash Extensions", path: HYBRID.href },
        ])}
      />

      <ServiceHero
        title="Hybrid Lash Extensions"
        lede={
          <p>
            Two techniques on the same lash line. Single extensions give the
            definition of a classic set; handmade fans of much finer lashes fill
            the spaces between them. The result has texture — some lashes read as
            distinct, others as depth behind them.
          </p>
        }
      />

      <Section tone="cream" labelledBy="who-for">
        <div className="max-w-prose">
          <SectionHeading id="who-for">Who hybrid is for</SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              Hybrid exists because most lash lines are not evenly populated.
              There are stretches where the natural lashes sit close together
              and stretches where they do not, and a{" "}
              <Link
                href="/classic-lash-extensions/"
                className="text-olive underline underline-offset-4 hover:text-olive-dark"
              >
                classic set
              </Link>{" "}
              has no way to hide the second kind. Placing a fan rather than a
              single extension fills that space without asking a thin natural
              lash to carry a thick one.
            </p>
            <p>
              It is also the set to ask for when you like the look of volume but
              not the uniformity of it. A full volume set is dense and even.
              Hybrid keeps some of the spikiness of individual lashes, which
              tends to suit people who describe what they want as &ldquo;fuller,
              but still like me&rdquo;.
            </p>
            <p>
              The ratio of singles to fans is not fixed. A hybrid can sit close
              to classic or lean most of the way towards{" "}
              <Link
                href="/volume-lash-extensions/"
                className="text-olive underline underline-offset-4 hover:text-olive-dark"
              >
                volume
              </Link>
              . That is worth saying out loud at the consultation, because
              &ldquo;hybrid&rdquo; on its own describes a fairly wide range of
              outcomes.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="pricing">
        <SectionHeading id="pricing">Hybrid pricing</SectionHeading>

        <p className="mt-4 max-w-prose text-muted">
          A hybrid set takes longer than classic, because the fans are built by
          hand during the appointment. It stays looking full further into the
          shedding cycle, since the fans disguise the gap left by a lash that has
          shed.
        </p>

        <div className="mt-8">
          <PricingTable service={HYBRID} />
        </div>

        <ProvisionalPricingNotice />
      </Section>

      <FaqSection faqs={HYBRID_FAQS} tone="cream" />
      <ServiceCrossLinks currentSlug={HYBRID.slug} />
    </>
  );
}
