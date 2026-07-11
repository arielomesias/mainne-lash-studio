import type { Metadata } from "next";
import Link from "next/link";

import { ArticleShell } from "@/components/blog/ArticleShell";
import { H2, Lead, LI, P, UL } from "@/components/blog/Prose";
import { SITE_URL } from "@/data/business";
import { HOW_LONG } from "@/data/blog";

export const metadata: Metadata = {
  title: HOW_LONG.metaTitle,
  description: HOW_LONG.description,
  alternates: { canonical: HOW_LONG.href },
  openGraph: {
    title: `${HOW_LONG.metaTitle} | Mainne Lash Studio`,
    description: HOW_LONG.description,
    url: `${SITE_URL}${HOW_LONG.href}`,
    type: "article",
  },
};

export default function HowLongPage() {
  return (
    <ArticleShell post={HOW_LONG}>
      <Lead>
        A set of eyelash extensions lasts one natural growth cycle — roughly two
        to three weeks looking full — before it needs a fill. The extensions do
        not wear out or expire; they leave gradually, riding out on the natural
        lashes they are attached to as those lashes shed and regrow. Whether
        your set sits at the two-week end or stretches past three comes down to
        your own lash cycle and how you treat the set day to day.
      </Lead>

      <H2 id="cycle">Why they shed at all</H2>
      <P>
        Every natural lash is on its own timeline. At any moment some are
        growing, some are resting, and some are about to fall out to make room
        for a new one — you shed a handful of natural lashes every day and never
        notice, because the ones underneath are already coming through.
      </P>
      <P>
        An extension is bonded to a single natural lash, so it shares that
        lash&rsquo;s fate. When the natural lash reaches the end of its cycle
        and sheds, the extension goes with it. That is entirely normal and is
        the reason a set thins evenly over a couple of weeks rather than staying
        perfect and then dropping all at once.
      </P>

      <H2 id="fills">Where fills come in</H2>
      <P>
        A fill tops up what has shed. Every two to three weeks, the gaps that
        have opened up get filled back in with new extensions, which is quicker
        and cheaper than starting over. Left much longer than about four weeks,
        there is usually too little of the original set left to fill, and it
        becomes a fresh full set instead. You can see how fills are priced
        against full sets on the{" "}
        <Link
          href="/book/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          prices page
        </Link>
        .
      </P>

      <H2 id="what-changes">What makes a set last longer</H2>
      <P>
        Two people can leave the same appointment and get very different
        mileage out of it. Some of that is simply your natural lash cycle, which
        you cannot change. The rest is within your control:
      </P>
      <UL>
        <LI>
          <strong className="font-medium text-ink">The first day.</strong> The
          adhesive needs about 24 hours to cure fully. Steam, water and sweat in
          that window are the single most common reason a set sheds early.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Oil.</strong> Oil-based
          cleansers and eye creams break the bond down over time. Anything used
          near the lash line should be oil-free.
        </LI>
        <LI>
          <strong className="font-medium text-ink">How you sleep.</strong> A set
          pressed into a pillow every night wears fastest, and unevenly. Back
          sleepers keep their lashes longest.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Hands off.</strong> Rubbing
          and picking pulls extensions — and sometimes the natural lash with
          them.
        </LI>
      </UL>
      <P>
        The full routine is in the{" "}
        <Link
          href="/blog/eyelash-extension-aftercare-guide/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          aftercare guide
        </Link>
        , but those four cover most of the difference.
      </P>

      <H2 id="early-shedding">When shedding is not normal</H2>
      <P>
        Losing a few extensions here and there is expected. Losing a visible
        chunk within the first week is not, and it usually points to the bond
        never curing properly — most often because the lashes got wet or steamy
        too soon, or because there was makeup residue on the natural lash when
        the extension was applied. If a set thins dramatically in the first few
        days, that is worth mentioning, not something to just live with until
        the next fill.
      </P>
      <P>
        One thing early shedding is <em>not</em> is proof that extensions damage
        your lashes. Your natural lashes shed on the same schedule whether or
        not they are carrying an extension. Because the extension leaves with
        the lash, it can look like more is falling out than usual, but the
        underlying rate has not changed — a point worth keeping in mind if you
        are weighing up whether extensions are{" "}
        <Link
          href="/blog/are-eyelash-extensions-safe/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          safe for your natural lashes
        </Link>
        .
      </P>
    </ArticleShell>
  );
}
