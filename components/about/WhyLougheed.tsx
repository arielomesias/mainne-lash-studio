import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

/*
 * Angulo de acceso DISTINTO al de components/home/EasyToReach.tsx, que enumera
 * las rutas desde cada ciudad. Aqui la historia es por que se eligio esta
 * ubicacion. Repetir el texto de la Home seria contenido duplicado.
 */
export function WhyLougheed() {
  return (
    <Section tone="cream" labelledBy="why-lougheed">
      <div className="max-w-prose">
        <SectionHeading id="why-lougheed">
          Why the studio is where it is
        </SectionHeading>

        <div className="mt-6 space-y-4 text-muted">
          <p>
            A home studio only works if people can actually get to it. Plenty of
            them are tucked into cul-de-sacs where you need a car, twenty
            minutes of patience and a parking spot that does not exist.
          </p>
          <p>
            This one sits a short walk from Lougheed SkyTrain, on the line
            between Burnaby and Coquitlam. That was deliberate. It is the point
            where the Millennium and Expo lines put Burnaby, Coquitlam and New
            Westminster all within a straightforward ride, so a two-hour
            appointment does not turn into a four-hour errand.
          </p>
          <p>
            The exact address goes out once your appointment is confirmed. It is
            a home, so it is not something I publish.
          </p>
        </div>

        <div className="mt-8">
          <Button href="/book/">Book your appointment</Button>
        </div>
      </div>
    </Section>
  );
}
