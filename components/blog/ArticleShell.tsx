import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { BotanicalPampas } from "@/components/ui/BotanicalPampas";
import { BotanicalVine } from "@/components/ui/BotanicalVine";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Reveal } from "@/components/ui/Reveal";
import type { BlogPost } from "@/data/blog";
import { asset } from "@/lib/asset";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";

/**
 * Estructura compartida por los 4 articulos: header, contenedor de prosa,
 * FAQ, enlaces relacionados, CTA y todo el JSON-LD. Cada pagina de articulo
 * pasa solo su prosa como children.
 *
 * La fecha se muestra legible pero el dato para el schema sale de `post`.
 */
export function ArticleShell({
  post,
  children,
}: {
  post: BlogPost;
  children: ReactNode;
}) {
  const published = new Date(post.datePublished).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd schema={articleSchema(post)} />
      <JsonLd schema={faqPageSchema(post.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/blog/" },
          { name: post.title, path: post.href },
        ])}
      />

      <article>
        <header className="hero-shell relative overflow-hidden py-12 sm:py-20">
          <BotanicalVine className="absolute -right-20 -top-16 h-[28rem] text-olive/10" />
          <BotanicalPampas mirrored className="absolute -bottom-32 -left-12 h-[34rem] text-olive/12" />
          <Container className="relative">
            <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-sm text-muted">
                  <Link
                    href="/blog/"
                    className="text-olive underline-offset-4 hover:underline"
                  >
                    Guides
                  </Link>
                </p>
                <h1 className="mt-5 text-[clamp(2.8rem,6vw,5.7rem)] leading-[.93] tracking-[-.045em] text-ink">
                  {post.title}
                </h1>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[.13em] text-olive">
                  <time dateTime={post.datePublished}>{published}</time>
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
                  {post.excerpt}
                </p>
              </div>

              <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem_6rem_1.5rem_6rem] bg-beige shadow-[0_24px_70px_rgba(58,61,38,.14)]">
                <Image
                  src={asset(post.coverImage)}
                  alt={post.coverAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className={`object-cover ${post.coverPosition ?? "object-center"}`}
                />
              </figure>
            </div>
          </Container>
        </header>

        <div className="bg-bg py-14 sm:py-20">
          <Container>
            {/* La prosa del articulo. */}
            <div className="mx-auto max-w-[46rem] rounded-[1.5rem] border border-beige bg-bg px-0 sm:px-8">
              {children}
            </div>
          </Container>
        </div>
      </article>

      <FaqSection faqs={post.faqs} heading="Quick answers" tone="cream" />

      <div className="bg-bg py-14 sm:py-20">
        <Container>
          <Reveal>
            <div className="max-w-prose">
              <h2 className="font-serif text-xl text-ink">Keep reading</h2>
              <ul className="mt-4 space-y-2">
                {post.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 text-olive underline underline-offset-4 hover:text-olive-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <FoxtailDivider className="mt-14 text-olive" />

            <div className="mx-auto mt-10 max-w-xl text-center">
              <h2 className="text-2xl text-ink sm:text-3xl">
                Thinking about a set?
              </h2>
              <p className="mt-4 text-muted">
                Text me the look you have in mind and we will work out which set
                fits your lashes.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/book/">See prices &amp; book</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
