import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import Stars from "@/components/Stars";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote from CVA Building and Electrical. Tell us about your project and we'll get straight back to you with honest advice.",
};

const reassurance = [
  {
    icon: "✅",
    title: "Free & no-obligation",
    body: "Every quote is completely free with no pressure to go ahead.",
  },
  {
    icon: "⚡",
    title: "Fast response",
    body: "We aim to get back to you quickly — often the same day.",
  },
  {
    icon: "🛡️",
    title: "NAPIT approved",
    body: "Fully qualified, certified and insured work you can trust.",
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote"
        title="Get your free, no-obligation quote"
        subtitle="Tell us a little about your project and we'll get back to you with honest advice and a clear price."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get a quote" }]}
      />

      <section className="section">
        <div className="container mx-auto grid gap-12 lg:grid-cols-5">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {reassurance.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-xl"
                  >
                    {r.icon}
                  </span>
                  <div>
                    <h3 className="text-lg">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-brand-900 p-7 text-white">
              <Stars rating={5} className="text-lg" />
              <p className="mt-3 text-white/90">
                “The work was completed to a high standard.”
              </p>
              <p className="mt-2 text-sm text-white/60">
                — a happy CVA customer, Aberdare
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-7">
              <h3 className="text-lg">Prefer to call?</h3>
              <p className="mt-1 text-sm text-ink-600">
                We&apos;re happy to chat through your ideas over the phone.
              </p>
              <a href={site.contact.phoneHref} className="btn-dark mt-4 w-full">
                📞 Office {site.contact.phone}
              </a>
              <a
                href={site.contact.mobileHref}
                className="btn-ghost mt-3 w-full"
              >
                📱 Mobile {site.contact.mobile}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <LeadForm variant="quote" />
          </div>
        </div>
      </section>
    </>
  );
}
