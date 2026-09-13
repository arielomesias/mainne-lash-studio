import { Section, SectionHeading } from "@/components/ui/Section";
import { BOOKING_POLICIES } from "@/data/business";

export function BookingPolicies() {
  return (
    <Section tone="cream" labelledBy="policies" className="border-t border-beige/70">
      <p className="eyebrow">Clear from the start</p>
      <SectionHeading id="policies" className="mt-4 text-4xl sm:text-5xl">
        Deposits &amp; appointment policies
      </SectionHeading>

      <dl className="mt-10 grid gap-4 md:grid-cols-2">
        {BOOKING_POLICIES.map((policy, index) => (
          <div key={policy.title} className="rounded-[1.4rem] border border-beige bg-bg p-6 sm:p-7">
            <span aria-hidden="true" className="text-xs font-semibold tracking-[.13em] text-olive/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <dt className="mt-4 font-serif text-2xl text-ink">{policy.title}</dt>
            <dd className="mt-3 text-sm leading-6 text-muted">{policy.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
