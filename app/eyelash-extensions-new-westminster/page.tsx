import type { Metadata } from "next";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { CitySetLinks } from "@/components/city/CitySetLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SITE_URL } from "@/data/business";
import { NEW_WESTMINSTER, geoMetaTags } from "@/data/cities";
import { NEW_WESTMINSTER_FAQS } from "@/data/faqs";
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqPageSchema,
} from "@/lib/schema";

/**
 * Pagina de ciudad (docs/seo-strategy.md §2.2). Keyword: eyelash extensions
 * new westminster (50).
 *
 * El copy es 100% original y NO comparte parrafos con /eyelash-extensions-
 * coquitlam/ ni con la Home. Angulo propio: New West llega por la rama del
 * Expo Line, sin transbordo y sin cruzar un puente.
 *
 * La meta del spec decia "Certified lash artist" y "Book online" — ninguna de
 * las dos es cierta.
 */

// 144 caracteres.
const DESCRIPTION =
  "Classic, hybrid and volume lash extensions for New Westminster clients. A short SkyTrain ride to a private home studio at Lougheed. See pricing.";

export const metadata: Metadata = {
  title: "Eyelash Extensions in New Westminster",
  description: DESCRIPTION,
  alternates: { canonical: NEW_WESTMINSTER.href },
  other: geoMetaTags(NEW_WESTMINSTER),
  openGraph: {
    title: "Eyelash Extensions in New Westminster | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}${NEW_WESTMINSTER.href}`,
    type: "website",
  },
};

export default function NewWestminsterPage() {
  return (
    <>
      <JsonLd schema={cityServiceSchema(NEW_WESTMINSTER)} />
      <JsonLd schema={faqPageSchema(NEW_WESTMINSTER_FAQS)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Eyelash Extensions in New Westminster",
            path: NEW_WESTMINSTER.href,
          },
        ])}
      />

      <div className="bg-bg pb-12 pt-12 sm:pb-16 sm:pt-16">
        <Container>
          <div className="max-w-prose">
            <h1 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Eyelash Extensions in New Westminster
            </h1>

            <p className="mt-6 text-base text-muted sm:text-lg">
              New Westminster has never been short of places to get your lashes
              done. What it has fewer of is rooms where only one appointment is
              happening at a time. The studio is a private one, a short train
              ride up the hill, and it takes one client at a time.
            </p>

            <div className="mt-8">
              <Button href="/book/">See prices &amp; book</Button>
            </div>
          </div>
        </Container>
      </div>

      <Section tone="cream" labelledBy="getting-here">
        <div className="max-w-prose">
          <SectionHeading id="getting-here">
            The trip from New West
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              This is the part that surprises people. The Expo Line branch
              heading towards Production Way–University leaves New Westminster
              and Columbia stations, runs through Sapperton and Braid, and stops
              at Lougheed Town Centre. The studio is a walk from that platform.
              No transfer, no Pattullo, no merging onto the Brunette on-ramp with
              a full set of lashes to sit still for.
            </p>
            <p>
              From Uptown it is a short bus down to Columbia or a ten-minute walk
              to New Westminster station. From Sapperton you are already on the
              right branch — Royal Columbian staff coming off shift tend to be
              the ones who work this out first.
            </p>
            <p>
              If you would rather drive, the run up Brunette Avenue is direct and
              there is street parking at the other end. For a two-hour volume
              appointment, though, most people find the train less trouble than
              the return trip at five o&rsquo;clock.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="quayside">
        <div className="max-w-prose">
          <SectionHeading id="quayside">
            Why come up from the river at all
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              You do not need to. There are lash artists along Columbia Street
              and around the Quay, and if what you want is a quick fill in a busy
              salon, they will serve you well.
            </p>
            <p>
              The reason to make the trip is the pace. Lash extensions are placed
              one at a time onto individual natural lashes, and the difference
              between a set that lasts and one that does not is largely a
              question of whether the person applying them was allowed enough
              time to isolate properly. A home studio with a single lash bed does
              not have a reason to hurry you.
            </p>
          </div>
        </div>
      </Section>

      <CitySetLinks
        heading="Sets for New Westminster clients"
        intro={
          <p>
            Whichever you pick, the appointment starts the same way — looking at
            your own lashes and deciding what they can carry. If you have not
            worn extensions before, classic is the usual place to begin.
          </p>
        }
      />

      <FaqSection
        faqs={NEW_WESTMINSTER_FAQS}
        heading="Questions from New West clients"
      />

      <div className="bg-cream py-16 sm:py-20">
        <Container>
          <Reveal>
            <FoxtailDivider className="text-olive" />
            <div className="mx-auto mt-10 max-w-xl text-center">
              <h2 className="text-2xl text-ink sm:text-3xl">
                Book from New Westminster
              </h2>
              <p className="mt-4 text-muted">
                Text me the set you want and roughly when suits you, and we will
                sort out a time.
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
