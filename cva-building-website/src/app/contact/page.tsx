import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CVA Building and Electrical in Aberdare. Call the office on 01685 877233 or mobile 07789 547690, or send us a message for a free quote.",
};

export default function ContactPage() {
  const details = [
    {
      icon: "📞",
      label: "Office",
      value: site.contact.phone,
      href: site.contact.phoneHref,
    },
    {
      icon: "📱",
      label: "Mobile",
      value: site.contact.mobile,
      href: site.contact.mobileHref,
    },
    {
      icon: "✉️",
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: "📍",
      label: "Based in",
      value: `${site.contact.address.city}, ${site.contact.address.region}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your project"
        subtitle="Have a question or ready for a free quote? Call us, or drop us a message and we'll get straight back to you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container mx-auto grid gap-12 lg:grid-cols-5">
          {/* Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl">Contact details</h2>
            <p className="mt-2 text-ink-600">
              We&apos;re a local, family-run team — you&apos;ll always speak to
              someone who knows the job.
            </p>

            <div className="mt-8 space-y-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-xl border border-ink-100 bg-white p-4"
                >
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-xl"
                  >
                    {d.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-500">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-lg font-semibold text-brand-900 hover:text-brand-700"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-brand-900">
                        {d.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="mt-8 rounded-xl bg-ink-50 p-6">
              <h3 className="text-lg">Opening hours</h3>
              <dl className="mt-4 space-y-2 text-sm">
                {site.contact.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-ink-200 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-ink-600">{h.day}</dt>
                    <dd className="font-medium text-brand-900">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-ink-400">
                (Indicative hours — TODO: confirm with CVA.)
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-ink-600">
              Fill in the form and we&apos;ll be in touch as soon as we can.
            </p>
            <div className="mt-6">
              <LeadForm variant="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
