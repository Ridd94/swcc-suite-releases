import { Project } from "@/lib/site";

/**
 * Project card. Currently renders a coloured gradient placeholder in place of
 * a photo. TODO: swap the gradient <div> for an <Image> of the real project.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group overflow-hidden">
      <div
        className={`relative flex aspect-[4/3] items-end bg-gradient-to-br ${project.swatch}`}
      >
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-900">
          {project.category}
        </span>
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,.6) 0, transparent 40%)",
          }}
        />
        <span className="relative m-4 text-xs font-medium uppercase tracking-wider text-white/70">
          Photo coming soon
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-ink-500">
          <span aria-hidden>📍</span>
          {project.location}
        </div>
        <h3 className="mt-1 text-lg">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          {project.blurb}
        </p>
      </div>
    </article>
  );
}
