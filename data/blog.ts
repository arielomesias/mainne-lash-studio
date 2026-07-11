/**
 * Hub informacional (docs/seo-strategy.md §2.9).
 *
 * Aqui vive SOLO lo estructurado de cada post: metadatos, FAQs y enlaces
 * relacionados. La prosa de cada articulo (800-1200 palabras) se escribe en su
 * propio componente en components/blog/articles/, porque es JSX rico y no cabe
 * en un string.
 *
 * Las FAQs alimentan a la vez el acordeon visible y el FAQPage schema — no
 * duplicar a mano.
 */

import type { Faq } from "@/data/faqs";

export type BlogPost = {
  slug: string;
  href: string;
  /** H1 del articulo y titulo de la card en el hub. */
  title: string;
  /** <title> del <head>, sin el sufijo del layout. */
  metaTitle: string;
  description: string;
  /** Resumen de una linea para la card del hub. */
  excerpt: string;
  datePublished: string;
  dateModified: string;
  faqs: Faq[];
  /** Enlaces al final del articulo. Siempre incluye /book/ (§3). */
  related: { href: string; label: string }[];
};

export const HOW_LONG: BlogPost = {
  slug: "how-long-do-eyelash-extensions-last",
  href: "/blog/how-long-do-eyelash-extensions-last/",
  title: "How Long Do Eyelash Extensions Last?",
  metaTitle: "How Long Do Eyelash Extensions Last?",
  description:
    "Eyelash extensions last one full growth cycle — about two to three weeks looking full — before a fill. Here is what changes that, and why they shed.",
  excerpt:
    "A full set stays full for two to three weeks. What decides whether it is closer to two or closer to four.",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  faqs: [
    {
      question: "How often do I need a fill?",
      answer:
        "Every two to three weeks for most people. A fill replaces the extensions that shed with your natural lashes over that period and is quicker and cheaper than a new full set. Past about four weeks there is usually too little left to fill, and it becomes a fresh set.",
    },
    {
      question: "Why did my extensions fall out after a few days?",
      answer:
        "Extensions shedding in the first few days almost always means the bond did not cure properly — usually because the lashes got wet, steamy or oily within the first day, or because there was makeup residue on the natural lash when the extension went on. A few isolated ones is normal; a visible thinning within a week is not.",
    },
    {
      question: "Do extensions make your natural lashes fall out faster?",
      answer:
        "No. Your natural lashes shed on their own cycle whether or not they carry an extension — you lose a few every day and never notice. An extension leaves with the natural lash it was attached to, so it can look like more is falling out, but the underlying rate has not changed.",
    },
  ],
  related: [
    { href: "/classic-lash-extensions/", label: "Classic lash extensions" },
    { href: "/blog/eyelash-extension-aftercare-guide/", label: "Aftercare guide" },
    { href: "/book/", label: "Book an appointment" },
  ],
};

export const COMPARE: BlogPost = {
  slug: "classic-vs-hybrid-vs-volume-lashes",
  href: "/blog/classic-vs-hybrid-vs-volume-lashes/",
  title: "Classic vs Hybrid vs Volume Lashes",
  metaTitle: "Classic vs Hybrid vs Volume Lashes",
  description:
    "Classic, hybrid and volume lashes differ in one thing: density. A Burnaby lash artist explains which set suits which lash line, and how to choose.",
  excerpt:
    "The three sets differ in one thing — density. Which one suits your lash line, and how to decide.",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  faqs: [
    {
      question: "Which lash set is best for a natural look?",
      answer:
        "Classic. One extension per natural lash adds length and curl without changing how dense your lash line is, so it reads as your own lashes on a good day. Hybrid is the next step up if classic looks too sparse on you.",
    },
    {
      question: "Is volume more damaging than classic?",
      answer:
        "Not if the fans are made correctly. A volume fan is built from much finer fibre than a classic extension, so a fan of several lashes can weigh the same as one classic lash. Damage comes from weight the natural lash cannot carry, which is a question of how the fan is made, not of the style itself.",
    },
    {
      question: "Can I switch between sets?",
      answer:
        "Yes, at any fresh full set. You are not locked in — plenty of people run classic in winter and volume for an event, or move up to hybrid once they see how classic sits on them. It is worth saying at the consultation so the map suits what you want this time.",
    },
  ],
  related: [
    { href: "/classic-lash-extensions/", label: "Classic lash extensions" },
    { href: "/hybrid-lash-extensions/", label: "Hybrid lash extensions" },
    { href: "/volume-lash-extensions/", label: "Volume lash extensions" },
    { href: "/book/", label: "Book an appointment" },
  ],
};

export const AFTERCARE: BlogPost = {
  slug: "eyelash-extension-aftercare-guide",
  href: "/blog/eyelash-extension-aftercare-guide/",
  title: "Eyelash Extension Aftercare Guide",
  metaTitle: "Eyelash Extension Aftercare Guide",
  description:
    "How to make an eyelash extension set last: the first 24 hours, cleansing, sleeping, and the habits that quietly shorten a set. From a Burnaby studio.",
  excerpt:
    "The first day matters most, and so does cleansing. The habits that make a set last, and the ones that quietly kill it.",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  faqs: [
    {
      question: "Can I get eyelash extensions wet?",
      answer:
        "After the first 24 hours, yes — and you should. The bond needs about a day to cure fully, so keep them dry and away from steam that first day. After that, water is fine and clean lashes actually last longer than lashes you are afraid to touch.",
    },
    {
      question: "Why can't I use oil-based products?",
      answer:
        "The adhesive that holds an extension is broken down by oil. An oil-based cleanser, makeup remover or heavy eye cream around the lash line will loosen the bond over days, and the extensions start sliding off early. Check the label of anything used near your eyes for oils.",
    },
    {
      question: "How do I sleep with lash extensions?",
      answer:
        "On your back if you can manage it. A set gets most of its wear from being pressed into a pillow and dragged sideways all night — side and front sleepers tend to lose extensions fastest, and unevenly, on whichever side they favour. A silk pillowcase helps if back-sleeping is not realistic.",
    },
  ],
  related: [
    { href: "/blog/how-long-do-eyelash-extensions-last/", label: "How long extensions last" },
    { href: "/book/", label: "Book an appointment" },
  ],
};

export const SAFE: BlogPost = {
  slug: "are-eyelash-extensions-safe",
  href: "/blog/are-eyelash-extensions-safe/",
  title: "Are Eyelash Extensions Safe?",
  metaTitle: "Are Eyelash Extensions Safe?",
  description:
    "Are eyelash extensions safe? An honest look at what can go wrong — allergy, damage, infection — and what prevents each. From a Burnaby lash artist.",
  excerpt:
    "An honest look at the three things that can go wrong — allergy, damage, infection — and what actually prevents each.",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  faqs: [
    {
      question: "Can you be allergic to eyelash extensions?",
      answer:
        "You can be allergic to the adhesive — specifically to cyanoacrylate, the substance that makes it cure. It is uncommon, but it can appear after sets you tolerated before, since sensitivity builds with exposure. It shows as redness, swelling and itching a day or two after a set, and it is different from simple irritation, which passes within hours. If you react, tell your lash artist rather than pushing through the next appointment.",
    },
    {
      question: "Do eyelash extensions ruin your natural lashes?",
      answer:
        "Correctly applied, they should not. Problems come from extensions that are too long or heavy for the natural lash, or from lashes bonded together at the base so they cannot shed on their own cycle. Both are application faults, not something inherent to extensions — which is why isolation and choosing the right weight matter more than anything else.",
    },
    {
      question: "Is the glue safe near my eyes?",
      answer:
        "The adhesive is applied to the natural lash a millimetre or so from the lid, never to the skin or the eye itself, and it cures on contact with the moisture in the air. It is not painful and your eyes stay closed throughout. What you should never accept is glue touching the waterline or lid — that is not how extensions are meant to be applied.",
    },
  ],
  related: [
    { href: "/about/", label: "How I work" },
    { href: "/blog/eyelash-extension-aftercare-guide/", label: "Aftercare guide" },
    { href: "/book/", label: "Book an appointment" },
  ],
};

/** Orden en el hub: el comparativo primero (reparte link equity a los 3 sets). */
export const BLOG_POSTS: BlogPost[] = [COMPARE, HOW_LONG, AFTERCARE, SAFE];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
