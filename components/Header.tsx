import Image from "next/image";
import Link from "next/link";

import { SiteNav } from "@/components/SiteNav";
import { Container } from "@/components/ui/Container";
import { BUSINESS_NAME } from "@/data/business";
import { asset } from "@/lib/asset";

/**
 * Header sticky con el menu principal. SiteNav (client) trae los enlaces de
 * navegacion y el boton "Book now".
 *
 * Logo: el isotipo (M + pestana) va transparente directamente sobre el crema
 * del header. Usa `logo-header.png` — una version del dorado enriquecida (mas
 * opaca y saturada) para que resalte sobre fondo claro, ya que el dorado
 * original fue disenado para brillar sobre negro. Al lado, el nombre en serif.
 * El texto da el nombre accesible del enlace; la imagen es decorativa (alt vacio).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-beige/70 bg-bg/90 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link
          href="/"
          aria-label={`${BUSINESS_NAME} — home`}
          className="inline-flex items-center gap-2.5 sm:gap-3"
        >
          <Image
            src={asset("/logo-header.png")}
            alt=""
            width={539}
            height={249}
            priority
            className="h-7 w-auto sm:h-8"
          />
          <span className="hidden font-serif leading-tight text-ink sm:inline sm:text-xl">
            {BUSINESS_NAME}
          </span>
        </Link>

        <SiteNav />
      </Container>
    </header>
  );
}
