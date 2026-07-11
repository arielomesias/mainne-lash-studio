import type { Metadata } from "next";
import Link from "next/link";

import { ArticleShell } from "@/components/blog/ArticleShell";
import { H2, Lead, LI, P, UL } from "@/components/blog/Prose";
import { SITE_URL } from "@/data/business";
import { COMPARE } from "@/data/blog";

export const metadata: Metadata = {
  title: COMPARE.metaTitle,
  description: COMPARE.description,
  alternates: { canonical: COMPARE.href },
  openGraph: {
    title: `${COMPARE.metaTitle} | Mainne Lash Studio`,
    description: COMPARE.description,
    url: `${SITE_URL}${COMPARE.href}`,
    type: "article",
  },
};

export default function ComparePage() {
  return (
    <ArticleShell post={COMPARE}>
      <Lead>
        Classic, hybrid and volume lashes differ in one thing, and it is not how
        dramatic they look — it is density. Classic gives you one extension per
        natural lash. Volume gives you a handmade fan of several fine extensions
        per natural lash. Hybrid is a deliberate mix of the two. Everything else
        people worry about follows from that single difference.
      </Lead>

      <H2 id="classic">Classic: one for one</H2>
      <P>
        A{" "}
        <Link
          href="/classic-lash-extensions/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          classic set
        </Link>{" "}
        bonds a single extension to each natural lash that can carry one. It
        adds length and curl but does not change how many lashes appear to be
        there, so the effect is the one people describe as &ldquo;mascara that
        never smudges&rdquo;. It is the lightest of the three sets and usually
        the shortest appointment.
      </P>
      <P>
        The honest limitation of classic is that it can only ever be as full as
        your own lash line. If your lashes are naturally dense, that is plenty.
        If there are gaps, classic will not hide them, because there is exactly
        one extension for each natural lash and nothing goes in the spaces
        between.
      </P>

      <H2 id="volume">Volume: fans, not singles</H2>
      <P>
        A{" "}
        <Link
          href="/volume-lash-extensions/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          volume set
        </Link>{" "}
        replaces that single extension with a fan — several much finer
        extensions, built by hand during the appointment and placed as one unit
        on a single natural lash. Because the fibre is finer, a fan of four or
        five lashes can weigh about the same as one classic extension. That is
        the whole trick of volume: more visible lashes without more weight.
      </P>
      <P>
        The result is density. By four dimensions and above, the lash line reads
        as a continuous dark edge rather than a set of individual lashes. It is
        the set to ask for when the word you keep reaching for is
        &ldquo;full&rdquo;. Mega volume is the same idea taken further — fans of
        six or more, from the finest fibre made.
      </P>

      <H2 id="hybrid">Hybrid: the middle, on purpose</H2>
      <P>
        A{" "}
        <Link
          href="/hybrid-lash-extensions/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          hybrid set
        </Link>{" "}
        mixes single extensions and fans on the same lash line. The singles give
        definition, the fans fill the gaps between them. It exists because most
        lash lines are not evenly populated — there are stretches where the
        natural lashes sit close together and stretches where they do not, and
        hybrid handles both without forcing a heavy extension onto a thin lash.
      </P>
      <P>
        Hybrid is also the most adjustable of the three. The ratio of singles to
        fans can sit close to classic or lean most of the way toward volume, so
        &ldquo;hybrid&rdquo; on its own covers a fairly wide range. That is worth
        saying out loud at the consultation.
      </P>

      <H2 id="choosing">How to choose</H2>
      <P>
        The quickest way to narrow it down is to be honest about two things:
        how dense your natural lashes already are, and how done you want to
        look.
      </P>
      <UL>
        <LI>
          Dense natural lashes, natural look wanted &rarr; classic does the job
          and costs the least.
        </LI>
        <LI>
          Gaps in the lash line, or you like classic but it looks sparse on you
          &rarr; hybrid fills what classic cannot.
        </LI>
        <LI>
          You want obvious fullness, or you are used to a strip lash look &rarr;
          volume, moving up toward mega for the most drama.
        </LI>
      </UL>
      <P>
        None of this is a permanent decision. You can switch at any fresh full
        set, and plenty of people do — classic through the week, volume for an
        occasion. If you are still unsure, book the set closest to the look you
        want and we settle it in the first ten minutes, before anything is
        applied.
      </P>
    </ArticleShell>
  );
}
