import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { BookingHero } from "@/components/book/BookingHero";
import { BookingPolicies } from "@/components/book/BookingPolicies";
import { EligibilityBooking } from "@/components/book/EligibilityBooking";
import { Prices } from "@/components/book/Prices";
import { WhatToExpect } from "@/components/book/WhatToExpect";
import { SITE_URL } from "@/data/business";
import { bookingServiceSchema, breadcrumbSchema } from "@/lib/schema";

/**
 * Hub de conversion (docs/seo-strategy.md §2.8).
 *
 * La keyword primaria es la intencion de precio, no la de reserva — de ahi que
 * el title lidere con "Prices" mientras el H1 dice "Book Your Appointment".
 *
 * Google Appointment Schedule handles availability and customer contact fields;
 * this static page handles the safety gate and explains the deposit workflow.
 */

// 145 caracteres.
const DESCRIPTION =
  "Book white LED lash extensions in Burnaby. Complete the eligibility check, choose a Google Calendar time and confirm with an e-Transfer deposit.";

export const metadata: Metadata = {
  // El layout añade "| Mainne Lash Studio" via `template` (53 chars en total).
  title: "Lash Extension Prices in Burnaby",
  description: DESCRIPTION,
  alternates: { canonical: "/book/" },
  openGraph: {
    title: "Lash Extension Prices in Burnaby | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}/book/`,
    type: "website",
  },
};

export default function BookPage() {
  return (
    <>
      <JsonLd schema={bookingServiceSchema()} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book", path: "/book/" },
        ])}
      />

      <BookingHero />
      <EligibilityBooking />
      <Prices />
      <BookingPolicies />
      <WhatToExpect />
    </>
  );
}
