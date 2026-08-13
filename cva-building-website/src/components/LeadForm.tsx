"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({
  variant = "quote",
}: {
  variant?: "quote" | "contact";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill hidden fields; humans don't.
    if (data.company) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        "Sorry, something went wrong sending your message. Please call us instead and we'll sort it right away.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-2xl">Thank you — message received</h3>
        <p className="mt-2 text-ink-600">
          One of the team will get back to you as soon as possible. If it&apos;s
          urgent, feel free to give us a call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-accent-500/40";
  const labelClass = "mb-1.5 block text-sm font-semibold text-brand-900";

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Davies"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="07123 456789"
          />
        </div>
        <div className={variant === "quote" ? "" : "sm:col-span-2"}>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>

        {variant === "quote" && (
          <>
            <div>
              <label htmlFor="service" className={labelClass}>
                Service needed
              </label>
              <select id="service" name="service" className={inputClass}>
                <option value="">Please choose…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other / not sure">Other / not sure</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="postcode" className={labelClass}>
                Property postcode
              </label>
              <input
                id="postcode"
                name="postcode"
                className={inputClass}
                placeholder="CF44 …"
              />
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {variant === "quote"
              ? "Tell us about your project *"
              : "Your message *"}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputClass}
            placeholder={
              variant === "quote"
                ? "e.g. We're looking for a single-storey rear extension with a new kitchen…"
                : "How can we help?"
            }
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending…"
          : variant === "quote"
            ? "Request my free quote"
            : "Send message"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
