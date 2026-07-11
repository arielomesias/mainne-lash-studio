import { PricingTable } from "@/components/PricingTable";
import { ProvisionalPricingNotice } from "@/components/ProvisionalPricingNotice";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICES } from "@/data/pricing";

export function Prices() {
  return (
    <Section tone="cream" labelledBy="prices">
      <SectionHeading id="prices">Prices</SectionHeading>

      <p className="mt-4 max-w-prose text-muted">
        A fill keeps an existing set going and costs less than starting over.
        Come back every two to three weeks and you will rarely need a full set
        again. Leave it much longer and there is not enough left to fill.
      </p>

      <div className="mt-10 space-y-12">
        {SERVICES.map((service, i) => (
          <div key={service.slug}>
            {i > 0 && (
              <FoxtailDivider className="mb-12 text-olive/40" />
            )}
            <PricingTable service={service} />
          </div>
        ))}
      </div>

      <ProvisionalPricingNotice />
    </Section>
  );
}
