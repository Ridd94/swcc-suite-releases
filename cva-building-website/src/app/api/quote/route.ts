import { NextResponse } from "next/server";

/**
 * Lead / quote submission endpoint.
 *
 * ⚠️  NOT YET WIRED TO EMAIL. Right now this validates the submission and logs
 *     it server-side so the form works end-to-end. To actually receive leads,
 *     connect an email/notification service. Easiest options:
 *
 *     1. Resend (https://resend.com) — add RESEND_API_KEY as a Vercel env var,
 *        then send an email inside the marked block below.
 *     2. A form service like Formspree / Web3Forms — point the fetch() in
 *        LeadForm.tsx at their endpoint instead of this route.
 *
 * Until then, submissions appear in the Vercel deployment logs.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Honeypot — silently accept and drop
    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // ── TODO: send the notification email here ──────────────────────────────
    // e.g. with Resend:
    //   await resend.emails.send({
    //     from: "CVA Website <leads@cvabuilding.co.uk>",
    //     to: "info@cvabuilding.co.uk",
    //     subject: `New ${body.variant} enquiry from ${name}`,
    //     text: JSON.stringify(body, null, 2),
    //   });
    // ────────────────────────────────────────────────────────────────────────

    console.log("New CVA enquiry:", {
      variant: body.variant,
      name,
      phone,
      email: body.email,
      service: body.service,
      postcode: body.postcode,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
