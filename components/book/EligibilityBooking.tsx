"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  DEPOSIT_AMOUNT,
  DEPOSIT_DEADLINE_HOURS,
  EMAIL,
  GOOGLE_BOOKING_EMBED_URL,
  GOOGLE_BOOKING_URL,
  OPENING_HOURS,
} from "@/data/business";

const confirmations = [
  "I am not pregnant and I am not breastfeeding.",
  "I do not have an active eye infection, inflammation, open wound, sunburn or irritated skin around the eyes.",
  "I have not had eye-area surgery in the last 3 months or IPL/laser treatment near the eyes in the last 21 days.",
  "I do not have a known light-sensitive condition, light-triggered epilepsy, lupus, albinism or photosensitive eczema.",
  "I am not taking medication or receiving treatment that warns against LED/UV light exposure or causes photosensitivity.",
  "I have no known allergy to cyanoacrylate/acrylate lash adhesive and no history of a serious reaction to lash extensions.",
];

export function EligibilityBooking() {
  const [accepted, setAccepted] = useState<boolean[]>(() => confirmations.map(() => false));
  const [consent, setConsent] = useState(false);
  const [ready, setReady] = useState(false);
  const complete = accepted.every(Boolean) && consent;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (complete) setReady(true);
  }

  return (
    <section id="booking-flow" aria-labelledby="eligibility-title" className="bg-bg py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="eyebrow">Step 1 of 2</p>
          <h2 id="eligibility-title" className="mt-4 text-4xl leading-[.98] tracking-[-.035em] text-ink sm:text-5xl">
            A quick LED eligibility check.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted sm:text-base">
            The answers stay in your browser and are not sent or stored by this
            page. We only need you to confirm that every statement is true
            before opening the calendar.
          </p>
          <div className="mt-7 rounded-[1.4rem] bg-sage p-6 text-cream">
            <p className="font-serif text-2xl">Before you choose a time</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/72">
              <li>{OPENING_HOURS.days}, {OPENING_HOURS.opens}–{OPENING_HOURS.closes}</li>
              <li>Full set or refill · select the closest service</li>
              <li>Previous lash removal can be added when booking</li>
              <li>CA${DEPOSIT_AMOUNT} e-Transfer due within {DEPOSIT_DEADLINE_HOURS} hours</li>
            </ul>
          </div>
        </div>

        {!ready ? (
          <form onSubmit={submit} className="rounded-[1.7rem] border border-beige bg-cream p-5 sm:p-8">
            <fieldset>
              <legend className="font-serif text-2xl text-ink">I confirm that:</legend>
              <div className="mt-5 space-y-3">
                {confirmations.map((label, index) => (
                  <label key={label} className="flex cursor-pointer gap-3 rounded-xl border border-beige bg-bg p-4 text-sm leading-5 text-ink transition hover:border-olive/45">
                    <input
                      type="checkbox"
                      checked={accepted[index]}
                      onChange={(event) => {
                        const next = [...accepted];
                        next[index] = event.target.checked;
                        setAccepted(next);
                      }}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-olive"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-5 flex cursor-pointer gap-3 rounded-xl bg-pampas/45 p-4 text-sm leading-6 text-ink">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 accent-olive"
              />
              <span>
                I understand that Beam Light uses controlled 405 nm light and
                cyanoacrylate-based professional lash adhesive. Irritation or an
                allergic reaction remains possible. I agree to keep my eyes
                closed, wear the provided protection and immediately report
                discomfort. I confirm that the information above is accurate.
              </span>
            </label>

            <p className="mt-5 text-xs leading-5 text-muted">
              If any statement is not true—or you are unsure—please do not book
              an LED appointment. Ask your physician or pharmacist whether this
              light and adhesive service is appropriate for you first.
            </p>

            <button
              type="submit"
              disabled={!complete}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-olive px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-olive-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue to available times
            </button>
          </form>
        ) : (
          <div className="rounded-[1.7rem] border border-beige bg-cream p-6 sm:p-8">
            <p className="eyebrow">Step 2 of 2</p>
            <h3 className="mt-4 font-serif text-4xl leading-none text-ink">Choose your appointment.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Google will collect your name, email and phone number, then send
              the standard booking confirmation to you and Mainne.
            </p>

            {GOOGLE_BOOKING_EMBED_URL ? (
              <iframe
                src={GOOGLE_BOOKING_EMBED_URL}
                title="Mainne Lash Studio appointment calendar"
                className="mt-6 min-h-[660px] w-full rounded-xl border-0 bg-white"
              />
            ) : GOOGLE_BOOKING_URL ? (
              <div className="mt-7">
                <Button href={GOOGLE_BOOKING_URL}>Open appointment calendar</Button>
              </div>
            ) : (
              <div className="mt-7 rounded-xl border border-dashed border-olive/35 bg-bg p-5">
                <p className="font-medium text-ink">Calendar connection pending</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  The page is ready for Mainne&apos;s Google Appointment Schedule
                  link. While the calendar is being configured, request the
                  first available opening by email.
                </p>
                <div className="mt-5">
                  <Button href={`mailto:${EMAIL}?subject=Appointment request`}>Request an opening</Button>
                </div>
              </div>
            )}

            <div className="mt-6 border-t border-beige pt-5 text-sm leading-6 text-muted">
              <p>
                Your time is reserved pending a CA${DEPOSIT_AMOUNT} Interac
                e-Transfer. Send it within {DEPOSIT_DEADLINE_HOURS} hours using
                the transfer instructions in your booking details, and include
                the booking name in the message.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
