import StarRating from "./StarRating";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    trip: "Alpine Adventure Trek",
    quote:
      "Every detail was handled — from the cable car tickets to the fondue dinner reservation. The Swiss Alps trip felt effortless.",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    trip: "Santorini Sunset Escape",
    quote:
      "Our planner built the itinerary around our budget without cutting corners. The catamaran cruise was the highlight of the year.",
    rating: 5,
  },
  {
    name: "Aiko Tanaka",
    trip: "Japan Cultural Journey",
    quote:
      "Genuinely the smoothest group trip I've been on. The guides in Kyoto knew exactly which times to avoid the crowds.",
    rating: 4.9,
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
        >
          <StarRating rating={t.rating} />
          <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 border-t border-border-soft pt-4">
            <p className="font-serif text-sm font-semibold text-ink">{t.name}</p>
            <p className="text-xs text-ink-muted">{t.trip}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
