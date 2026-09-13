/**
 * Visual lash menu used on the home page.
 *
 * Prices are intentionally centralized here so the temporary figures can be
 * replaced in one edit when Mainne confirms her launch menu. Public copy never
 * mentions appointment length; scheduling buffers live with Google Calendar.
 */

export const CATALOG_PRICES_ARE_DRAFT = true;

export type LashFamily =
  | "Natural & defined"
  | "Textured & wispy"
  | "Soft volume"
  | "Full & dramatic";

export type LashStyle = {
  slug: string;
  name: string;
  family: LashFamily;
  description: string;
  setPrice: number;
  refillPrice: number;
  image: string;
  imageAlt: string;
};

export const LASH_STYLES: LashStyle[] = [
  {
    slug: "classic-1x1",
    name: "Classic 1:1",
    family: "Natural & defined",
    description:
      "One fine extension per natural lash for clean length and soft, mascara-like definition.",
    setPrice: 125,
    refillPrice: 85,
    image: "/images/styles/v2/classic-1x1.webp",
    imageAlt: "Classic one-to-one eyelash extension style reference",
  },
  {
    slug: "hybrid",
    name: "Hybrid",
    family: "Natural & defined",
    description:
      "A balanced mix of classic lashes and light fans that fills small gaps while staying soft.",
    setPrice: 145,
    refillPrice: 95,
    image: "/images/styles/v2/hybrid.webp",
    imageAlt: "Soft hybrid eyelash extension style reference",
  },
  {
    slug: "wet-look",
    name: "Wet Look",
    family: "Textured & wispy",
    description:
      "Slim, closed fans create glossy-looking points and a fresh, textured lash line.",
    setPrice: 150,
    refillPrice: 100,
    image: "/images/styles/v2/wet-look.webp",
    imageAlt: "Wet look eyelash extension style reference",
  },
  {
    slug: "mascara-effect",
    name: "Mascara Effect",
    family: "Textured & wispy",
    description:
      "Darker, defined texture that mimics freshly combed mascara without a heavy finish.",
    setPrice: 150,
    refillPrice: 100,
    image: "/images/styles/v2/mascara-effect.webp",
    imageAlt: "Mascara effect eyelash extension style reference",
  },
  {
    slug: "aura-effect",
    name: "Aura Effect",
    family: "Natural & defined",
    description:
      "A light, diffused design with gentle dimension for a bright and effortless gaze.",
    setPrice: 155,
    refillPrice: 105,
    image: "/images/styles/v2/aura-effect.webp",
    imageAlt: "Airy aura eyelash extension style reference",
  },
  {
    slug: "hawaiian-effect",
    name: "Hawaiian Effect",
    family: "Soft volume",
    description:
      "Feathery fans add movement and fluffy volume while keeping the shape light around the eye.",
    setPrice: 165,
    refillPrice: 110,
    image: "/images/styles/v2/hawaiian-effect.webp",
    imageAlt: "Soft Hawaiian volume eyelash extension style reference",
  },
  {
    slug: "aurora-3d",
    name: "Aurora 3D",
    family: "Soft volume",
    description:
      "Three-dimensional fans open the eye with graceful depth and a polished, balanced finish.",
    setPrice: 160,
    refillPrice: 110,
    image: "/images/styles/v2/aurora-3d.webp",
    imageAlt: "Three-dimensional soft volume lash style reference",
  },
  {
    slug: "greek-4d",
    name: "Greek 4D",
    family: "Soft volume",
    description:
      "Four-dimensional definition creates a smooth, eyeliner-like lash line without excessive weight.",
    setPrice: 175,
    refillPrice: 120,
    image: "/images/styles/v2/greek-4d.webp",
    imageAlt: "Greek four-dimensional volume lash style reference",
  },
  {
    slug: "aurora-4d",
    name: "Aurora 4D",
    family: "Textured & wispy",
    description:
      "Airy volume with softly staggered tips for a darker wet-inspired look that still feels open.",
    setPrice: 175,
    refillPrice: 120,
    image: "/images/styles/v2/aurora-4d.webp",
    imageAlt: "Aurora four-dimensional wispy lash style reference",
  },
  {
    slug: "egyptian-5d",
    name: "Egyptian 5D",
    family: "Full & dramatic",
    description:
      "A sculpted, feline shape with a dense lash line and a sophisticated outer-eye lift.",
    setPrice: 185,
    refillPrice: 125,
    image: "/images/styles/v2/egyptian-5d.webp",
    imageAlt: "Dramatic Egyptian five-dimensional lash style reference",
  },
  {
    slug: "aura-5d",
    name: "Aura 5D",
    family: "Full & dramatic",
    description:
      "Bold volume with a softened top line, designed to fill visible gaps and deepen the gaze.",
    setPrice: 185,
    refillPrice: 125,
    image: "/images/styles/v2/aura-5d.webp",
    imageAlt: "Aura five-dimensional volume lash style reference",
  },
  {
    slug: "volume-6d",
    name: "Volume 6D",
    family: "Full & dramatic",
    description:
      "Ultra-fine six-lash fans build rich density and an unmistakably glamorous finish.",
    setPrice: 195,
    refillPrice: 130,
    image: "/images/styles/v2/volume-6d.webp",
    imageAlt: "Full six-dimensional volume lash style reference",
  },
  {
    slug: "handmade-volume",
    name: "Handmade Volume",
    family: "Full & dramatic",
    description:
      "Fans are shaped by hand during the service for a tailored, soft and seamless result.",
    setPrice: 210,
    refillPrice: 140,
    image: "/images/styles/v2/handmade-volume.webp",
    imageAlt: "Handmade volume eyelash extension style reference",
  },
  {
    slug: "mega-volume",
    name: "Mega Volume",
    family: "Full & dramatic",
    description:
      "Maximum fullness using ultra-fine fibers for a deep, plush lash line and statement finish.",
    setPrice: 220,
    refillPrice: 150,
    image: "/images/styles/v2/mega-volume.webp",
    imageAlt: "Mega volume eyelash extension style reference",
  },
  {
    slug: "foxy-effect",
    name: "Foxy Effect",
    family: "Textured & wispy",
    description:
      "A rising outer-corner map visually lengthens the eye for a crisp, lifted feline shape.",
    setPrice: 175,
    refillPrice: 120,
    image: "/images/styles/v2/foxy-effect.webp",
    imageAlt: "Foxy mapped eyelash extension style reference",
  },
  {
    slug: "wispy-volume",
    name: "Wispy Volume",
    family: "Textured & wispy",
    description:
      "A soft volume base with longer, intentionally placed peaks for depth and lived-in texture.",
    setPrice: 200,
    refillPrice: 135,
    image: "/images/styles/v2/wispy-volume.webp",
    imageAlt: "Wispy volume eyelash extension style reference",
  },
  {
    slug: "light-wispy",
    name: "Light Wispy",
    family: "Textured & wispy",
    description:
      "Delicate texture and fine peaks add movement while preserving a very natural amount of volume.",
    setPrice: 175,
    refillPrice: 120,
    image: "/images/styles/v2/light-wispy.webp",
    imageAlt: "Light wispy eyelash extension style reference",
  },
  {
    slug: "anime-lash",
    name: "Anime Lash",
    family: "Textured & wispy",
    description:
      "Defined, separated peaks create a playful doll-eye rhythm inspired by expressive illustrated eyes.",
    setPrice: 185,
    refillPrice: 125,
    image: "/images/styles/v2/anime-lash.webp",
    imageAlt: "Anime inspired spiked eyelash extension style reference",
  },
];

export const LASH_FAMILIES: LashFamily[] = [
  "Natural & defined",
  "Textured & wispy",
  "Soft volume",
  "Full & dramatic",
];
