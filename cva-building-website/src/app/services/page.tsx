import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { SectionHeading } from "@/components/Section";
import CTA from "@/components/CTA";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Building, electrical, extensions, renovations, kitchens and bathrooms — CVA Building and Electrical covers your whole project across South Wales.",
};

const process = [
  {
    step: "01",
    title: "Get in touch",
    body: "Tell us about your project by phone or through our quote form. We'll arrange a convenient time to visit.",
  },
  {
    step: "02",
    title: "Free quote & advice",
    body: "We assess the work, talk through your options honestly and provide a clear, no-obligation quote.",
  },
  {
    step: "03",
    title: "The work begins",
    body: "Our coordinated team carries out the work to a high standard, keeping you informed at every stage.",
  },
  {
    step: "04",
    title: "Finished & certified",
    body: "We finish tidily, hand over any certificates required, and make sure you're delighted with the result.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="One team for your whole project"
        subtitle="From the foundations to the final socket, we cover the building and electrical work most companies split between separate contractors."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-ink-50">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="How it works"
            title="A simple, stress-free process"
            subtitle="We keep things clear and straightforward from the first call to the finishing touches."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="relative card p-7">
                <span className="font-display text-4xl font-extrabold text-accent-500/70">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
