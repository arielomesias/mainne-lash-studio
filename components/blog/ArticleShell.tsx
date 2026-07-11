import Link from "next/link";
import type { ReactNode } from "react";

import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Reveal } from "@/components/ui/Reveal";
import type { BlogPost } from "@/data/blog";
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
        <div className="bg-bg pb-8 pt-12 sm:pt-16">
          <Container>
            <div className="max-w-prose">
              <p className="text-sm text-muted">
                <Link
                  href="/blog/"
                  className="text-olive underline-offset-4 hover:underline"
                >
                  Guides
                </Link>
              </p>
              <h1 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-muted">
                <time dateTime={post.datePublished}>{published}</time>
              </p>
            </div>
          </Container>
        </div>

        <div className="bg-bg pb-14 sm:pb-20">
          <Container>
            {/* La prosa del articulo. */}
            <div className="max-w-prose">{children}</div>
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
