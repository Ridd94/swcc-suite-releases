import { stats } from "@/lib/site";

export default function Stats({ light = false }: { light?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span
              className={`block font-display text-4xl font-extrabold sm:text-5xl ${
                light ? "text-white" : "text-brand-900"
              }`}
            >
              {s.value}
            </span>
            <span
              className={`mt-1 block text-sm font-medium ${
                light ? "text-white/70" : "text-ink-500"
              }`}
            >
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
