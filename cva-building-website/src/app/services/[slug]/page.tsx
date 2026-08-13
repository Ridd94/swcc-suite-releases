import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SectionHeading } from "@/components/Section";
import CTA from "@/components/CTA";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`${service.icon} Service`}
        title={service.title}
        subtitle={service.short}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={`Professional ${service.title.toLowerCase()}`}
            />
            <div className="prose-basic mt-6">
              <p>{service.intro}</p>
              <p>
                Whatever the size of the job, you&apos;ll get the same reliable
                service, honest advice and quality finish that {site.shortName}{" "}
                is known for across the South Wales valleys.
              </p>
            </div>

            <h3 className="mt-10 text-xl">What&apos;s included</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-sm text-brand-950"
                  >
                    ✓
                  </span>
                  <span className="text-ink-700">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">
                Get a quote for {service.title.toLowerCase()}
              </Link>
              <Link href="/projects" className="btn-ghost">
                See related projects
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="card p-7">
                <h3 className="text-lg">Talk to us today</h3>
                <p className="mt-2 text-sm text-ink-600">
                  Ready to get started, or just have a question? We&apos;re happy
                  to help.
                </p>
                <a
                  href={site.contact.phoneHref}
                  className="btn-dark mt-4 w-full"
                >
                  📞 {site.contact.phone}
                </a>
                <Link href="/quote" className="btn-primary mt-3 w-full">
                  Request a free quote
                </Link>
              </div>

              <div className="card p-7">
                <h3 className="text-lg">Other services</h3>
                <ul className="mt-4 space-y-1">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-900"
                      >
                        <span aria-hidden>{o.icon}</span>
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
