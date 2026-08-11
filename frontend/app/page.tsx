import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import DestinationCard from "@/components/DestinationCard";
import Testimonials from "@/components/Testimonials";
import SocialFollowBanner from "@/components/SocialFollowBanner";
import Reveal from "@/components/Reveal";
import HeroFlightPath from "@/components/HeroFlightPath";
import { IconMapPin, IconSuitcase, IconHeadset, IconUsers } from "@/components/icons";
import { api } from "@/lib/api";

export default async function HomePage() {
  const destinations = await api.destinations();

  return (
    <>
      <section className="relative -mt-20 overflow-hidden lg:-mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-mountain.jpg"
            alt="Sunrise over a mountain waterfall"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/75 via-cream/25 to-transparent lg:from-cream/70 lg:via-cream/10 lg:to-transparent" />
        </div>

        <HeroFlightPath className="pointer-events-none absolute right-4 top-24 hidden h-20 w-56 sm:block lg:right-8 lg:top-28 lg:h-28 lg:w-72" />

        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="relative">
            <div className="relative isolate max-w-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-10 -inset-y-12 -z-10 rounded-[999px]"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,250,243,0.9) 40%, rgba(255,250,243,0.6) 65%, rgba(255,250,243,0) 100%)",
                }}
              />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-crimson">
                Voyager Vibe Travel Co.
              </p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Explore More.
                <br />
                Live <span className="text-forest">The Vibe.</span>
              </h1>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-muted sm:text-lg">
                Discover breathtaking destinations,
                <br />
                unforgettable experiences and
                <br />
                the joy of traveling with Voyager Vibe.
              </p>
              <div className="mt-8">
                <Button href="/destinations">
                  Explore Destinations
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Centered on the full hero width, independent of the text column */}
            <div className="mt-12 flex justify-center lg:absolute lg:inset-0 lg:mt-0 lg:items-center lg:justify-center">
              <div className="relative isolate flex flex-col items-center text-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-12 -inset-y-10 -z-10 rounded-[999px] sm:-inset-x-20 sm:-inset-y-14 lg:-inset-x-24 lg:-inset-y-16"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(255,250,243,0.95) 45%, rgba(255,250,243,0.85) 65%, rgba(255,250,243,0.4) 85%, rgba(255,250,243,0) 100%)",
                  }}
                />
                <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-xl ring-4 ring-white/80 sm:h-52 sm:w-52 lg:h-60 lg:w-60">
                  <Image
                    src="/images/logo.jpg"
                    alt="Voyager Vibe emblem"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 font-serif text-3xl font-bold leading-none tracking-wide text-crimson sm:text-4xl lg:text-5xl">
                  VOYAGER
                </p>
                <div className="mt-2 flex items-center gap-3 sm:gap-4">
                  <span className="h-0.5 w-8 bg-forest sm:w-10" />
                  <p className="font-serif text-xl font-bold tracking-[0.3em] text-forest sm:text-2xl lg:text-3xl">
                    VIBE
                  </p>
                  <span className="h-0.5 w-8 bg-forest sm:w-10" />
                </div>
                <p className="mt-3 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-ink sm:text-xs sm:tracking-[0.3em]">
                  Explore More. Live The Vibe.
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="h-16 sm:h-20 lg:h-24" />
      </section>

      <Container className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <FeatureCard
              icon={<IconMapPin className="h-full w-full" />}
              title="Diverse Destinations"
              description="From serene valleys to exotic beaches — we have it all."
              tone="forest"
            />
          </Reveal>
          <Reveal delay={80}>
            <FeatureCard
              icon={<IconSuitcase className="h-full w-full" />}
              title="Best Travel Deals"
              description="Exclusive packages and best deals for every traveler."
              tone="gold"
            />
          </Reveal>
          <Reveal delay={160}>
            <FeatureCard
              icon={<IconHeadset className="h-full w-full" />}
              title="24/7 Support"
              description="We are with you every step of your journey."
              tone="crimson"
            />
          </Reveal>
          <Reveal delay={240}>
            <FeatureCard
              icon={<IconUsers className="h-full w-full" />}
              title="Custom Itineraries"
              description="Personalized itineraries crafted just for you and your loved ones."
              tone="forest"
            />
          </Reveal>
        </div>
      </Container>

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Popular Destinations" title="Explore Top Destinations" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((destination, i) => (
              <Reveal key={destination.slug} delay={(i % 3) * 90}>
                <DestinationCard destination={destination} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/destinations" variant="outline">
              View All Destinations
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Traveler Stories" title="What Our Travelers Say" />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Testimonials />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Join The Journey" title="Follow Along For More" />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <SocialFollowBanner />
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-forest-dark py-20 text-white">
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Reveal className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
              Ready to start your next adventure?
            </h2>
            <p className="max-w-xl text-white/75">
              Tell us where you want to go and we&apos;ll build an itinerary around it — no
              templates, no guesswork.
            </p>
            <Button href="/contact" className="mt-2">
              Plan My Trip
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
