import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
import { CITIES } from "@/data/cities";
import { SERVICES } from "@/data/pricing";

/** Cada pagina nueva se añade aqui al construirse — nunca una URL que da 404. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/book/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...CITIES.map((city) => ({
      url: `${SITE_URL}${city.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}${service.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/blog/`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}${post.href}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
