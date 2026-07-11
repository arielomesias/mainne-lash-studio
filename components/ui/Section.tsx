import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Tone = "base" | "cream" | "beige";

const toneClass: Record<Tone, string> = {
  base: "bg-bg",
  cream: "bg-cream",
  beige: "bg-beige",
};

/**
 * Casi todas las secciones del sitio usan este wrapper, asi que el scroll
 * reveal se aplica aqui una vez y lo hereda todo. `reveal={false}` para
 * secciones que no deban animarse.
 */
export function Section({
  children,
  tone = "base",
  className = "",
  id,
  labelledBy,
  reveal = true,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
  reveal?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${toneClass[tone]} py-14 sm:py-20 ${className}`}
    >
      <Container>
        {reveal ? <Reveal>{children}</Reveal> : children}
      </Container>
    </section>
  );
}

export function SectionHeading({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-2xl sm:text-3xl font-normal text-ink ${className}`}
    >
      {children}
    </h2>
  );
}
