import StarRating from "./StarRating";
import type { Testimonial } from "@/lib/api";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        &ldquo;{testimonial.message}&rdquo;
      </blockquote>
      <figcaption className="mt-4 border-t border-border-soft pt-4">
        <p className="font-serif text-sm font-semibold text-ink">{testimonial.name}</p>
      </figcaption>
    </figure>
  );
}
