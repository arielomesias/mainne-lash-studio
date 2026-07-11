import Link from "next/link";

import { Container } from "@/components/ui/Container";
import {
  BUSINESS_NAME,
  EMAIL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_SMS_HREF,
} from "@/data/business";
import { SERVICES } from "@/data/pricing";

const lashSets = SERVICES.map((service) => ({
  href: service.href,
  // Anchor text descriptivo con keyword (docs/seo-strategy.md §3).
  label: service.name,
}));

const areas = [
  { href: "/", label: "Eyelash extensions in Burnaby" },
  { href: "/eyelash-extensions-new-westminster/", label: "Eyelash extensions in New Westminster" },
  { href: "/eyelash-extensions-coquitlam/", label: "Eyelash extensions in Coquitlam" },
];

const studio = [
  { href: "/about/", label: "About Mainne" },
  { href: "/book/", label: "Book an appointment" },
  { href: "/blog/", label: "Lash care guides" },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-serif text-base text-ink">{heading}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            {/* py-1 + inline-block lleva el objetivo tactil a >=24px (WCAG 2.5.8). */}
            <Link
              href={link.href}
              className="inline-block py-1 text-sm text-muted underline-offset-4 hover:text-olive-dark hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  // El telefono enlaza con sms:, nunca con tel: — Mainne solo acepta mensajes
  // de texto. INSTAGRAM_URL sigue null y se omite en lugar de renderizar un
  // placeholder visible.
  const contact = [
    { href: PHONE_SMS_HREF, label: `${PHONE} (text only)` },
    { href: `mailto:${EMAIL}`, label: EMAIL },
    INSTAGRAM_URL && { href: INSTAGRAM_URL, label: "Instagram" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <footer className="border-t border-beige bg-cream">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <LinkColumn heading="Lash sets" links={lashSets} />
          <LinkColumn heading="Areas served" links={areas} />
          <LinkColumn heading="Studio" links={studio} />
        </div>

        {contact.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {contact.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block py-1 text-sm text-muted underline-offset-4 hover:text-olive-dark hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-10 border-t border-beige pt-6 text-sm text-muted">
          {BUSINESS_NAME} — private home studio in Burnaby, BC, near Lougheed
          SkyTrain. Serving Burnaby, New Westminster and Coquitlam by
          appointment. Exact address shared once your booking is confirmed.
        </p>
      </Container>
    </footer>
  );
}
