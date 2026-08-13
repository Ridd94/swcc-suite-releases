import Link from "next/link";
import { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group flex flex-col p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-50 text-2xl transition-colors group-hover:bg-accent-500">
        <span aria-hidden>{service.icon}</span>
      </span>
      <h3 className="mt-5 text-xl">{service.title}</h3>
      <p className="mt-2 flex-1 text-ink-600">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
        Learn more
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
