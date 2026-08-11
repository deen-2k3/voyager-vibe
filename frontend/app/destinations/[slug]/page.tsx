import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import StarRating from "@/components/StarRating";
import { api } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const destination = await api.destination(slug);
    return { title: `${destination.name} | Voyager Vibe` };
  } catch {
    return { title: "Destination | Voyager Vibe" };
  }
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;

  let destination;
  try {
    destination = await api.destination(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative h-72 w-full sm:h-96">
          <Image src={destination.image} alt={destination.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-transparent" />
        </div>
        <Container className="absolute inset-x-0 bottom-0 pb-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            {destination.region}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{destination.name}</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <StarRating rating={destination.rating} />
              <span className="text-sm text-ink-muted">Best season: {destination.bestSeason}</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {destination.description}
            </p>

            {destination.gallery && destination.gallery.length > 1 ? (
              <div className="mt-8 grid grid-cols-3 gap-3">
                {destination.gallery.map((src, i) => (
                  <div key={src} className="relative h-24 overflow-hidden rounded-xl sm:h-36">
                    <Image
                      src={src}
                      alt={`${destination.name} photo ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 200px, 33vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
            <p className="font-serif text-lg font-semibold text-ink">Ready to go?</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Tell us your dates and travel style — we&apos;ll put together a plan built around
              this destination.
            </p>
            <Button href="/contact" className="mt-5 w-full">
              Enquire About This Trip
            </Button>
          </aside>
        </Container>
      </section>
    </>
  );
}
