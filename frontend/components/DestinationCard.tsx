import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/api";
import StarRating from "./StarRating";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-forest">
          {destination.region}
        </p>
        <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{destination.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{destination.tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <StarRating rating={destination.rating} />
          <span className="text-xs font-medium text-ink-muted">{destination.bestSeason}</span>
        </div>
      </div>
    </Link>
  );
}
