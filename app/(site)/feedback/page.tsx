import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = { title: "Feedback | Voyager Vibe" };

export default function FeedbackPage() {
  return (
    <>
      <PageHeader
        eyebrow="We'd Love To Hear From You"
        title="Share Your Feedback"
        description="Tell us how your trip went — your feedback helps us keep improving every journey we plan."
      />

      <section className="py-16">
        <Container className="max-w-2xl">
          <FeedbackForm />
        </Container>
      </section>
    </>
  );
}
