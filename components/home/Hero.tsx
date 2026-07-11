import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";

/*
 * docs/seo-strategy.md §2.1 propone el USP "certified lash artist", pero
 * docs/business-facts.md no confirma ninguna certificacion y
 * docs/content-guidelines.md prohibe afirmaciones no verificables. El claim se
 * añade aqui y en /about/ SOLO cuando Mainne confirme el certificado concreto.
 */
const usps = [
  "Private home studio",
  "One client at a time",
  "Steps from Lougheed SkyTrain",
];

export function Hero() {
  return (
    <div className="bg-bg pb-14 pt-12 sm:pb-20 sm:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* data-hero escalona la entrada de los hijos directos al cargar
              (ver .reveal-ready [data-hero] en globals.css). Above the fold, por
              eso es entrada-al-cargar y no scroll-reveal. */}
          <div data-hero>
            <h1 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Eyelash Extensions in Burnaby
            </h1>

            <p className="mt-6 max-w-prose text-base text-muted sm:text-lg">
              Classic, hybrid and volume lash extensions, applied slowly and
              one lash at a time in a quiet home studio. No rushing, no
              crowded salon floor — just your set, done properly.
            </p>

            {/* El separador va DESPUES de cada item, no antes: si fuera antes,
                al envolver a 375px la linea nueva empezaria con una viñeta
                huerfana. */}
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-olive-dark">
              {usps.map((usp, i) => (
                <li key={usp} className="flex items-center gap-3">
                  {usp}
                  {i < usps.length - 1 && (
                    <span aria-hidden="true" className="text-beige">
                      &bull;
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book/">Book your appointment</Button>
              <Button href="/classic-lash-extensions/" variant="secondary">
                Explore lash sets
              </Button>
            </div>
          </div>

          {/*
           * TODO: reemplazar por la foto real del trabajo de Mainne:
           *   <Image src="/images/hero-volume-lashes-burnaby.webp" priority
           *          width={1200} height={1200} sizes="(min-width:1024px) 50vw, 100vw"
           *          alt="Volume lash extensions Burnaby before and after" />
           * `priority` solo aqui: es el LCP. El aspect-square de abajo reserva
           * el mismo espacio, para que al cambiar la imagen no haya salto (CLS).
           */}
          <div
            aria-hidden="true"
            className="flex aspect-square w-full items-center justify-center rounded-2xl border border-beige bg-cream text-olive/40"
          >
            <FoxtailDivider className="w-full text-olive/50" />
          </div>
        </div>
      </Container>
    </div>
  );
}
