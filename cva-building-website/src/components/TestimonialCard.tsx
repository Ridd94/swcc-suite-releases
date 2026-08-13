import { Testimonial } from "@/lib/site";
import Stars from "./Stars";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="card flex h-full flex-col p-7">
      <Stars rating={testimonial.rating} className="text-lg" />
      <blockquote className="mt-4 flex-1 text-ink-700">
        <p className="leading-relaxed">“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-display font-bold text-brand-800">
          {testimonial.author.replace(/^Placeholder — /, "").charAt(0)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-brand-900">
            {testimonial.author}
          </span>
          <span className="text-ink-500">{testimonial.location}</span>
        </span>
      </figcaption>
    </figure>
  );
}
