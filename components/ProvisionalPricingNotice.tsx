import { PRICING_IS_PROVISIONAL } from "@/data/pricing";

/**
 * Aviso de desarrollo (CLAUDE.md, regla no negociable #5): toda tabla o precio
 * mostrado debe advertir que los valores son provisionales.
 *
 * No se renderiza en produccion — enseñarle al cliente "estos precios son
 * inventados" seria peor que no mostrarlos. Para que no se publiquen en
 * silencio, `data/pricing.ts` emite un aviso en cada build de produccion
 * mientras PRICING_IS_PROVISIONAL siga en true.
 */
export function ProvisionalPricingNotice() {
  if (!PRICING_IS_PROVISIONAL || process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <p className="mt-6 rounded-lg border border-dashed border-olive/50 bg-olive/5 px-4 py-3 text-sm text-olive-dark">
      <strong className="font-semibold">Dev note:</strong> these prices are
      placeholders taken from a reference salon, not Mainne&rsquo;s real rates.
      Replace them in <code>data/pricing.ts</code> before going live.
    </p>
  );
}
