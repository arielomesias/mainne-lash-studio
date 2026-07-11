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
import { VOLUME_FAQS } from "@/data/faqs";
import { VOLUME } from "@/data/pricing";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

/**
 * Mega Volume vive como seccion H2 dentro de esta pagina, no como URL propia:
 * no hay volumen de busqueda que justifique separarla (docs/seo-strategy.md §2.6).
 *
 * La meta del spec decia "by a certified artist" — eliminado, no confirmado.
 */

// 151 caracteres.
const DESCRIPTION =
  "Full, dramatic volume and mega volume lashes in Burnaby. Lightweight handmade fans, weight matched to your natural lash. Styles, pricing and aftercare.";

export const metadata: Metadata = {
  title: "Volume & Mega Volume Lash Extensions",
  description: DESCRIPTION,
  alternates: { canonical: VOLUME.href },
  openGraph: {
    title: "Volume & Mega Volume Lash Extensions | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}${VOLUME.href}`,
    type: "website",
  },
};

export default function VolumePage() {
  return (
    <>
      <JsonLd schema={serviceSchema(VOLUME)} />
      <JsonLd schema={faqPageSchema(VOLUME_FAQS)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Volume Lash Extensions", path: VOLUME.href },
        ])}
      />

      <ServiceHero
        title="Volume & Mega Volume Lash Extensions"
        lede={
          <p>
            Every natural lash carries a fan, not a single extension. The fans
            are built by hand during the appointment from fibre far finer than a
            classic lash, which is what lets a set look dense without weighing
            more than the lashes underneath it.
          </p>
        }
      />

      <Section tone="cream" labelledBy="fan-density">
        <div className="max-w-prose">
          <SectionHeading id="fan-density">
            What the numbers mean
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              A 2D fan is two extensions on one natural lash; a 4D is four. The
              range from 2D to 5D is what most people mean by volume. The
              important part is not the count on its own — it is that the fibre
              gets finer as the count goes up, so the finished fan weighs about
              what a single classic extension would.
            </p>
            <p>
              Density changes the look more than length does. A 2D set still
              shows the individual lashes. By 4D and above the lash line reads as
              a continuous dark edge, which is the effect people are usually
              describing when they say they want their lashes to look
              &ldquo;full&rdquo;.
            </p>
            <p>
              If you want that fullness but would rather keep some separation
              between lashes,{" "}
              <Link
                href="/hybrid-lash-extensions/"
                className="text-olive underline underline-offset-4 hover:text-olive-dark"
              >
                hybrid
              </Link>{" "}
              is the set to look at instead.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="mega-volume">
        <div className="max-w-prose">
          <SectionHeading id="mega-volume">Mega volume</SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              Mega volume generally means fans of six extensions or more, made
              from the finest fibre used in lashing. It is the densest set
              available and the longest appointment, because a great many very
              small fans have to be made by hand before any of them are placed.
            </p>
            <p>
              The constraint is the same one that governs every set here: what
              your own lash can carry. A mega volume fan built from fibre that
              is too thick for its count is heavier than the lash beneath it,
              and a lash carrying more than it should does not hold. That is a
              question of how the fan is made, not of how many extensions are in
              it — which is why the answer to &ldquo;is mega volume safe?&rdquo;
              depends entirely on the fan, and why I would rather talk it through
              at the consultation than promise it in advance.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream" labelledBy="pricing">
        <SectionHeading id="pricing">Volume pricing</SectionHeading>

        <p className="mt-4 max-w-prose text-muted">
          The jump in price across the volume sets tracks the time each takes.
          Fans are made during your appointment, so a denser set is not a more
          expensive product — it is more hours.
        </p>

        <div className="mt-8">
          <PricingTable service={VOLUME} />
        </div>

        <ProvisionalPricingNotice />
      </Section>

      <FaqSection faqs={VOLUME_FAQS} />
      <ServiceCrossLinks currentSlug={VOLUME.slug} />
    </>
  );
}
