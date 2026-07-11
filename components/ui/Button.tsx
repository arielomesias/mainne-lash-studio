import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

/* docs/design-system.md: primario = fondo olivo, texto crema, radio suave
 * (ni cuadrado ni pill extremo). */
const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-olive text-cream hover:bg-olive-dark",
  secondary: "border border-olive/40 text-olive hover:bg-olive/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  // Cualquier href con esquema (sms:, mailto:, https:) sale del router de Next.
  // Pasarle un "sms:" a <Link> lo trataria como ruta interna.
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
    return (
      <a href={href} className={classes} rel="noopener">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
