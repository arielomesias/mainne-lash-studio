import Image from "next/image";

import { BotanicalPampas } from "@/components/ui/BotanicalPampas";
import { BotanicalVine } from "@/components/ui/BotanicalVine";
import { BEAM_LIGHT_PRODUCT_URL } from "@/data/business";
import { asset } from "@/lib/asset";

const facts = [
  { value: "405 nm", label: "white LED wavelength" },
  { value: "1–1.5 sec", label: "controlled bond cure" },
  { value: "1 client", label: "at a time, always" },
];

export function BeamLightFeature() {
  return (
    <section aria-labelledby="beam-light-title" className="relative overflow-hidden bg-sage py-16 text-cream sm:py-24">
      <BotanicalVine className="absolute -right-14 -top-20 h-[34rem] rotate-[18deg] text-cream/10" />
      <BotanicalPampas className="absolute -bottom-28 -left-12 h-[37rem] text-pampas/[0.13]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8rem_1.6rem_8rem_1.6rem] bg-ink shadow-2xl">
            <Image
              src={asset("/images/results/v2/beam-application-enhanced.webp")}
              alt="Mainne applying an eyelash extension using the Beam Light white LED system"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-cream/25 bg-ink/45 px-4 py-2 text-[.66rem] uppercase tracking-[.13em] text-cream backdrop-blur">
              Beam Light application
            </span>
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[8rem_1.6rem_8rem_1.6rem] border border-cream/18" />
        </div>

        <div>
          <p className="eyebrow text-pampas">The Mainne difference</p>
          <h2 id="beam-light-title" className="mt-4 max-w-[12ch] text-[clamp(2.7rem,6vw,5.6rem)] leading-[.92] tracking-[-.045em] text-cream">
            White LED precision. <span className="italic text-pampas">Beautiful retention.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-cream/72 sm:text-lg">
            Mainne uses the Beam Light Arctica system to cure the adhesive bond
            lash by lash with controlled white LED light. The result is an
            efficient bond with less waiting between placement and cure—while
            the design itself stays completely customized to you.
          </p>

          <dl className="mt-9 grid gap-5 border-y border-cream/16 py-7 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="font-serif text-3xl text-pampas">{fact.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[.12em] text-cream/55">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-7 max-w-xl text-sm leading-6 text-cream/62">
            LED appointments include eye protection and eligibility screening.
            This service is not offered during pregnancy or breastfeeding, or
            where light exposure or adhesive ingredients may be unsuitable.
          </p>
          <a
            href={BEAM_LIGHT_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border-b border-pampas/60 pb-1 text-sm font-semibold text-pampas transition hover:border-pampas"
          >
            About the Beam Light system <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
