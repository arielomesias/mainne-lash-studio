import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS_NAME, SITE_URL } from "@/data/business";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

import "./globals.css";

// Auto-alojadas por next/font en el build. Nunca un <link> a fonts.googleapis.com:
// añadiria un origen externo en la ruta critica del LCP.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Eyelash Extensions in Burnaby | ${BUSINESS_NAME}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  openGraph: {
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/*
         * Marca que hay JS ANTES del primer paint, para que el estado oculto
         * de las animaciones (gated bajo .reveal-ready en globals.css) solo
         * aplique cuando el reveal podra ejecutarse. Sin JS -> nunca se añade
         * -> contenido visible. Sincrono y arriba del <body> = sin parpadeo.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('reveal-ready')",
          }}
        />

        {/* Schema global: identifica el negocio y el sitio en todas las paginas. */}
        <JsonLd schema={localBusinessSchema()} />
        <JsonLd schema={websiteSchema()} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-olive focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
