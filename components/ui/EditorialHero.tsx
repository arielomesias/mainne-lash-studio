import Image from "next/image";
import type { ReactNode } from "react";

import { BotanicalPampas } from "@/components/ui/BotanicalPampas";
import { BotanicalVine } from "@/components/ui/BotanicalVine";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { asset } from "@/lib/asset";

type EditorialHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageLeft?: boolean;
};

/** Shared visual grammar for inner pages; each page supplies its own copy and crop. */
export function EditorialHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "object-center",
  badge,
  ctaLabel = "See prices & book",
  ctaHref = "/book/",
  secondaryLabel,
  secondaryHref,
  imageLeft = false,
}: EditorialHeroProps) {
  const image = (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[42%_58%_48%_52%/58%_42%_58%_42%] border border-olive/20 sm:-inset-6"
      />
      <div className="relative aspect-[5/4] overflow-hidden rounded-[7rem_1.5rem_7rem_1.5rem] bg-beige shadow-[0_28px_80px_rgba(58,61,38,.16)] sm:aspect-[4/3]">
        <Image
          src={asset(imageSrc)}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 92vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        {badge && (
          <p className="absolute bottom-5 left-5 max-w-[80%] rounded-full border border-white/40 bg-ink/45 px-4 py-2 text-[.66rem] font-semibold uppercase tracking-[.13em] text-white backdrop-blur-md">
            {badge}
          </p>
        )}
      </div>
    </div>
  );

  const copy = (
    <div className="relative z-10">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-[13ch] text-[clamp(3rem,7vw,6.1rem)] leading-[.91] tracking-[-.05em] text-ink">
        {title}
      </h1>
      <div className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {description}
      </div>
      <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
        <Button href={ctaHref}>{ctaLabel}</Button>
        {secondaryHref && secondaryLabel && (
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <section className="hero-shell relative isolate overflow-hidden py-12 sm:py-20">
      <BotanicalVine className="absolute -right-20 top-0 h-[29rem] text-olive/12" />
      <BotanicalPampas mirrored className="absolute -bottom-32 -left-12 h-[34rem] text-olive/14" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
          {imageLeft ? image : copy}
          {imageLeft ? copy : image}
        </div>
      </Container>
    </section>
  );
}
