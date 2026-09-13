import { Container } from "@/components/ui/Container";
import { BotanicalVine } from "@/components/ui/BotanicalVine";
export function BookingHero() {
  return (
    <div className="relative overflow-hidden bg-sage py-14 text-cream sm:py-20">
      <BotanicalVine className="absolute -right-10 -top-28 h-[34rem] rotate-12 text-cream/10" />
      <Container className="relative">
        <div className="max-w-4xl">
          <p className="eyebrow text-pampas">Private studio · Lougheed</p>
          <h1 className="mt-5 text-[clamp(3.2rem,9vw,7rem)] leading-[.88] tracking-[-.05em] text-cream">
            Your lash appointment, <span className="italic text-pampas">thoughtfully booked.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-cream/72 sm:text-lg">
            Confirm that white LED service is suitable for you, choose an
            available time, then secure it with your e-Transfer deposit. Your
            exact studio address is shared after confirmation.
          </p>

          <a href="#booking-flow" className="mt-8 inline-flex items-center gap-3 rounded-full bg-pampas px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
            Start eligibility check <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
