import type { Metadata } from "next";
import Link from "next/link";

import { ArticleShell } from "@/components/blog/ArticleShell";
import { H2, Lead, P } from "@/components/blog/Prose";
import { SITE_URL } from "@/data/business";
import { SAFE } from "@/data/blog";

export const metadata: Metadata = {
  title: SAFE.metaTitle,
  description: SAFE.description,
  alternates: { canonical: SAFE.href },
  openGraph: {
    title: `${SAFE.metaTitle} | Mainne Lash Studio`,
    description: SAFE.description,
    url: `${SITE_URL}${SAFE.href}`,
    type: "article",
  },
};

export default function SafePage() {
  return (
    <ArticleShell post={SAFE}>
      <Lead>
        For most people, professionally applied eyelash extensions are
        well-tolerated — but &ldquo;safe&rdquo; is not the same as &ldquo;risk
        free&rdquo;, and it would be dishonest to pretend otherwise. There are
        three things that genuinely go wrong: an allergy to the adhesive, damage
        to the natural lashes, and irritation or infection. Each has a specific
        cause, and each is largely prevented by the same things — a careful
        application and honest aftercare. Here is a straight account of all
        three.
      </Lead>

      <H2 id="allergy">Allergy to the adhesive</H2>
      <P>
        Lash adhesive is based on cyanoacrylate, and a small number of people
        are allergic to it. This is not the same as the mild stinging some feel
        during a set, which passes within hours — an allergic reaction shows up
        a day or two later as redness, swelling and persistent itching, usually
        of the lids rather than the eye itself.
      </P>
      <P>
        The awkward part is that sensitivity builds with exposure, so an allergy
        can appear after sets you wore happily for years. There is no way to
        promise it will never happen. What a good lash artist can do is use the
        adhesive appropriate to you, keep it well away from the skin, and take a
        reaction seriously rather than encouraging you to push through the next
        appointment. If you have reacted before, say so before we start.
      </P>

      <H2 id="damage">Damage to your natural lashes</H2>
      <P>
        This is the fear people voice most, and it is the one most within the
        artist&rsquo;s control. Extensions do not inherently harm the lashes
        underneath them. Damage comes from two specific application faults:
        weight and stickies.
      </P>
      <P>
        Weight is an extension too long or too thick for the natural lash it
        sits on. A lash forced to carry more than it can hold gets stressed at
        the root and can shed early or grow back weaker. That is why matching
        the length and thickness of each extension — and, for volume, the
        weight of each fan — to the individual lash matters more than any other
        single thing. Stickies are natural lashes accidentally glued together
        at the base, which stops the shorter one shedding on its own cycle and
        tugs on it as the longer one grows. Careful isolation of every lash is
        the entire defence against both. It is most of what I mean when I talk
        about{" "}
        <Link
          href="/about/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          how I work
        </Link>
        .
      </P>

      <H2 id="infection">Irritation and infection</H2>
      <P>
        The area around the lash line is warm and easily trapped, so it is a
        place where hygiene shows. Irritation can come from adhesive fumes
        during a set, from a lash artist working too close to the waterline, or
        from a set that is never cleaned afterwards and lets bacteria build up
        at the base. Genuine eye infections from extensions are uncommon, but
        they are almost always downstream of one of those.
      </P>
      <P>
        Prevention is unglamorous and effective: tools and surfaces kept clean
        between clients, adhesive applied to the lash rather than the lid, and a
        set you actually cleanse at home. That last one is on you, and it is why
        the{" "}
        <Link
          href="/blog/eyelash-extension-aftercare-guide/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          aftercare guide
        </Link>{" "}
        spends as long as it does on cleansing.
      </P>

      <H2 id="reducing-risk">How to keep the odds in your favour</H2>
      <P>
        You cannot reduce the risk to zero, and anyone who tells you they can is
        overselling. You can stack the odds heavily in your favour: choose
        someone who isolates properly and does not rush, be honest about past
        reactions and sensitive eyes, keep the set clean, and stop if something
        does not feel right rather than waiting for the next appointment.
      </P>
      <P>
        If you are new to extensions and nervous, a lighter{" "}
        <Link
          href="/classic-lash-extensions/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          classic set
        </Link>{" "}
        is a sensible way to find out how your eyes respond before committing to
        anything denser. If you would rather talk it through first, that is what
        the consultation at the start of every appointment is for.
      </P>
    </ArticleShell>
  );
}
