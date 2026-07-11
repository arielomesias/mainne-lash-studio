import type { Metadata } from "next";
import Link from "next/link";

import { ArticleShell } from "@/components/blog/ArticleShell";
import { H2, Lead, LI, P, UL } from "@/components/blog/Prose";
import { SITE_URL } from "@/data/business";
import { AFTERCARE } from "@/data/blog";

export const metadata: Metadata = {
  title: AFTERCARE.metaTitle,
  description: AFTERCARE.description,
  alternates: { canonical: AFTERCARE.href },
  openGraph: {
    title: `${AFTERCARE.metaTitle} | Mainne Lash Studio`,
    description: AFTERCARE.description,
    url: `${SITE_URL}${AFTERCARE.href}`,
    type: "article",
  },
};

export default function AftercarePage() {
  return (
    <ArticleShell post={AFTERCARE}>
      <Lead>
        Making a set of eyelash extensions last is mostly about two things:
        getting through the first 24 hours without wetting them, and keeping
        them clean and oil-free after that. Everything else is a refinement on
        those two. None of it is difficult, but a set treated well can look full
        twice as long as the same set treated carelessly.
      </Lead>

      <H2 id="first-day">The first 24 hours</H2>
      <P>
        The adhesive holding each extension cures over about a day. Until it has,
        water, steam and sweat can disrupt the bond before it has fully set,
        which is the most common reason a new set sheds early. For that first
        day, that means no showers with your face in the stream, no gym, no
        sauna, no hot yoga, no crying at a film if you can help it.
      </P>
      <P>
        After 24 hours the bond is cured and normal life resumes. This is the
        one rule where the timing genuinely matters — the rest are habits, not
        deadlines.
      </P>

      <H2 id="cleansing">Cleanse them, do not avoid them</H2>
      <P>
        The instinct is to leave a new set alone, but dirty lashes shed faster,
        not slower. Oil from your skin, makeup and general grime build up at the
        base of the extensions and work against the bond, and they are also how
        the lid gets irritated. Clean lashes are long-lasting lashes.
      </P>
      <UL>
        <LI>
          Use a foaming, oil-free lash cleanser every day or two — more if you
          wear eye makeup.
        </LI>
        <LI>
          Brush them through with a clean spoolie once they are dry, so they set
          in the right direction.
        </LI>
        <LI>
          Let them air-dry or use a fan on cool. Rubbing them with a towel is
          how extensions get dragged off.
        </LI>
      </UL>

      <H2 id="oil">The oil problem</H2>
      <P>
        Cyanoacrylate — the adhesive used for lashes — is broken down by oil.
        That is not a small effect: an oil-based cleanser, a heavy eye cream, or
        an oil makeup remover used around the lash line will loosen the bond
        over a few days and the extensions start sliding off well before their
        time. Check the ingredients of anything that goes near your eyes, and
        keep oils to the rest of your face.
      </P>

      <H2 id="sleeping">How you sleep matters more than you think</H2>
      <P>
        A surprising amount of a set&rsquo;s wear happens overnight. Pressing
        your face into a pillow and dragging it sideways for eight hours bends
        and pulls extensions, and it does so unevenly — front and side sleepers
        often notice one eye thinning faster than the other, on whichever side
        they favour. Sleeping on your back is the ideal. If that is not
        realistic, a silk or satin pillowcase lets the lashes slide rather than
        catch.
      </P>

      <H2 id="everyday">The everyday habits that quietly kill a set</H2>
      <P>
        Most premature shedding is not one dramatic mistake — it is small habits
        repeated daily.
      </P>
      <UL>
        <LI>
          <strong className="font-medium text-ink">Rubbing your eyes.</strong>{" "}
          The fastest way to lose extensions, and natural lashes with them.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Waterproof mascara.</strong>{" "}
          It is made to resist removal, so taking it off means dragging on the
          bond. A classic set should not need mascara at all.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Eyelash curlers.</strong>{" "}
          They crimp and snap extensions. The curl is built into the set already.
        </LI>
        <LI>
          <strong className="font-medium text-ink">Picking.</strong> A loose
          extension is tempting to pull. It usually takes a healthy natural lash
          with it — let it shed on its own.
        </LI>
      </UL>

      <H2 id="fills">Book the fill before you need it</H2>
      <P>
        Aftercare keeps a set healthy between appointments, but it does not stop
        the natural shedding cycle — nothing does. Coming back every two to
        three weeks for a fill is what keeps a set looking full indefinitely.
        For more on why that interval, see{" "}
        <Link
          href="/blog/how-long-do-eyelash-extensions-last/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          how long extensions last
        </Link>
        , or{" "}
        <Link
          href="/book/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          book a fill
        </Link>{" "}
        while the set is still full.
      </P>
    </ArticleShell>
  );
}
