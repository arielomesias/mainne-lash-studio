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
    <Section tone="cream" labelledBy="how-it-works" className="overflow-hidden">
      <p className="eyebrow">Calm, considered, personal</p>
      <SectionHeading id="how-it-works" className="mt-4 max-w-[14ch] text-4xl leading-none sm:text-6xl">
        A simple path to your new set.
      </SectionHeading>

      <ol className="mt-10 grid gap-4 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="relative min-h-72 overflow-hidden rounded-[1.5rem] border border-beige bg-bg p-6 sm:p-7">
            <span
              aria-hidden="true"
              className="font-serif text-5xl italic text-olive/25"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-serif text-3xl text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            <span aria-hidden="true" className="absolute -bottom-14 -right-10 h-32 w-32 rounded-full border border-olive/10" />
          </li>
        ))}
      </ol>
    </Section>
  );
}
