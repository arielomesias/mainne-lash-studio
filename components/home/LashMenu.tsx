"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { BotanicalPampas } from "@/components/ui/BotanicalPampas";
import { LASH_FAMILIES, LASH_STYLES, type LashFamily } from "@/data/catalog";
import { asset } from "@/lib/asset";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Filter = "All styles" | LashFamily;

export function LashMenu() {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<Filter>("All styles");
  const visible =
    filter === "All styles"
      ? LASH_STYLES
      : LASH_STYLES.filter((style) => style.family === filter);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-lash-card]", {
          y: 34,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 72%",
            once: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [filter], revertOnUpdate: true },
  );

  return (
    <section ref={root} id="lash-menu" aria-labelledby="lash-menu-title" className="relative overflow-hidden bg-ink py-16 text-cream sm:py-24">
      <div aria-hidden="true" className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-cream/10" />
      <div aria-hidden="true" className="absolute -left-12 top-32 h-72 w-72 rounded-full border border-cream/10" />
      <BotanicalPampas mirrored className="absolute -right-12 top-20 h-[32rem] text-pampas/[0.08]" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-sage-light">Find your finish</p>
            <h2 id="lash-menu-title" className="mt-4 max-w-[10ch] text-[clamp(2.65rem,6vw,5.7rem)] leading-[.94] tracking-[-.045em] text-cream">
              The lash <span className="italic text-pampas">menu.</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-2xl text-base leading-7 text-cream/68 sm:text-lg">
              Every look is adapted to your natural lashes and eye shape. These
              images are AI-created visual references—not Mainne client results—so
              your finished set will be uniquely yours.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[.14em] text-pampas/75">
              Preview pricing · final launch rates to be confirmed
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(["All styles", ...LASH_FAMILIES] as Filter[]).map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[.11em] transition ${
                  active
                    ? "border-pampas bg-pampas text-ink"
                    : "border-cream/20 text-cream/72 hover:border-pampas/70 hover:text-cream"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {visible.map((style, index) => (
            <article
              key={style.slug}
              data-lash-card
              className="group grid overflow-hidden rounded-[1.6rem] border border-cream/12 bg-cream/[.055] sm:grid-cols-[1fr_11.5rem]"
            >
              <div className="flex min-h-64 flex-col p-6 sm:min-h-[17rem] sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[.14em] text-sage-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-cream/15 px-3 py-1 text-[.66rem] uppercase tracking-[.1em] text-cream/55">
                    {style.family}
                  </span>
                </div>
                <h3 className="mt-7 text-3xl leading-none text-cream sm:text-[2rem]">
                  {style.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-cream/64">
                  {style.description}
                </p>
                <dl className="mt-auto flex gap-7 border-t border-cream/12 pt-5">
                  <div>
                    <dt className="text-[.65rem] uppercase tracking-[.14em] text-cream/45">Full set</dt>
                    <dd className="mt-1 font-serif text-xl text-pampas">${style.setPrice}</dd>
                  </div>
                  <div>
                    <dt className="text-[.65rem] uppercase tracking-[.14em] text-cream/45">Refill</dt>
                    <dd className="mt-1 font-serif text-xl text-pampas">${style.refillPrice}</dd>
                  </div>
                </dl>
              </div>

              <div className="relative min-h-64 overflow-hidden sm:min-h-full">
                <Image
                  src={asset(style.image)}
                  alt={style.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 35vw, 100vw"
                  className="object-cover object-[63%_center] transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent sm:bg-gradient-to-r sm:from-ink/20 sm:to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-ink/55 px-3 py-1.5 text-[.62rem] uppercase tracking-[.12em] text-cream/80 backdrop-blur-md">
                  Illustrative style reference
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-cream/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-cream/60">
            Not sure which set fits? Book the closest option. Mainne will refine
            the map and density with you before the application begins.
          </p>
          <Button href="/book/" className="bg-pampas text-ink hover:bg-cream">
            Start your booking
          </Button>
        </div>
      </div>
    </section>
  );
}
