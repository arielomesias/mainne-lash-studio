import type { Metadata } from "next";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { CitySetLinks } from "@/components/city/CitySetLinks";
import { TransitRoute } from "@/components/city/TransitRoute";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialHero } from "@/components/ui/EditorialHero";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SITE_URL } from "@/data/business";
import { COQUITLAM, geoMetaTags } from "@/data/cities";
import { COQUITLAM_FAQS } from "@/data/faqs";
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqPageSchema,
} from "@/lib/schema";

/**
 * Pagina de ciudad (docs/seo-strategy.md §2.3). Keyword: eyelash extensions
 * coquitlam (90) — la de mas volumen despues de Burnaby.
 *
 * Copy 100% original. Angulo propio y mas fuerte que el de New West: Lougheed
 * limita con Coquitlam, asi que el estudio esta practicamente en la ciudad.
 * H2 dedicados a Port Coquitlam y Coquitlam Centre.
 *
 * La meta del spec decia "Certified lash artist" — no confirmado, eliminado.
 */

// 142 caracteres.
const DESCRIPTION =
  "Classic, hybrid and volume lash extensions for Coquitlam and Port Coquitlam, minutes from Lougheed SkyTrain. Private home studio. See pricing.";

export const metadata: Metadata = {
  title: "Eyelash Extensions in Coquitlam",
  description: DESCRIPTION,
  alternates: { canonical: COQUITLAM.href },
  other: geoMetaTags(COQUITLAM),
  openGraph: {
    title: "Eyelash Extensions in Coquitlam | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}${COQUITLAM.href}`,
    type: "website",
  },
};

export default function CoquitlamPage() {
  return (
    <>
      <JsonLd schema={cityServiceSchema(COQUITLAM)} />
      <JsonLd schema={faqPageSchema(COQUITLAM_FAQS)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Eyelash Extensions in Coquitlam", path: COQUITLAM.href },
        ])}
      />

      <EditorialHero
        eyebrow="White LED lash extensions · Near Lougheed"
        title={<>Eyelash Extensions in <span className="italic text-olive">Coquitlam</span></>}
        description={
          <p>
            The studio sits at Lougheed, right where Burnaby meets Coquitlam.
            It is a calm private appointment rather than a chair on a busy salon floor.
          </p>
        }
        imageSrc="/images/styles/v2/foxy-effect.webp"
        imageAlt="Foxy eyelash extensions for Coquitlam clients near Lougheed"
        badge="Minutes from Burquitlam · private appointment"
        secondaryLabel="Compare lash sets"
        secondaryHref="#sets"
      />

      <Section tone="cream" labelledBy="on-the-boundary">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div className="max-w-prose">
          <SectionHeading id="on-the-boundary">
            On the edge of your own city
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              Lougheed is one of those places that belongs to two cities at once.
              The mall is in Burnaby; walk a few blocks east and you are in
              Coquitlam. The studio is on the Burnaby side of that line, which in
              practice means Coquitlam clients arrive faster than most Burnaby
              ones do.
            </p>
            <p>
              Burquitlam is a single stop away on the Millennium Line. From
              Coquitlam Central and Lincoln it is a handful more. The Evergreen
              extension made this trip unremarkable — it is the kind of distance
              you cover without thinking about it, which makes a calm lash
              appointment feel much easier to fit into your day.
            </p>
          </div>
        </div>
        <TransitRoute
          label="Millennium Line approach"
          stops={["Coquitlam Central", "Lincoln", "Burquitlam", "Lougheed Town Centre", "Mainne · short walk"]}
        />
        </div>
      </Section>

      <Section labelledBy="coquitlam-centre">
        <div className="max-w-prose">
          <SectionHeading id="coquitlam-centre">
            Coming from Coquitlam Centre
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              Lincoln station drops you at the mall doors, and the ride from
              there to Lougheed Town Centre is short enough that most people do
              not bother sitting down. If you are already making the trip for
              errands, an appointment slots into the same afternoon.
            </p>
            <p>
              Driving is straightforward too — the Lougheed Highway runs the
              whole way — though the return trip through the Como Lake and Austin
              intersections at the end of the day is exactly the sort of thing
              the train exists to avoid.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream" labelledBy="port-coquitlam">
        <div className="max-w-prose">
          <SectionHeading id="port-coquitlam">
            Coming from Port Coquitlam
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              Port Coquitlam has no SkyTrain station of its own, which makes the
              calculation different. Most PoCo clients drive to Coquitlam Central
              and pick up the line there, or simply drive the whole way — it is a
              clear run along the Lougheed Highway, and the studio is on the near
              side of Burnaby rather than buried in it.
            </p>
            <p>
              Either way, you are not crossing the city for this. That is largely
              the reason the studio is where it is.
            </p>
          </div>
        </div>
      </Section>

      <CitySetLinks
        heading="Sets for Coquitlam clients"
        intro={
          <p>
            Nothing about the set changes because of where you travelled from.
            What changes is how much of your natural lash line needs filling in,
            and that is settled in the first ten minutes of the appointment.
          </p>
        }
      />

      <FaqSection
        faqs={COQUITLAM_FAQS}
        heading="Questions from Coquitlam clients"
      />

      <div className="bg-bg py-16 sm:py-20">
        <Container>
          <Reveal>
            <FoxtailDivider className="text-olive" />
            <div className="mx-auto mt-10 max-w-xl text-center">
              <h2 className="text-2xl text-ink sm:text-3xl">
                Book from Coquitlam
              </h2>
              <p className="mt-4 text-muted">
                Send a text with the set you have in mind. We will work out the
                rest by message.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/book/">See prices &amp; book</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
