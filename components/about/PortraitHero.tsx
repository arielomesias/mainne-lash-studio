import { EditorialHero } from "@/components/ui/EditorialHero";

export function PortraitHero() {
  return (
    <EditorialHero
      eyebrow="The hands behind Mainne"
      title={
        <>
          Meet your <span className="italic text-olive">lash artist.</span>
        </>
      }
      description={
        <p>
          I&rsquo;m Mainne. I focus on eyelash extensions and work with one
          client at a time from a small private studio in Burnaby. Here is how
          I approach every map, placement and finished set.
        </p>
      }
      imageSrc="/images/results/v2/beam-application-enhanced.webp"
      imageAlt="Mainne applying eyelash extensions with the Beam Light white LED system"
      imagePosition="object-[52%_45%]"
      badge="Real application footage · professionally enhanced"
      secondaryLabel="See the lash menu"
      secondaryHref="/#lash-menu"
      imageLeft
    />
  );
}
