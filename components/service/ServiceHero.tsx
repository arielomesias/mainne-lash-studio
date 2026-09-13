import type { ReactNode } from "react";

import { EditorialHero } from "@/components/ui/EditorialHero";

/**
 * Estructura compartida por las 3 paginas de servicio. El COPY no se comparte:
 * cada pagina pasa su propio `lede`.
 */
export function ServiceHero({
  title,
  lede,
  imageSrc,
  imageAlt,
  badge,
}: {
  title: string;
  lede: ReactNode;
  imageSrc: string;
  imageAlt: string;
  badge: string;
}) {
  return (
    <EditorialHero
      eyebrow="Custom lash set · Burnaby"
      title={title}
      description={lede}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      badge={badge}
      secondaryLabel="Compare all lash styles"
      secondaryHref="/#lash-menu"
    />
  );
}
