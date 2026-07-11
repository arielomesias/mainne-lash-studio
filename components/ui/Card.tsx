import type { ReactNode } from "react";

/* docs/design-system.md: fondo beige/crema, borde sutil, sin sombras duras. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-beige bg-cream/60 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
