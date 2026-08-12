export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`Rated ${rating} out of 5`}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.8l-5.2 2.9 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
      </svg>
      <span className="text-sm font-semibold text-ink">{rating.toFixed(1)}</span>
    </div>
  );
}
