import Link from "next/link";

import type { ServicePricing } from "@/data/pricing";

/**
 * Tabla de precios de un set. Reutilizable por /book/ y por las 3 paginas de
 * servicio de la fase 3.
 *
 * Los precios vienen de data/pricing.ts — nunca hardcodeados
 * (CLAUDE.md, regla no negociable #5).
 *
 * El wrapper con overflow-x-auto es deliberado: a 375px la tabla debe hacer
 * scroll dentro de su propia caja, nunca desbordar la pagina.
 */
export function PricingTable({ service }: { service: ServicePricing }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-xl text-ink">{service.name}</h3>
        <Link
          href={service.href}
          className="inline-block py-1 text-sm text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          What {service.name.toLowerCase()} look like
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            {service.name} prices and appointment durations
          </caption>
          <thead>
            <tr className="border-b border-beige text-muted">
              <th scope="col" className="py-2 pr-4 font-medium">
                Service
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
                <th scope="row" className="py-3 pr-4 font-normal text-ink">
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
    </div>
  );
}
