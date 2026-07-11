import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";

export function PortraitHero() {
  return (
    <div className="bg-bg pb-14 pt-12 sm:pb-20 sm:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Meet Your Lash Artist
            </h1>

            <p className="mt-6 max-w-prose text-base text-muted sm:text-lg">
              I&rsquo;m Mainne. I do one thing — eyelash extensions — and I do
              them from a small studio in my home in Burnaby, one client at a
              time. This page is about how I work, so you know what you are
              walking into before you book.
            </p>

            <div className="mt-8">
              <Button href="/book/">Book your appointment</Button>
            </div>
          </div>

          {/*
           * TODO: reemplazar por la foto real de Mainne. Es requisito de §2.7
           * (E-E-A-T: el contenido debe sonar escrito por una persona real).
           *   <Image src="/images/mainne-lash-artist-burnaby.webp" priority
           *          width={1200} height={1200} sizes="(min-width:1024px) 50vw, 100vw"
           *          alt="Mainne, lash artist in Burnaby" />
           * El aspect-square reserva el mismo espacio, para que al cambiarlo no
           * haya salto (CLS).
           */}
          <div
            aria-hidden="true"
            className="flex aspect-square w-full items-center justify-center rounded-2xl border border-beige bg-cream"
          >
            <FoxtailDivider className="w-full text-olive/50" />
          </div>
        </div>
      </Container>
    </div>
  );
}
