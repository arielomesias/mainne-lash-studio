import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * ⚠️ ESCRITO PERO NO MONTADO. app/book/page.tsx no lo renderiza todavia.
 *
 * §2.8 pide politicas de deposito y cancelacion, pero docs/business-facts.md
 * no las define y NO se inventan: a diferencia de un precio provisional, una
 * politica es un compromiso comercial que una clienta puede exigir.
 *
 * Para activarlo:
 *   1. Confirmar las politicas con Mainne y escribirlas en
 *      docs/business-facts.md (hoy estan como [CONFIRMAR]).
 *   2. Moverlas a un `POLICIES` en data/business.ts.
 *   3. Reemplazar `policies` de abajo por ese import y montar el componente
 *      en app/book/page.tsx.
 */

type Policy = { title: string; body: string };

// TODO [CONFIRMAR]: vacio a proposito. Ver docs/business-facts.md.
const policies: Policy[] = [];

export function BookingPolicies() {
  if (policies.length === 0) return null;

  return (
    <Section tone="cream" labelledBy="policies">
      <SectionHeading id="policies">Deposits &amp; cancellations</SectionHeading>

      <dl className="mt-8 max-w-prose space-y-6">
        {policies.map((policy) => (
          <div key={policy.title}>
            <dt className="font-serif text-lg text-ink">{policy.title}</dt>
            <dd className="mt-2 text-muted">{policy.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
