import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SocialIcons from "@/components/SocialIcons";
import { IconHeadset, IconDocument } from "@/components/icons";

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
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-crimson text-white">
                <IconHeadset className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink">Call Us</h3>
                <a
                  href="tel:+919971118370"
                  className="mt-1 block text-sm text-ink-muted [@media(hover:hover)]:hover:text-crimson"
                >
                  +91 99711 18370
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <IconDocument className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink">Email</h3>
                <a
                  href="mailto:voyagervibe0001@gmail.com"
                  className="mt-1 block text-sm text-ink-muted [@media(hover:hover)]:hover:text-crimson"
                >
                  voyagervibe0001@gmail.com
                </a>
                <a
                  href="mailto:contact@voyagervibe.in"
                  className="mt-1 block text-sm text-ink-muted [@media(hover:hover)]:hover:text-crimson"
                >
                  contact@voyagervibe.in
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-ink">Follow Us</h3>
              <SocialIcons className="mt-3" tone="light" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
