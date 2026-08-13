import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { api } from "@/lib/api";

export const metadata: Metadata = { title: "Traveler Stories | Voyager Vibe" };

// Reads feedback.json directly at request time so new submissions show up
// without a rebuild — force-dynamic since there's no fetch() call left
// for Next to infer that from.
export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const testimonials = await api.feedback();

  return (
    <>
      <PageHeader
        eyebrow="Traveler Stories"
        title="What Our Travelers Say"
        description="Real feedback from travelers who've planned a trip with us."
      />

      <section className="py-16">
        <Container>
          {testimonials.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border-soft bg-white p-10 text-center">
              <p className="text-sm text-ink-muted">No traveler stories yet.</p>
              <Link
                href="/feedback"
                className="mt-4 inline-block text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
              >
                Leave feedback →
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
