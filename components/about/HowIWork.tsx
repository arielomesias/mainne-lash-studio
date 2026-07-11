import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

/*
 * Descripcion del oficio, no de credenciales. Todo lo que se afirma aqui es
 * sobre el metodo de aplicacion — verificable y seguro de publicar. Nada de
 * certificaciones (ver components/about/Credentials.tsx) ni de afirmaciones de
 * seguridad ("100% safe") que no podemos respaldar.
 */
const principles = [
  {
    title: "One extension, one lash",
    body: "Every natural lash gets isolated before anything touches it. If two lashes are glued together at the base, the shorter one cannot shed on its own schedule, and that is where damage starts.",
  },
  {
    title: "Weight before drama",
    body: "The length and thickness of an extension are chosen against what your own lash can carry. A lash that is too heavy for its base will not last, and it takes the natural lash with it when it goes.",
  },
  {
    title: "A set mapped to your eyes",
    body: "Curl and length get mapped across the lash line rather than applied uniformly. Where the longest lashes sit changes the shape of the eye — that is the part of the consultation worth slowing down for.",
  },
];

export function HowIWork() {
  return (
    <Section labelledBy="how-i-work">
      <SectionHeading id="how-i-work">How I work</SectionHeading>

      <p className="mt-4 max-w-prose text-muted">
        Most of what separates a set that lasts from one that does not happens
        before it looks like anything at all.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {principles.map((principle) => (
          <Card key={principle.title}>
            <h3 className="font-serif text-lg text-ink">{principle.title}</h3>
            <p className="mt-2 text-sm text-muted">{principle.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
