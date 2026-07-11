import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las URLs de docs/seo-strategy.md terminan en "/" y son definitivas desde el
  // dia 1 (CLAUDE.md, regla no negociable #6). Sin esto Next serviria /about y
  // /about/ como URLs distintas.
  trailingSlash: true,
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
