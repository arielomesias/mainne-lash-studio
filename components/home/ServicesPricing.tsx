import Image from "next/image";
import Link from "next/link";

import { ProvisionalPricingNotice } from "@/components/ProvisionalPricingNotice";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES, type ServicePricing } from "@/data/pricing";

/**
 * "Our Eyelash Services and Prices" — lista desplegable de sets.
 *
 * Cada set es un <details>/<summary> nativo (igual que FaqSection): el contenido
 * queda en el HTML servido, asi que precios y descripciones son indexables sin
 * JS y la Home no arrastra ningun client component.
 *
 * Formato data-driven: todo sale de SERVICES en data/pricing.ts. Para anadir o
 * cambiar un set, se edita ese archivo — este componente no toca. La foto del
 * ojo vive en `service.image`; mientras sea `null` se muestra un marco
 * placeholder con el motivo foxtail.
 */
export function ServicesPricing() {
  return (
    <Section tone="cream" labelledBy="services-prices">
      <SectionHeading id="services-prices">
        Our Eyelash Services and Prices
      </SectionHeading>

      <p className="mt-4 max-w-prose text-muted">
        Open a set to see what it includes — half and full sets, fills, prices
        and how long each appointment takes. Every set is applied one lash at a
        time in the private home studio.
      </p>

      <div className="mt-10 space-y-4">
        {SERVICES.map((service, i) => (
          <ServiceRow
            key={service.slug}
            service={service}
            defaultOpen={i === 0}
          />
        ))}
      </div>

      <ProvisionalPricingNotice />
    </Section>
  );
}

function ServiceRow({
  service,
  defaultOpen = false,
}: {
  service: ServicePricing;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-xl border border-beige bg-bg transition-colors hover:border-olive/40"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl p-5 text-left transition-colors hover:bg-cream/60 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-serif text-lg text-ink sm:text-xl">
            {service.name}
          </span>
          <span className="text-sm text-olive-dark">
            from ${service.fromPrice}
          </span>
        </span>

        {/* Pista de accion tipo boton: deja claro que la tarjeta se abre. */}
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-olive/40 px-3 py-1 text-xs font-medium text-olive transition-colors group-hover:bg-olive/5"
        >
          <span className="group-open:hidden">See prices</span>
          <span className="hidden group-open:inline">Hide</span>
          <span className="text-sm leading-none transition-transform duration-200 group-open:rotate-180">
            &#9662;
          </span>
        </span>
      </summary>

      <div className="grid gap-6 px-5 pb-6 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-8">
        {/* Izquierda: descripcion + tabla de precios + enlace a la pagina del set. */}
        <div>
          <p className="max-w-prose text-muted">{service.description}</p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[18rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                {service.name} prices and appointment durations
              </caption>
              <thead>
                <tr className="border-b border-beige text-muted">
                  <th scope="col" className="py-2 pr-4 font-medium">
                    Set
                  </th>
                  <th scope="col" className="py-2 pr-4 font-medium">
                    Price
                  </th>
                  <th scope="col" className="py-2 font-medium">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {service.rows.map((row) => (
                  <tr key={row.service} className="border-b border-beige/60">
                    <th
                      scope="row"
                      className="py-3 pr-4 font-normal text-ink"
                    >
                      {row.service}
                    </th>
                    <td className="py-3 pr-4 whitespace-nowrap text-olive-dark">
                      {row.priceLabel}
                    </td>
                    <td className="py-3 whitespace-nowrap text-muted">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href={service.href}
            className="mt-5 inline-block py-1 text-sm font-medium text-olive underline underline-offset-4 hover:text-olive-dark"
          >
            See {service.name.toLowerCase()} in detail
          </Link>
        </div>

        {/* Derecha: foto del ojo que representa el set (o placeholder). */}
        <ServiceImage service={service} />
      </div>
    </details>
  );
}

function ServiceImage({ service }: { service: ServicePricing }) {
  if (service.image) {
    return (
      <Image
        src={service.image.src}
        alt={service.image.alt}
        width={480}
        height={360}
        className="aspect-[4/3] w-full rounded-xl object-cover md:sticky md:top-24"
      />
    );
  }

  // Placeholder hasta que Mainne entregue la foto del ojo. Decorativo => oculto
  // a lectores de pantalla.
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-dashed border-olive/30 bg-bg"
    >
      <FoxtailDivider className="w-full px-6 text-olive/40" />
    </div>
  );
}
