import type { ReactNode } from "react";

import { SectionHeading } from "@/components/ui/Section";

/**
 * Primitivos de prosa para el cuerpo de un articulo. Encapsulan el estilo para
 * que cada articulo escriba solo su texto, no clases repetidas.
 */

export function Lead({ children }: { children: ReactNode }) {
  // El primer parrafo responde la pregunta del titulo (featured snippet).
  return <p className="text-lg text-ink">{children}</p>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-muted">{children}</p>;
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <SectionHeading id={id} className="mt-12 text-2xl">
      {children}
    </SectionHeading>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 space-y-2">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-muted">
      <span aria-hidden="true" className="text-olive">
        &bull;
      </span>
      <span>{children}</span>
    </li>
  );
}
