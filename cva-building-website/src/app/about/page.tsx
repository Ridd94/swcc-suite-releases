import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SectionHeading } from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CVA Building and Electrical — a trusted, family-run building and electrical company based in Aberdare, serving the South Wales valleys.",
};

const values = [
  {
    icon: "🎯",
    title: "Quality first",
    body: "We don't cut corners. Every job is done properly, to a standard we'd be happy with in our own homes.",
  },
  {
    icon: "💬",
    title: "Honest advice",
    body: "Straight-talking, jargon-free guidance so you can make the right decisions with confidence.",
  },
  {
    icon: "⏱️",
    title: "Reliable & tidy",
    body: "We turn up when we say we will, keep you informed, and leave your property clean and tidy.",
  },
  {
    icon: "❤️",
    title: "Local & personal",
    body: "We live and work here. Our reputation in the community matters, so every customer matters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building trust across South Wales"
        subtitle={`${site.legalName} is a family-run building and electrical company rooted in Aberdare and the surrounding valleys.`}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="prose-basic">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A local company built on reputation"
            />
            <div className="mt-6 space-y-4 text-ink-600">
              {/* TODO: Replace with CVA's real history and story from the team. */}
              <p>
                CVA Building and Electrical was founded on a simple idea: that
                homeowners and businesses across the valleys deserve tradespeople
                they can genuinely trust — skilled, reliable and straight with
                you from the first conversation.
              </p>
              <p>
                What sets us apart is that we bring building and electrical work
                together under one roof. That means your extension, renovation or
                installation is handled by one coordinated team, rather than a
                string of separate contractors — saving you time, money and
                stress.
              </p>
              <p>
                Over the years we&apos;ve grown largely through word of mouth,
                with customers recommending us to friends, family and neighbours.
                That trust is something we never take for granted, and it&apos;s
                why we put the same care into every job, large or small.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">
                Get a free quote
              </Link>
              <Link href="/projects" className="btn-ghost">
                See our work
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-ink-50 p-8">
            <h3 className="text-xl">Why customers choose us</h3>
            <ul className="mt-5 space-y-4">
              {[
                "Building & electrical under one trusted team",
                "Fully certified and insured work",
                "Clear, honest, no-obligation quotes",
                "Reliable teams who respect your home",
                "Years of experience across the valleys",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-ink-50">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
            subtitle="The principles behind every project we take on."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <span className="text-3xl" aria-hidden>
                  {v.icon}
                </span>
                <h3 className="mt-4 text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-brand-900 px-6 py-14 sm:px-12">
            <Stats light />
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section pt-0">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Qualified & compliant"
            title="Accreditations & standards"
            subtitle="We work to recognised industry standards so you can be confident the job is done safely and correctly."
          />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {site.accreditations.map((a) => (
              <span
                key={a}
                className="rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-brand-800 shadow-sm"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-400">
            (Placeholder list — to be confirmed with CVA and updated with real
            accreditation logos.)
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
