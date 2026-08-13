import Link from "next/link";
import { SectionHeading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Stars from "@/components/Stars";
import {
  faqs,
  projects,
  services,
  site,
  testimonials,
} from "@/lib/site";

const whyUs = [
  {
    icon: "🤝",
    title: "One trusted team",
    body: "Building and electrical work handled in-house — fewer contractors, less hassle and a single point of contact from start to finish.",
  },
  {
    icon: "🛡️",
    title: "Certified & insured",
    body: "Qualified to the latest standards with fully certified electrical work and complete insurance for total peace of mind.",
  },
  {
    icon: "📋",
    title: "Clear, honest quotes",
    body: "No jargon, no surprises. We give you a transparent quote up front so you always know exactly where you stand.",
  },
  {
    icon: "⭐",
    title: "A reputation earned",
    body: "Years of quality work across the valleys has built a name local people trust — and recommend to their friends and family.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-brand-950">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
        />

        <div className="container relative mx-auto grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
              <Stars rating={5} /> Trusted across South Wales
            </span>
            <h1 className="mt-6 text-4xl !text-white sm:text-5xl lg:text-6xl">
              Building &amp; electrical experts you can rely on
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              From full builds and extensions to rewires and installations,{" "}
              {site.name} delivers quality workmanship across Aberdare and the
              South Wales valleys — all under one trusted roof.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary">
                Get your free quote
              </Link>
              <Link href="/services" className="btn-outline-light">
                Explore our services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-accent-400">✓</span> Fully
                insured
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-accent-400">✓</span> Free
                no-obligation quotes
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-accent-400">✓</span> Local,
                family-run
              </span>
            </div>
          </div>

          {/* Hero card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <div className="rounded-2xl bg-white p-7">
                <p className="eyebrow">Request a callback</p>
                <h2 className="mt-2 text-2xl">Start your project today</h2>
                <p className="mt-2 text-ink-600">
                  Tell us what you need and we&apos;ll get straight back to you
                  with honest advice and a free quote.
                </p>
                <Link href="/quote" className="btn-primary mt-5 w-full">
                  Get a free quote
                </Link>
                <a
                  href={site.contact.phoneHref}
                  className="btn-ghost mt-3 w-full"
                >
                  📞 {site.contact.phone}
                </a>
                <div className="mt-6 border-t border-ink-100 pt-5">
                  <Stars rating={5} className="text-lg" />
                  <p className="mt-2 text-sm text-ink-600">
                    “Tidy, professional and a brilliant finish.” — a happy local
                    customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Services ───────────────────── */}
      <section className="section">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="What we do"
            title="Everything your project needs"
            subtitle="Because we cover both building and electrical work, we can take your project from first idea to final finish — with one team you can trust."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Why us ───────────────────── */}
      <section className="section bg-ink-50">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why choose CVA"
                title="A name South Wales trusts"
                subtitle="We've built our reputation the right way — through honest advice, reliable teams and workmanship we're proud to put our name to."
              />
              <div className="mt-8">
                <Link href="/about" className="btn-dark">
                  More about us
                </Link>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div key={item.title} className="card p-6">
                  <span className="text-3xl" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="mt-3 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Stats ───────────────────── */}
      <section className="section bg-brand-900">
        <div className="container mx-auto">
          <Stats light />
        </div>
      </section>

      {/* ───────────────────── Projects ───────────────────── */}
      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Recent work"
              title="Projects we're proud of"
              subtitle="A snapshot of the work we do across the valleys. Real photos of CVA's projects will feature here."
            />
            <Link
              href="/projects"
              className="btn-ghost shrink-0"
            >
              View all projects
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Testimonials ───────────────────── */}
      <section className="section bg-ink-50">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Reviews"
            title="What our customers say"
            subtitle="Placeholder reviews shown below — CVA's genuine 5-star reviews from Facebook and Google will appear here."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Service area ───────────────────── */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Where we work"
                title="Proudly serving the South Wales valleys"
                subtitle="Based in Aberdare, we cover the surrounding towns and valleys. Not sure if we reach you? Just ask — we're always happy to help."
              />
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {site.serviceArea.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-ink-700"
                  >
                    <span aria-hidden className="text-accent-500">
                      📍
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card overflow-hidden">
              {/* TODO: Replace with an embedded Google Map of the service area */}
              <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-700 to-brand-950">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative text-center text-white">
                  <span className="text-4xl" aria-hidden>
                    🗺️
                  </span>
                  <p className="mt-3 font-display text-xl font-bold">
                    Aberdare, South Wales
                  </p>
                  <p className="text-sm text-white/70">
                    Map embed coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── FAQ ───────────────────── */}
      <section className="section bg-ink-50">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
          <div className="mt-10 divide-y divide-ink-200 overflow-hidden rounded-2xl border border-ink-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-brand-900 marker:content-none hover:bg-brand-50">
                  {faq.q}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-ink-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
