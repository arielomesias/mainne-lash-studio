import type { Metadata } from "next";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { AreasServed } from "@/components/home/AreasServed";
import { EasyToReach } from "@/components/home/EasyToReach";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceCards } from "@/components/home/ServiceCards";
import { ServicesPricing } from "@/components/home/ServicesPricing";
import { SITE_URL } from "@/data/business";
import { HOME_FAQS } from "@/data/faqs";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

/**
 * La Home ES la pagina de Burnaby (docs/seo-strategy.md §2.1).
 * Keyword primaria: "eyelash extensions burnaby" (vol. 110).
 *
 * Todo Server Component: nada de esta pagina depende de JS para ser indexado.
 */

// 152 caracteres. La version de seo-strategy.md §2.1 medía 156 — "Personalized"
// se acorto a "Personal" para entrar bajo el limite de 155.
const DESCRIPTION =
  "Classic, hybrid & volume lash extensions in Burnaby. Personal home-studio service by Mainne, steps from Lougheed SkyTrain. Serving New West & Coquitlam.";

export const metadata: Metadata = {
  // Titulo completo: el `template` del root layout no aplica a la ruta indice,
  // asi que el sufijo va escrito. 49 caracteres, bajo el limite de 60.
  title: "Eyelash Extensions in Burnaby | Mainne Lash Studio",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Eyelash Extensions in Burnaby | Mainne Lash Studio",
    description: DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Las preguntas del schema son las mismas que renderiza <FaqSection>. */}
      <JsonLd schema={faqPageSchema(HOME_FAQS)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      <Hero />
      <ServicesPricing />
      <EasyToReach />
      <ServiceCards />
      <AreasServed />
      <HowItWorks />
      <FaqSection faqs={HOME_FAQS} tone="cream" />
      <FinalCta />
    </>
  );
}
