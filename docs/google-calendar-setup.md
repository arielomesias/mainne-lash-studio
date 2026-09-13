# Google Calendar booking setup

The website is ready to receive the public Google Appointment Schedule URL in
`data/business.ts`. The calendar itself must first be created inside Mainne's
Google Workspace account (`info@mainnelashstudio.com`).

## Recommended appointment schedules

Create separate schedules so Google blocks the correct amount of calendar time:

1. **Full Lash Set** — 3 hours
2. **Full Lash Set + Previous Lash Removal** — 3 hours 30 minutes
3. **Lash Refill** — use 3 hours temporarily, then adjust once Mainne confirms
   the real refill timing

Availability for each schedule: Monday–Friday, 9:30 AM–4:00 PM, Vancouver time.
Add a 15-minute buffer after appointments and cap bookings at two per day. The
removal schedule may naturally allow only one booking per day.

Do not publish future brow services until Mainne is actually offering them.

## Google booking-form fields

Google already asks for the client's name and email. Add these required custom
fields:

- Mobile phone number
- Requested lash style (short answer; “Not sure” is acceptable)
- “I completed the LED eligibility check on mainnelashstudio.com and all
  statements were true.” (required checkbox)

Do not ask the client to type a diagnosis, condition or medication name. The
site only records an eligibility confirmation; it does not need medical history.

## Description shown in Google emails

Use this text in each schedule description:

> Your appointment time is reserved pending a CA$50 Interac e-Transfer deposit.
> Please send the deposit within 12 hours using the transfer instructions below
> and include the name used for this booking. The deposit is applied to your
> appointment balance. Your exact studio address is shared after the appointment
> and deposit are confirmed.
>
> You may reschedule once with at least 48 hours' notice. Changes inside 48 hours
> and no-shows forfeit the deposit and require a new deposit to book again.
> Arrivals more than 15 minutes late may need to be shortened or cancelled.
>
> Come with clean lashes and no eye makeup. LED service is not offered during
> pregnancy or breastfeeding. Contact Mainne before the appointment if your
> health, medication or eye-area condition changes after booking.

Append Mainne's actual e-Transfer recipient instructions before publishing.
Those details have not been assumed in the website code.

## Connect the site

Copy the public booking-page link from Google Calendar. If Google provides an
embed URL, set both fields; otherwise only the normal public link is needed:

```ts
export const GOOGLE_BOOKING_URL = "https://calendar.google.com/calendar/appointments/...";
export const GOOGLE_BOOKING_EMBED_URL = "https://calendar.google.com/calendar/appointments/schedules/...";
```

The website will automatically replace the temporary “Calendar connection
pending” card with the live schedule. Google sends its standard confirmation
and cancellation emails to both the client and `info@mainnelashstudio.com`.
