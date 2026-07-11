import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Estructura compartida por las 3 paginas de servicio. El COPY no se comparte:
 * cada pagina pasa su propio `lede`.
 */
export function ServiceHero({
  title,
  lede,
}: {
  title: string;
  lede: ReactNode;
}) {
  return (
    <div className="bg-bg pb-12 pt-12 sm:pb-16 sm:pt-16">
      <Container>
        <div className="max-w-prose">
          <h1 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <div className="mt-6 text-base text-muted sm:text-lg">{lede}</div>

          <div className="mt-8">
            <Button href="/book/">See prices &amp; book</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
