import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { Credentials } from "@/components/about/Credentials";
import { HowIWork } from "@/components/about/HowIWork";
import { HygieneStandards } from "@/components/about/HygieneStandards";
import { PortraitHero } from "@/components/about/PortraitHero";
import { StudioStory } from "@/components/about/StudioStory";
import { WhyLougheed } from "@/components/about/WhyLougheed";
import { SITE_URL } from "@/data/business";
import { aboutPageSchema, breadcrumbSchema, personSchema } from "@/lib/schema";

/**
 * Pagina de confianza / E-E-A-T (docs/seo-strategy.md §2.7).
 *
 * El claim "certified" NO aparece aqui. docs/business-facts.md no confirma
 * ninguna certificacion, y este es un servicio aplicado cerca de los ojos: es
 * exactamente donde una afirmacion sin respaldo hace mas daño.
 * <Credentials> e <HygieneStandards> se activan solos al rellenar
 * data/credentials.ts.
 */

// 143 caracteres.
const DESCRIPTION =
  "Meet Mainne, the lash artist behind the studio: why a private home studio near Lougheed SkyTrain, and what to expect at your first appointment.";

export const metadata: Metadata = {
  // El layout añade "| Mainne Lash Studio" via `template` (57 chars en total).
  title: "About Mainne, Lash Artist in Burnaby",
  description: DESCRIPTION,
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Mainne, Lash Artist in Burnaby | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}/about/`,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />
      <JsonLd schema={aboutPageSchema()} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <PortraitHero />
      <StudioStory />
      <HowIWork />
      <Credentials />
      <HygieneStandards />
      <WhyLougheed />
    </>
  );
}
