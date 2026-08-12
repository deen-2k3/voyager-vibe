import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import DestinationCard from "@/components/DestinationCard";
import Reveal from "@/components/Reveal";
import { api } from "@/lib/api";

export const metadata: Metadata = { title: "Destinations | Voyager Vibe" };

export default async function DestinationsPage() {
  const destinations = await api.destinations();

  return (
    <>
      <PageHeader
        eyebrow="Where To Next"
        title="Explore Our Destinations"
        description="From alpine peaks to island coastlines — browse the places our travelers love most."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, i) => (
              <Reveal key={destination.slug} delay={(i % 3) * 90}>
                <DestinationCard destination={destination} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
