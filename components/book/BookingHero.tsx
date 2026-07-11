import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EMAIL, PHONE, PHONE_SMS_HREF } from "@/data/business";

/**
 * No hay reservas online. La clienta escribe primero y la cita se acuerda por
 * mensaje (docs/business-facts.md).
 *
 * El CTA primario usa `sms:`, nunca `tel:` — Mainne no acepta llamadas, y un
 * `tel:` en movil abre el marcador.
 */
export function BookingHero() {
  return (
    <div className="bg-bg pb-12 pt-12 sm:pb-16 sm:pt-16">
      <Container>
        <div className="max-w-prose">
          <h1 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Book Your Appointment
          </h1>

          <p className="mt-6 text-base text-muted sm:text-lg">
            There is no online booking here — you text or email me, we settle on
            the set and a time, and I confirm. Appointments run one at a time in
            a private home studio near Lougheed SkyTrain, so tell me roughly
            when suits you and we will find a slot. Full prices are below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={PHONE_SMS_HREF}>Text me to book</Button>
            <Button href={`mailto:${EMAIL}`} variant="secondary">
              Email instead
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            {/* El aviso de "solo texto" va junto al numero, no enterrado en el
                footer: es donde la clienta esta a punto de actuar. */}
            <span className="text-ink">{PHONE}</span> &mdash; text message only,
            please, no calls. Or write to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="inline-block py-1 text-olive underline underline-offset-4 hover:text-olive-dark"
            >
              {EMAIL}
            </a>
            .
          </p>

          <p className="mt-4 text-sm text-muted">
            Payment is by Interac e-Transfer. I send the transfer details along
            with the studio address once your appointment is confirmed.
          </p>
        </div>
      </Container>
    </div>
  );
}
