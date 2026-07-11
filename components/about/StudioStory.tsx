import { Section, SectionHeading } from "@/components/ui/Section";

export function StudioStory() {
  return (
    <Section tone="cream" labelledBy="studio-story">
      <div className="max-w-prose">
        <SectionHeading id="studio-story">
          Why I work from home
        </SectionHeading>

        <div className="mt-6 space-y-4 text-muted">
          <p>
            The honest answer is that it started as the practical option, and
            then I realised it was the better one. A room in my home meant I
            could set my own pace instead of fitting a client into a
            forty-five-minute slot because the chair was needed at four.
          </p>
          <p>
            Lash work is quiet, close, repetitive work. You are lying with your
            eyes closed for two hours while someone places extensions on
            individual lashes a fraction of a millimetre from your lid. It
            should not happen next to a blow dryer and a conversation about
            somebody else&rsquo;s wedding.
          </p>
          <p>
            So the studio is a small, warm room with one bed in it. There is no
            waiting area because there is nobody waiting. If your set needs an
            extra twenty minutes because your natural lashes are finer than we
            expected, it gets the extra twenty minutes.
          </p>
          <p>
            It is not a salon, and I do not pretend it is one. It is a private
            room where one person does careful work on one other person.
          </p>
        </div>
      </div>
    </Section>
  );
}
