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
    <header className="sticky top-0 z-40 border-b border-beige/55 bg-bg/82 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-3">
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
          <span className="hidden font-serif text-lg leading-tight tracking-[-.02em] text-ink sm:inline">
            {BUSINESS_NAME}
          </span>
        </Link>

        <SiteNav />
      </Container>
    </header>
  );
}
