import { Section, SectionHeading } from "@/components/ui/Section";

const steps = [
  {
    title: "Book",
    body: "Pick the set you are leaning towards and a time that suits you. If you are not sure which set to choose, book the one closest to the look you want — it can change at the consultation.",
  },
  {
    title: "Consultation",
    body: "Before anything is applied, we look at your natural lashes and talk through eye shape, curl, length and how much upkeep you want. This is where the set gets mapped.",
  },
  {
    title: "Enjoy",
    body: "You rest with your eyes closed while the set is applied. You leave with aftercare instructions and, if you want one, a fill already booked for two to three weeks out.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="cream" labelledBy="how-it-works">
      <SectionHeading id="how-it-works">How an appointment works</SectionHeading>

      <ol className="mt-10 grid gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span
              aria-hidden="true"
              className="font-serif text-3xl text-olive/50"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-serif text-xl text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
