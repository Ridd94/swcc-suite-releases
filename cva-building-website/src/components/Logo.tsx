import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Text-based logo mark (placeholder).
 * TODO: When CVA's real logo file is available, replace the SVG badge below
 * with an <Image> of the logo, or drop the file into /public and reference it.
 */
export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-brand-900";
  const subColor = variant === "light" ? "text-white/70" : "text-ink-500";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-800 shadow-card transition-transform group-hover:scale-105">
        <span className="font-display text-lg font-extrabold leading-none text-white">
          C
        </span>
        <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-md bg-accent-500 text-[10px] font-bold text-brand-950">
          ⚡
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold ${textColor}`}>
          CVA
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${subColor}`}
        >
          Building &amp; Electrical
        </span>
      </span>
    </Link>
  );
}
