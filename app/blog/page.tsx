import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { EditorialHero } from "@/components/ui/EditorialHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SITE_URL } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
import { asset } from "@/lib/asset";
import { breadcrumbSchema } from "@/lib/schema";

// 145 caracteres.
const DESCRIPTION =
  "Straight answers on eyelash extensions from a Burnaby lash studio: how long they last, which set to choose, aftercare, and whether they are safe.";

export const metadata: Metadata = {
  title: "Lash Care Guides",
  description: DESCRIPTION,
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Lash Care Guides | Mainne Lash Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/`,
    type: "website",
  },
};

export default function BlogHubPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/blog/" },
        ])}
      />

      <EditorialHero
        eyebrow="Straight answers from the lash bed"
        title={<>Lash Care <span className="italic text-olive">Guides</span></>}
        description={
          <p>
            The questions clients actually ask, answered honestly before you
            book. Learn how to choose, wear and care for eyelash extensions.
          </p>
        }
        imageSrc="/images/editorial/aftercare-still-life-v1.webp"
        imageAlt="Lash extension aftercare essentials on a warm stone vanity"
        badge="Choose · prepare · care"
        ctaLabel="Browse all guides"
        ctaHref="#posts"
        secondaryLabel="Compare lash sets"
        secondaryHref="/#lash-menu"
      />

      <Section tone="cream" labelledBy="posts">
        <p className="eyebrow">The Mainne library</p>
        <SectionHeading id="posts" className="mt-4 text-4xl sm:text-5xl">
          Start with what you need today.
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[1.5rem] border border-beige bg-bg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={asset(post.coverImage)}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${post.coverPosition ?? "object-center"} transition duration-700 group-hover:scale-[1.035]`}
                />
                <span className="absolute left-4 top-4 rounded-full bg-bg/88 px-3 py-1.5 text-[.65rem] font-semibold uppercase tracking-[.12em] text-olive backdrop-blur">
                  Guide {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex min-h-64 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-2xl leading-tight text-ink">
                  <Link
                    href={post.href}
                    className="underline-offset-4 hover:text-olive-dark hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex min-h-11 items-center border-b border-olive/40 self-start text-sm font-semibold text-olive hover:border-olive-dark hover:text-olive-dark"
                >
                  Read {post.title.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
