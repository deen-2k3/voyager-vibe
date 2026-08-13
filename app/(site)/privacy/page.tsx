import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Privacy Policy | Voyager Vibe" };

const PROSE_CLASSES =
  "[&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink " +
  "[&_h2:first-child]:mt-0 " +
  "[&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-ink-muted " +
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-ink-muted " +
  "[&_li]:leading-relaxed [&_strong]:text-ink " +
  "[&_a]:text-crimson [&_a]:underline";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective Date: [DD Month YYYY] · Last Updated: [DD Month YYYY]"
      />

      <section className="py-16">
        <Container className="max-w-3xl">
          <div className={PROSE_CLASSES}>
            <p>
              <strong>Voyager Vibe</strong>, a travel brand operated by{" "}
              <strong>Cocoland Events And Tourism Private Limited</strong> (&ldquo;Voyager
              Vibe&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), respects your
              privacy. This Privacy Policy explains what information we collect through{" "}
              <a href="http://www.voyagervibe.in">www.voyagervibe.in</a>, how we use it, and the
              choices you have.
            </p>
            <p>
              By using our website or submitting information to us, you acknowledge this Privacy
              Policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you:</p>
            <ul>
              <li>Submit an enquiry through our contact form (name, email, subject and message)</li>
              <li>Contact us by phone, WhatsApp, email or social media</li>
              <li>Request a quotation or booking for a trip</li>
            </ul>
            <p>
              We do not require you to create an account or provide payment details to browse the
              website.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to enquiries and provide travel quotations</li>
              <li>Communicate with you about a trip, booking or request</li>
              <li>Improve our services and website content</li>
              <li>Comply with legal obligations where applicable</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>3. Sharing Your Information</h2>
            <p>
              We may share your information with third-party suppliers (such as hotels, airlines,
              transport operators or activity providers) only where necessary to arrange or fulfil
              a trip you have requested.
            </p>
            <p>
              We may also disclose information where required by law, or to protect the rights,
              safety or property of Voyager Vibe, our travellers or the public.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              We retain enquiry and booking information for as long as reasonably necessary to
              respond to your request, provide our services, and meet legal or accounting
              obligations.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We take reasonable measures to protect the information you provide from unauthorised
              access, alteration or disclosure. However, no method of transmission or storage over
              the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Choices and Rights</h2>
            <p>
              You may contact us at any time to ask what information we hold about you, request a
              correction, or request deletion of your information, subject to any legal or
              legitimate business requirement to retain it (for example, records of a confirmed
              booking).
            </p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children. Where information about a child is provided
              as part of a family or group booking, it is provided by the parent or legal guardian
              and used solely for the purpose of arranging that trip.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website or communications may contain links to third-party websites, including
              airline, hotel or social-media platforms. We are not responsible for the privacy
              practices of those third-party sites.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be
              published on this website with a revised &ldquo;Last Updated&rdquo; date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled,
              contact us at:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:contact@voyagervibe.in">contact@voyagervibe.in</a>
              <br />
              Phone/WhatsApp: <a href="tel:+919971118370">+91 99711 18370</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
