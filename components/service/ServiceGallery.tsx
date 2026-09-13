import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/Section";
import { LASH_STYLES } from "@/data/catalog";
import { asset } from "@/lib/asset";

const gallerySlugs: Record<string, string[]> = {
  classic: ["classic-1x1", "mascara-effect", "aura-effect"],
  hybrid: ["hybrid", "wet-look", "light-wispy"],
  volume: ["aurora-4d", "volume-6d", "mega-volume"],
};

export function ServiceGallery({ currentSlug }: { currentSlug: string }) {
  const styles = (gallerySlugs[currentSlug] ?? [])
    .map((slug) => LASH_STYLES.find((style) => style.slug === slug))
    .filter((style): style is NonNullable<typeof style> => Boolean(style));

  if (styles.length === 0) return null;

  return (
    <Section tone="cream" labelledBy={`${currentSlug}-visuals`}>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">See the texture</p>
          <SectionHeading id={`${currentSlug}-visuals`} className="mt-4 text-4xl sm:text-5xl">
            One family, different finishes.
          </SectionHeading>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">
          These are AI-created style references. Your map is adjusted to your
          natural lashes and eye shape before application.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {styles.map((style, index) => (
          <figure
            key={style.slug}
            className={`group relative overflow-hidden rounded-[1.4rem] bg-beige ${index === 1 ? "md:-translate-y-4" : ""}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={asset(style.image)}
                alt={style.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-serif text-2xl text-cream">
                {style.name}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
