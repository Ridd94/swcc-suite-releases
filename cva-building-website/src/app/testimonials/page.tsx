import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import Stars from "@/components/Stars";
import CTA from "@/components/CTA";
import { testimonials, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "See what customers across South Wales say about CVA Building and Electrical — trusted, reliable building and electrical work completed to a high standard.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our customers say"
        subtitle="Our reputation is built on happy customers across the valleys. Here's a little of what they have to say."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />

      {/* Rating banner */}
      <section className="border-b border-ink-100 bg-ink-50 py-10">
        <div className="container mx-auto flex flex-col items-center gap-3 text-center">
          <Stars rating={5} className="text-2xl" />
          <p className="text-lg font-semibold text-brand-900">
            Rated 5 stars by local customers
          </p>
          <p className="max-w-xl text-sm text-ink-500">
            The review below is genuine, taken from CVA&apos;s Facebook page.
            The others are placeholders and will be replaced with more real
            reviews from Facebook and Google.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author + t.quote.slice(0, 12)} testimonial={t} />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-brand-900 p-8 text-center">
            <h2 className="text-2xl !text-white">Worked with us recently?</h2>
            <p className="mt-2 text-white/80">
              We&apos;d love to hear your feedback — and a review really helps
              other local people find us.
            </p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              Leave a review on Facebook
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
