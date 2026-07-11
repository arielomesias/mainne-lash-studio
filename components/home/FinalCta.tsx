import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <div className="bg-bg py-16 sm:py-24">
      <Container>
        <Reveal>
          <FoxtailDivider className="text-olive" />

          <div className="mx-auto mt-10 max-w-xl text-center">
          <h2 className="text-2xl text-ink sm:text-3xl">
            Ready for your lashes?
          </h2>
          <p className="mt-4 text-muted">
            Appointments run one at a time, in a quiet room, with no one waiting
            on the chair after you. Pick your set and send a message.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/book/">Book your appointment</Button>
            <Button href="/about/" variant="secondary">
              Meet your lash artist
            </Button>
          </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
