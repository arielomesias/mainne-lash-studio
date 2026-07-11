import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/business";

// Necesario para `output: export` (GitHub Pages): sin esto, Next trata la ruta
// como dinamica y el export falla.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
