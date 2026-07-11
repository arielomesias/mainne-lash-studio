import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/Section";

export function AreasServed() {
  return (
    <Section labelledBy="areas-served">
      <SectionHeading id="areas-served">Where clients come from</SectionHeading>

      <div className="mt-6 max-w-prose space-y-4 text-muted">
        <p>
          Most appointments are booked by clients across Burnaby, from Metrotown
          and Brentwood through to Lougheed Town Centre, which is the corner of
          the city the studio calls home.
        </p>
        <p>
          The studio also sees a steady stream of clients from the two
          neighbouring cities the SkyTrain connects it to — if you are travelling
          in, these pages cover what the trip looks like from each:
        </p>
      </div>

      {/* Enlaces de ciudad con anchor text keyword-first (seo-strategy §3). */}
      <ul className="mt-8 space-y-3">
        <li>
          <Link
            href="/eyelash-extensions-new-westminster/"
            className="font-serif text-lg text-olive underline underline-offset-4 hover:text-olive-dark"
          >
            Eyelash extensions for New Westminster clients
          </Link>
        </li>
        <li>
          <Link
            href="/eyelash-extensions-coquitlam/"
            className="font-serif text-lg text-olive underline underline-offset-4 hover:text-olive-dark"
          >
            Eyelash extensions for Coquitlam &amp; Port Coquitlam clients
          </Link>
        </li>
      </ul>
    </Section>
  );
}
