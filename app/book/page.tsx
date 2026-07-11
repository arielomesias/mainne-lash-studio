import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { BookingHero } from "@/components/book/BookingHero";
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
 * <BookingPolicies> existe en components/book/ pero NO se monta: las politicas
 * de deposito y cancelacion no estan confirmadas y no se inventan.
 */

// 145 caracteres.
const DESCRIPTION =
  "Book classic, hybrid or volume lash extensions in Burnaby. Full price list & booking. Steps from Lougheed SkyTrain, serving New West & Coquitlam.";

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
      <Prices />
      <WhatToExpect />
    </>
  );
}
