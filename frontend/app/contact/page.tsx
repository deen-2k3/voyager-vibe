import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { IconMapPin, IconHeadset, IconDocument } from "@/components/icons";

export const metadata: Metadata = { title: "Contact Us | Voyager Vibe" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Talk"
        title="Contact Us"
        description="Questions about a trip, or ready to start planning? Send us a message."
      />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest text-white">
                <IconMapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink">Office</h3>
                <p className="mt-1 text-sm text-ink-muted">24 Trailhead Ave, Denver, CO 80202</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crimson text-white">
                <IconHeadset className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink">Support</h3>
                <p className="mt-1 text-sm text-ink-muted">Available 24/7 at +1 (555) 019-2837</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <IconDocument className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink">Email</h3>
                <p className="mt-1 text-sm text-ink-muted">hello@voyagervibe.com</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
