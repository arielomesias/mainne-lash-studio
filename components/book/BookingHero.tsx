import { EditorialHero } from "@/components/ui/EditorialHero";

export function BookingHero() {
  return (
    <EditorialHero
      eyebrow="Private studio · near Lougheed"
      title={
        <>
          Book Your <span className="italic text-olive">Appointment</span>
        </>
      }
      description={
        <p>
          Confirm that white LED service is suitable for you, choose an
          available Google Calendar time, then secure it with your e-Transfer
          deposit. Your exact studio address is shared after confirmation.
        </p>
      }
      imageSrc="/images/results/v2/beam-application-enhanced.webp"
      imageAlt="White LED eyelash extension application at Mainne Lash Studio"
      imagePosition="object-[52%_44%]"
      badge="White LED application · one client at a time"
      ctaLabel="Start eligibility check"
      ctaHref="#booking-flow"
      secondaryLabel="Review appointment policies"
      secondaryHref="#policies"
      imageLeft
    />
  );
}
