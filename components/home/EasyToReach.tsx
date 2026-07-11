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
      <SectionHeading id="easy-to-reach">Easy to reach</SectionHeading>

      <p className="mt-4 max-w-prose text-muted">
        The studio is steps from Lougheed SkyTrain station, which happens to be
        one of the better-connected points in the region. If you are coming from
        anywhere along the Millennium or Expo lines, you can get here without a
        car — and without circling a parking lot afterwards.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {routes.map((route) => (
          <Card key={route.city}>
            <h3 className="font-serif text-lg text-ink">{route.city}</h3>
            <p className="mt-2 text-sm text-muted">{route.detail}</p>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        The studio is inside a private home, so the exact address is shared once
        your appointment is confirmed.
      </p>
    </Section>
  );
}
