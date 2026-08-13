import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import { projects, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "A selection of recent work from CVA Building and Electrical — printed concrete driveways, extensions, spray rendering, bathrooms, electrical upgrades and more across South Wales.",
};

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects we're proud of"
        subtitle="A snapshot of recent work across the South Wales valleys. Real photos from CVA's portfolio will be added here."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="section">
        <div className="container mx-auto">
          {/* Category chips (visual only for now) */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
              All work
            </span>
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-600"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-brand-200 bg-brand-50 p-6 text-center">
            <p className="text-sm text-ink-600">
              📸 <strong className="text-brand-900">More coming soon.</strong>{" "}
              CVA post new jobs regularly — see the latest work on{" "}
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline"
              >
                their Facebook page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Like what you see?"
        subtitle="Let's talk about your project. Get a free, no-obligation quote today."
      />
    </>
  );
}
