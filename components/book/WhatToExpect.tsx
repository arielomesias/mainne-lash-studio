import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

const notes = [
  {
    title: "Getting here",
    body: "The studio is a short walk from Lougheed SkyTrain, on the Burnaby–Coquitlam boundary. It is a private home, so the exact address is sent to you once your appointment is confirmed.",
  },
  {
    title: "Before you come",
    body: "Arrive with clean lashes and no eye makeup — mascara residue keeps the adhesive from bonding. Skip caffeine if you can; it makes eyes flutter, which slows everything down.",
  },
  {
    title: "How long it takes",
    body: "Anywhere from forty-five minutes for a fill to three hours for a mega volume full set. The duration next to each price is realistic, not optimistic.",
  },
];

export function WhatToExpect() {
  return (
    <Section labelledBy="what-to-expect">
      <SectionHeading id="what-to-expect">Before your appointment</SectionHeading>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.title}>
            <h3 className="font-serif text-lg text-ink">{note.title}</h3>
            <p className="mt-2 text-sm text-muted">{note.body}</p>
          </Card>
        ))}
      </div>

      <p className="mt-8 max-w-prose text-sm text-muted">
        Not sure which set you want? Read about{" "}
        <Link
          href="/classic-lash-extensions/"
          className="text-olive underline underline-offset-4 hover:text-olive-dark"
        >
          classic lash extensions
        </Link>{" "}
        first — it is the most natural of the three, and the easiest place to
        start.
      </p>
    </Section>
  );
}
