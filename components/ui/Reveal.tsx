"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

/**
 * Revela sus hijos con un fade-up sutil cuando entran en viewport.
 *
 * El estilo oculto/animado vive en globals.css bajo `.reveal-ready [data-reveal]`,
 * asi que sin JS (sin esa clase) el contenido esta visible desde el HTML. Este
 * componente solo alterna `data-revealed`. Se revela una vez y se desconecta.
 *
 * `prefers-reduced-motion` lo neutraliza via CSS: el contenido queda visible
 * aunque el observer no llegue a disparar.
 */
export function Reveal({
  children,
  as,
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  /** Retraso del reveal en ms, para escalonar elementos hermanos. */
  delay?: number;
  className?: string;
}) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    // Fallback defensivo: sin IntersectionObserver, mostrar de inmediato.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={revealed ? "" : undefined}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
