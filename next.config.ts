import type { NextConfig } from "next";

/**
 * GitHub Pages sirve el sitio como archivos estaticos y bajo un subpath
 * (/mainne-lash-studio). Por eso, SOLO cuando `GITHUB_PAGES=true` (lo pone el
 * workflow de Actions) activamos el export estatico + basePath + imagenes sin
 * optimizar. En dev, en Netlify o en el dominio propio el build sigue siendo el
 * normal, en la raiz y con optimizacion de imagenes.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "mainne-lash-studio";

const nextConfig: NextConfig = {
  // Las URLs de docs/seo-strategy.md terminan en "/" y son definitivas desde el
  // dia 1 (CLAUDE.md, regla no negociable #6). Sin esto Next serviria /about y
  // /about/ como URLs distintas.
  trailingSlash: true,

  ...(isPages
    ? {
        output: "export" as const,
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),

  images: isPages
    ? { unoptimized: true } // Pages no tiene optimizador de imagenes en runtime.
    : { formats: ["image/webp"] },
};

export default nextConfig;
