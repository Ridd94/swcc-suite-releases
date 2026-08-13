import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA({
  title = "Ready to start your project?",
  subtitle = "Get a free, no-obligation quote from a team you can trust. We'll talk through your ideas and give you honest, clear advice.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl !text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-white/80">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary w-full sm:w-auto">
                Get a free quote
              </Link>
              <a
                href={site.contact.phoneHref}
                className="btn-outline-light w-full sm:w-auto"
              >
                📞 Call {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
