import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE_URL } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
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

      <div className="bg-bg pb-8 pt-12 sm:pt-16">
        <Container>
          <div className="max-w-prose">
            <h1 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Lash Care Guides
            </h1>
            <p className="mt-6 text-base text-muted sm:text-lg">
              The questions clients actually ask, answered honestly — before you
              book, not after. No upselling, just what is worth knowing about
              wearing extensions.
            </p>
          </div>
        </Container>
      </div>

      <Section tone="cream" labelledBy="posts">
        <h2 id="posts" className="sr-only">
          All guides
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Card key={post.slug} className="flex flex-col bg-bg">
              <h3 className="font-serif text-xl text-ink">
                <Link
                  href={post.href}
                  className="underline-offset-4 hover:text-olive-dark hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-4 inline-block py-1 text-sm font-medium text-olive underline underline-offset-4 hover:text-olive-dark"
              >
                Read the guide
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
