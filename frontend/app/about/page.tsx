import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "About Us | Voyager Vibe" };

const STATS = [
  { label: "Years of Experience", value: "12+" },
  { label: "Destinations Curated", value: "60+" },
  { label: "Happy Travelers", value: "18,000+" },
  { label: "Average Rating", value: "4.9/5" },
];

const VALUES = [
  {
    title: "Thoughtful Itineraries",
    description:
      "Every trip is planned around how you actually like to travel — pace, budget, and interests included.",
  },
  {
    title: "Local Partnerships",
    description:
      "We work with vetted local guides and operators in every destination, not anonymous vendors.",
  },
  {
    title: "Honest Pricing",
    description:
      "No hidden fees or last-minute upsells. The price you're quoted is the price you pay.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Voyager Vibe"
        title="Travel planning built around you"
        description="We started Voyager Vibe because generic package tours weren't cutting it. Every itinerary we build is designed for the traveler taking it."
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/hero-mountain.jpg"
              alt="Mountain waterfall at sunrise"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our Story" title="Why Voyager Vibe exists" align="left" />
            <p className="mt-6 text-ink-muted leading-relaxed">
              Voyager Vibe was founded by a small group of guides and trip planners who were tired
              of watching travelers overpay for cookie-cutter itineraries. We set out to build a
              travel company that treats every trip as its own project — researched, planned, and
              refined until it fits the traveler, not the other way around.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Today we plan everything from single-destination getaways to multi-country
              expeditions, backed by a network of local partners we've worked with for years.
            </p>
            <div className="mt-8">
              <Button href="/contact">Start Planning</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-crimson sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="What We Stand For" title="How We Work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
