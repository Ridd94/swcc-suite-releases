import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container mx-auto max-w-xl text-center">
        <p className="font-display text-6xl font-extrabold text-brand-200">
          404
        </p>
        <h1 className="mt-4 text-3xl">Page not found</h1>
        <p className="mt-3 text-ink-600">
          Sorry, we couldn&apos;t find the page you were looking for. It may have
          moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
