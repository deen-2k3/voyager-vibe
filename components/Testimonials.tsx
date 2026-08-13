import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/api";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border-soft bg-white p-10 text-center">
        <p className="text-sm text-ink-muted">
          No traveler stories yet — be the first to share how your trip went.
        </p>
        <Link
          href="/feedback"
          className="mt-4 inline-block text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
        >
          Leave feedback →
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/testimonials"
          className="text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
        >
          Read more traveler stories →
        </Link>
      </div>
    </div>
  );
}
