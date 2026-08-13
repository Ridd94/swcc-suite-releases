import Link from "next/link";
import { ReactNode } from "react";

/**
 * Inner-page hero banner with a subtle blueprint-style texture.
 * Used at the top of About, Services, Projects, etc.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* blueprint grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div className="container relative mx-auto py-16 sm:py-20 lg:py-24">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumb.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-accent-300">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{b.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && (
                    <span aria-hidden>/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="eyebrow text-accent-300">{eyebrow}</span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl !text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
