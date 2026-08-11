import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { api } from "@/lib/api";
import { ICONS, IconMapPin } from "@/components/icons";

export const metadata: Metadata = { title: "Services | Voyager Vibe" };

export default async function ServicesPage() {
  const services = await api.services();

  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Services"
        description="Everything you need for a trip, handled by one team from planning to landing."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = ICONS[service.icon] ?? IconMapPin;
              return (
                <Reveal key={service.slug} delay={(i % 3) * 90}>
                  <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact">Talk to a Trip Planner</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
