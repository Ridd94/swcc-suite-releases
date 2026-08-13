"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { primaryNav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40">
      {/* Top utility bar */}
      <div className="hidden bg-brand-900 text-white/90 md:block">
        <div className="container mx-auto flex h-10 items-center justify-between text-sm">
          <p className="flex items-center gap-2">
            <span aria-hidden>📍</span> Aberdare &amp; the South Wales valleys
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-2 font-medium hover:text-accent-300"
            >
              <span aria-hidden>📞</span> Office {site.contact.phone}
            </a>
            <a
              href={site.contact.mobileHref}
              className="flex items-center gap-2 font-medium hover:text-accent-300"
            >
              <span aria-hidden>📱</span> Mobile {site.contact.mobile}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-all ${
          scrolled
            ? "border-ink-100 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "text-accent-600"
                    : "text-ink-700 hover:bg-brand-50 hover:text-brand-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/quote" className="btn-primary hidden sm:inline-flex">
              Get a free quote
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-ink-200 text-brand-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-ink-100 bg-white lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="container mx-auto flex flex-col py-4"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 text-base font-semibold ${
                    isActive(item.href)
                      ? "bg-brand-50 text-accent-600"
                      : "text-ink-800 hover:bg-brand-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/quote" className="btn-primary mt-3">
                Get a free quote
              </Link>
              <a
                href={site.contact.phoneHref}
                className="btn-ghost mt-2"
              >
                📞 Call {site.contact.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
