import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoxtailDivider } from "@/components/ui/FoxtailDivider";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <div className="relative overflow-hidden bg-sage py-16 text-cream sm:py-24">
      <span aria-hidden="true" className="absolute -left-32 top-10 h-96 w-96 rounded-full border border-cream/10" />
      <span aria-hidden="true" className="absolute -right-20 -top-40 h-[32rem] w-[32rem] rounded-full border border-pampas/15" />
      <Container>
        <Reveal>
          <FoxtailDivider className="text-pampas/55" />

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="eyebrow text-pampas">Your next favourite ritual</p>
            <h2 className="mt-4 text-[clamp(3rem,8vw,6.5rem)] leading-[.9] tracking-[-.05em] text-cream">
              Ready to meet your <span className="italic text-pampas">Mainne</span> look?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-cream/68">
              One client, one custom map, one calm appointment. Start with the
              eligibility check and choose the style closest to your vision.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/book/" className="bg-pampas text-ink hover:bg-cream">Book your appointment</Button>
              <Button href="/about/" variant="secondary" className="border-cream/30 bg-transparent text-cream hover:bg-cream/10">
                Meet your lash artist
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
