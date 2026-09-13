import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/Section";
import { asset } from "@/lib/asset";

export function StudioStory() {
  return (
    <Section tone="cream" labelledBy="studio-story">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div>
          <p className="eyebrow">Private by design</p>
          <SectionHeading id="studio-story" className="mt-4 text-4xl sm:text-5xl">
            Why I work from home
          </SectionHeading>

          <div className="mt-6 space-y-4 text-muted">
            <p>
              The honest answer is that it started as the practical option, and
              then I realised it was the better one. A room in my home meant I
              could set my own pace instead of rushing a client because the chair
              was needed for someone else.
            </p>
            <p>
              Lash work is quiet, close, repetitive work. You are lying with your
              eyes closed while someone places extensions on individual lashes a
              fraction of a millimetre from your lid. It should not happen next
              to a blow dryer and a conversation about somebody else&rsquo;s
              wedding.
            </p>
            <p>
              The studio is a small, comfortable room prepared for one appointment
              at a time. If your set needs more attention because your natural
              lashes are finer than expected, it gets that attention.
            </p>
            <p>
              Its scale is part of the experience: a private room, a calm pace and
              one person doing careful work for one other person.
            </p>
          </div>
        </div>

        <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem_6rem_1.5rem_6rem] bg-beige">
          <Image
            src={asset("/images/results/v2/soft-volume-open-enhanced.webp")}
            alt="A finished soft volume set created at Mainne Lash Studio in Burnaby"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/55 px-4 py-2 text-[.65rem] uppercase tracking-[.12em] text-cream backdrop-blur">
            One client · one custom map
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
