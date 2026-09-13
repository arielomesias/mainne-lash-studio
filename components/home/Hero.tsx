"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { BotanicalPampas } from "@/components/ui/BotanicalPampas";
import { BotanicalVine } from "@/components/ui/BotanicalVine";
import { Container } from "@/components/ui/Container";
import { asset } from "@/lib/asset";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .from("[data-hero-copy] > *", {
            y: 28,
            opacity: 0,
            duration: 0.85,
            stagger: 0.09,
          })
          .from(
            "[data-hero-frame]",
            { y: 24, rotate: 1.5, opacity: 0, duration: 1.05 },
            0.12,
          )
          .from(
            "[data-orbit]",
            { scale: 0.72, opacity: 0, duration: 1.2 },
            0.2,
          );

        gsap.to("[data-float]", {
          yPercent: -5,
          rotate: -1.4,
          duration: 4.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="hero-shell relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grain absolute inset-0 opacity-30" />
      <BotanicalVine className="absolute -right-16 top-24 h-[30rem] text-olive/18 sm:right-0" />
      <BotanicalPampas
        mirrored
        className="absolute -bottom-20 -left-9 h-[28rem] text-olive/20 sm:-left-2 sm:h-[36rem]"
      />
      <span
        aria-hidden="true"
        className="absolute -left-20 bottom-8 h-64 w-64 rounded-full bg-pampas/35 blur-3xl"
      />

      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid min-h-[calc(100svh-10rem)] items-center gap-7 sm:gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div data-hero-copy className="relative z-10 pb-2">
            <p className="eyebrow">White LED lash extensions · Burnaby</p>

            <h1 className="mt-5 max-w-[14ch] text-[clamp(3.15rem,6.5vw,6.35rem)] leading-[.9] tracking-[-.052em] text-ink">
              White LED lash extensions in Burnaby.
              <span className="block italic text-olive">Modern precision, made to last.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Bespoke extensions cured with Beam Light&apos;s white LED system
              for precise bonding and retention—created one client at a time in
              a calm private studio near Lougheed SkyTrain.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
              <Button href="/book/">Book an appointment</Button>
              <span className="hidden sm:inline-flex">
                <Button href="#lash-menu" variant="secondary">
                  See styles &amp; prices
                </Button>
              </span>
            </div>

            <ul className="mt-8 hidden flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[.12em] text-olive-dark sm:flex">
              <li>Custom mapping</li>
              <li>White LED technique</li>
              <li>Private studio</li>
            </ul>
          </div>

          <div data-hero-frame className="relative mx-auto w-full max-w-[31rem] lg:max-w-none">
            <div
              data-orbit
              aria-hidden="true"
              className="absolute -inset-4 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] border border-olive/30 sm:-inset-7"
            />
            <div
              data-float
              className="hero-photo-mask relative aspect-[4/5] overflow-hidden bg-pampas shadow-[0_30px_90px_rgba(58,61,38,.22)]"
            >
              <Image
                src={asset("/images/results/v2/hero-client-enhanced.webp")}
                alt="A Mainne Lash Studio client wearing a custom textured lash set"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 70vw, 92vw"
                className="object-cover object-[48%_48%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/60 bg-bg/90 px-5 py-4 shadow-lg backdrop-blur-xl sm:-left-10">
              <span className="block font-serif text-2xl text-olive">405 nm</span>
              <span className="text-xs uppercase tracking-[.14em] text-muted">white LED system</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
