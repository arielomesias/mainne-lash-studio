import Image from "next/image";

import { asset } from "@/lib/asset";

const images = [
  {
    src: "/images/results/hero-real.webp",
    alt: "A finished textured lash set by Mainne Lash Studio",
    label: "Custom texture",
    className: "lg:col-span-7",
    position: "object-[58%_center]",
  },
  {
    src: "/images/results/soft-volume-real.webp",
    alt: "A finished soft volume eyelash set by Mainne Lash Studio",
    label: "Soft volume",
    className: "lg:col-span-5",
    position: "object-center",
  },
  {
    src: "/images/results/mapping-process-real.webp",
    alt: "Detailed lash mapping during an appointment with Mainne",
    label: "Mapped for you",
    className: "lg:col-span-5",
    position: "object-center",
  },
];

export function RealResults() {
  return (
    <section aria-labelledby="real-results-title" className="bg-bg py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Her work, up close</p>
            <h2 id="real-results-title" className="mt-4 text-[clamp(2.65rem,6vw,5.4rem)] leading-[.94] tracking-[-.045em] text-ink">
              Real clients. <span className="italic text-olive">Real detail.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            No stock photos in this gallery. Every image below was taken from
            Mainne&apos;s own application and finished-set videos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {images.slice(0, 2).map((image, index) => (
            <figure key={image.src} className={`${image.className} group relative h-[28rem] overflow-hidden rounded-[1.5rem] bg-cream sm:h-[36rem]`}>
              <Image
                src={asset(image.src)}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                className={`object-cover ${image.position} transition duration-700 group-hover:scale-[1.025]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 font-serif text-2xl text-cream">{image.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 grid overflow-hidden rounded-[1.5rem] bg-cream lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex flex-col justify-center p-7 sm:p-12">
            <span className="eyebrow">No one-size-fits-all maps</span>
            <h3 className="mt-4 text-4xl leading-none text-ink sm:text-5xl">Designed around your eye.</h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted sm:text-base">
              Length, curl, density and direction are adjusted to your natural
              lashes—not copied from a generic chart.
            </p>
          </div>
          <figure className="relative min-h-96 overflow-hidden">
            <Image
              src={asset(images[2].src)}
              alt={images[2].alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
            <figcaption className="absolute bottom-4 right-4 rounded-full bg-ink/55 px-4 py-2 text-[.66rem] uppercase tracking-[.13em] text-cream backdrop-blur">Real process</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
