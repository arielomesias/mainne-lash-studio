import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

const routes = [
  {
    city: "From Burnaby",
    detail:
      "Lougheed Town Centre sits on the Millennium Line, and the studio is a short walk from the station. Coming from Metrotown, the Expo Line connects through Production Way–University.",
  },
  {
    city: "From Coquitlam",
    detail:
      "The studio is right on the Burnaby–Coquitlam boundary. From Coquitlam Centre or Burquitlam, Lougheed is a handful of stops down the Millennium Line.",
  },
  {
    city: "From New Westminster",
    detail:
      "The Expo Line runs from New Westminster and Sapperton up to Lougheed, so there is no bridge traffic and no parking to hunt for on arrival.",
  },
];

export function EasyToReach() {
  return (
    <Section labelledBy="easy-to-reach">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Private, never hard to find</p>
          <SectionHeading id="easy-to-reach" className="mt-4 text-4xl leading-none sm:text-6xl">
            Near Lougheed. Away from the salon rush.
          </SectionHeading>
          <p className="mt-6 max-w-prose text-sm leading-6 text-muted sm:text-base">
            The studio is a short walk from Lougheed SkyTrain station, one of
            the region&apos;s best-connected points. The room stays private and
            quiet; the exact residential address stays private until your
            appointment is confirmed.
          </p>
        </div>

        <div aria-label="Travel areas around Lougheed" className="relative flex min-h-[25rem] items-center justify-center overflow-hidden rounded-[2rem] bg-sage text-cream">
          <span aria-hidden="true" className="absolute h-80 w-80 rounded-full border border-cream/12" />
          <span aria-hidden="true" className="absolute h-56 w-56 rounded-full border border-cream/16" />
          <span aria-hidden="true" className="absolute h-32 w-32 rounded-full border border-pampas/35" />
          <div className="relative z-10 text-center">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-pampas font-serif text-3xl text-ink">M</span>
            <p className="mt-3 font-serif text-2xl">Lougheed</p>
            <p className="text-xs uppercase tracking-[.12em] text-cream/55">SkyTrain</p>
          </div>
          <span className="absolute left-[7%] top-[20%] rounded-full border border-cream/20 bg-cream/7 px-4 py-2 text-xs">Burnaby</span>
          <span className="absolute right-[5%] top-[27%] rounded-full border border-cream/20 bg-cream/7 px-4 py-2 text-xs">Coquitlam</span>
          <span className="absolute bottom-[16%] left-[13%] rounded-full border border-cream/20 bg-cream/7 px-4 py-2 text-xs">New Westminster</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {routes.map((route) => (
          <Card key={route.city} className="rounded-[1.3rem] border-beige bg-cream/55">
            <h3 className="font-serif text-xl text-ink">{route.city}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{route.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
