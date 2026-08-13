import Link from "next/link";
import Logo from "./Logo";
import { primaryNav, services, site } from "@/lib/site";

export default function Footer() {
  const year = 2026; // static to keep the page fully static; update annually

  return (
    <footer className="mt-auto bg-brand-950 text-ink-200">
      <div className="container mx-auto py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Trusted builders and electricians serving Aberdare and the wider
              South Wales valleys. Quality workmanship, fully certified.
            </p>
            <div className="mt-5 flex gap-3">
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-lg transition-colors hover:bg-accent-500 hover:text-brand-950"
                  aria-label="CVA on Facebook"
                >
                  f
                </a>
              )}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-300 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-ink-300 transition-colors hover:text-accent-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex gap-2">
                <span aria-hidden>📞</span>
                <a
                  href={site.contact.phoneHref}
                  className="hover:text-accent-300"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>✉️</span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-accent-300"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>📍</span>
                <span>
                  {site.contact.address.city}, {site.contact.address.region}
                </span>
              </li>
            </ul>
            <Link href="/quote" className="btn-primary mt-5">
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://swcc.support"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-300 hover:text-accent-300"
            >
              South Wales Custom Computers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
