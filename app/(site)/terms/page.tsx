import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Terms & Conditions | Voyager Vibe" };

const PROSE_CLASSES =
  "[&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink " +
  "[&_h2:first-child]:mt-0 " +
  "[&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-ink-muted " +
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-ink-muted " +
  "[&_li]:leading-relaxed [&_strong]:text-ink [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-ink-muted " +
  "[&_a]:text-crimson [&_a]:underline";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />

      <section className="py-16">
        <Container className="max-w-3xl">
          <div className={PROSE_CLASSES}>
            <p>
              Welcome to <strong>Voyager Vibe</strong>, a travel brand operated by{" "}
              <strong>Cocoland Events And Tourism Private Limited</strong> (&ldquo;Voyager
              Vibe&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              These Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
              Voyager Vibe website, including{" "}
              <a href="http://www.voyagervibe.in">www.voyagervibe.in</a>, and your interaction with
              our travel services, trip enquiries, bookings, communications and related services.
            </p>
            <p>
              By accessing our website, submitting an enquiry, communicating with us, or making a
              booking, you acknowledge that you have read, understood and agreed to these Terms.
            </p>
            <p>
              If you do not agree with these Terms, please do not use the website or our services.
            </p>

            <h2>1. About Voyager Vibe</h2>
            <p>
              Voyager Vibe is a travel brand operated by Cocoland Events And Tourism Private
              Limited, providing travel-related services including, but not limited to:
            </p>
            <ul>
              <li>Group tours</li>
              <li>Domestic holidays</li>
              <li>International holidays</li>
              <li>Customised travel packages</li>
              <li>Family holidays</li>
              <li>Couple and leisure trips</li>
              <li>Corporate and group travel</li>
              <li>Transportation arrangements</li>
              <li>Accommodation arrangements</li>
              <li>Sightseeing and activities</li>
              <li>Travel planning and assistance</li>
            </ul>
            <p>
              Specific services available for each trip may vary according to the individual
              itinerary and package.
            </p>

            <h2>2. Website Information</h2>
            <p>
              We make reasonable efforts to ensure that information published on our website is
              accurate and up to date.
            </p>
            <p>
              However, travel information can change due to circumstances beyond our control,
              including:
            </p>
            <ul>
              <li>Airline schedule changes</li>
              <li>Hotel availability</li>
              <li>Government regulations</li>
              <li>Weather conditions</li>
              <li>Local restrictions</li>
              <li>Transportation availability</li>
              <li>Supplier policies</li>
              <li>Changes in taxes, fees or surcharges</li>
              <li>Changes in attraction or activity operating schedules</li>
            </ul>
            <p>
              Accordingly, website content, photographs, descriptions, prices and itineraries may
              be updated, modified or withdrawn without prior notice.
            </p>
            <p>
              Photographs and illustrations are intended to provide a general representation of
              destinations, hotels, activities and experiences and may not always represent the
              exact room, vehicle, facility or experience provided.
            </p>

            <h2>3. Enquiries and Quotations</h2>
            <p>
              Submitting an enquiry through our website, WhatsApp, social-media accounts, telephone,
              email or any other communication channel does not constitute a confirmed booking.
            </p>
            <p>
              Any quotation provided by Voyager Vibe is subject to availability and may have a
              specified validity period.
            </p>
            <p>A quotation may change before confirmation due to:</p>
            <ul>
              <li>Changes in hotel availability</li>
              <li>Transportation availability</li>
              <li>Airline fares</li>
              <li>Currency fluctuations</li>
              <li>Government taxes or fees</li>
              <li>Supplier price revisions</li>
              <li>Changes requested by the traveller</li>
            </ul>
            <p>The final price applicable to a booking will be communicated to the traveller before confirmation.</p>

            <h2>4. Booking Confirmation</h2>
            <p>A booking shall be considered confirmed only after:</p>
            <ol>
              <li>The traveller accepts the applicable quotation;</li>
              <li>Required traveller information has been provided;</li>
              <li>
                The applicable booking amount or advance payment has been received; and
              </li>
              <li>Voyager Vibe issues a booking confirmation or other written confirmation.</li>
            </ol>
            <p>
              A payment alone does not automatically guarantee a booking unless the booking has
              been confirmed by Voyager Vibe.
            </p>

            <h2>5. Traveller Information</h2>
            <p>
              Travellers are responsible for providing accurate and complete information,
              including where applicable:
            </p>
            <ul>
              <li>Full name as per travel document</li>
              <li>Date of birth</li>
              <li>Passport details</li>
              <li>Contact information</li>
              <li>Emergency contact information</li>
              <li>Visa information</li>
              <li>Special requirements</li>
              <li>Dietary requirements</li>
              <li>Medical or mobility-related assistance requirements relevant to the trip</li>
            </ul>
            <p>
              Voyager Vibe shall not be responsible for additional costs, denied boarding, visa
              issues, incorrect tickets or other consequences arising from incorrect or incomplete
              information supplied by the traveller.
            </p>

            <h2>6. Passport, Visa and Travel Documents</h2>
            <p>
              Travellers are solely responsible for ensuring that they possess valid travel
              documents required for their journey.
            </p>
            <p>For international travel, travellers should independently verify:</p>
            <ul>
              <li>Passport validity</li>
              <li>Visa requirements</li>
              <li>Immigration requirements</li>
              <li>Transit visa requirements</li>
              <li>Vaccination or health requirements where applicable</li>
              <li>Entry and exit regulations</li>
              <li>Destination-specific travel restrictions</li>
            </ul>
            <p>
              Voyager Vibe may provide general travel guidance but does not guarantee visa
              approval, immigration clearance or entry into any country.
            </p>
            <p>
              The final decision regarding visa issuance and immigration admission rests with the
              relevant government authority.
            </p>

            <h2>7. Pricing</h2>
            <p>
              Unless expressly stated otherwise, package prices may be subject to applicable
              taxes, government charges, service fees, airfare fluctuations, fuel surcharges,
              foreign-exchange fluctuations and other supplier-related charges.
            </p>
            <p>
              Prices displayed on the website may be indicative and should not be treated as a
              guaranteed booking price unless specifically confirmed in writing.
            </p>
            <p>
              Any promotional offer shall be subject to its stated terms, validity period and
              availability.
            </p>
            <p>
              Voyager Vibe reserves the right to withdraw or modify promotional offers at any
              time, subject to applicable law and any booking already confirmed under the offer.
            </p>

            <h2>8. Payment</h2>
            <p>
              Payment schedules shall be communicated in the applicable quotation or booking
              confirmation.
            </p>
            <p>Depending upon the package, payment may include:</p>
            <ul>
              <li>Booking/advance amount</li>
              <li>Subsequent instalments</li>
              <li>Balance payment</li>
              <li>Security deposits where applicable</li>
              <li>Additional service charges</li>
            </ul>
            <p>
              Bookings may be cancelled or released if required payments are not received within
              the specified timelines.
            </p>
            <p>
              Any applicable payment gateway, banking or transaction charges may be payable by the
              traveller where communicated in advance.
            </p>

            <h2>9. Cancellation and Refunds</h2>
            <p>
              Cancellation terms vary depending upon the package, destination, airline, hotel,
              transport provider, activity operator and other third-party suppliers.
            </p>
            <p>
              The applicable cancellation and refund conditions will be communicated to the
              traveller at the time of booking or in the booking confirmation.
            </p>
            <p>Certain bookings may be:</p>
            <ul>
              <li>Non-refundable</li>
              <li>Partially refundable</li>
              <li>Subject to cancellation charges</li>
              <li>Subject to supplier-specific cancellation policies</li>
            </ul>
            <p>
              Refunds, where applicable, shall be processed after receipt of the corresponding
              refund from the relevant supplier and after deduction of applicable charges.
            </p>
            <p>
              Voyager Vibe shall not be responsible for non-refundable amounts imposed by
              airlines, hotels, transport operators, activity providers or other suppliers.
            </p>

            <h2>10. Changes Requested by Travellers</h2>
            <p>Requests to modify a confirmed booking, including changes to:</p>
            <ul>
              <li>Travel dates</li>
              <li>Hotels</li>
              <li>Room categories</li>
              <li>Number of travellers</li>
              <li>Transportation</li>
              <li>Activities</li>
              <li>Flights</li>
              <li>Itinerary</li>
            </ul>
            <p>shall be subject to availability and may result in additional charges.</p>
            <p>Any change shall be considered confirmed only after written confirmation from Voyager Vibe.</p>

            <h2>11. Changes or Cancellation by Voyager Vibe</h2>
            <p>
              In exceptional circumstances, Voyager Vibe may need to modify an itinerary, hotel,
              transportation arrangement, activity or other component due to circumstances beyond
              our reasonable control.
            </p>
            <p>Where reasonably possible, we will provide an alternative arrangement of comparable nature or value.</p>
            <p>If a material change is unavoidable, we will communicate the available options to the affected traveller.</p>

            <h2>12. Flights and Airlines</h2>
            <p>Where flights are included in a package, flights are subject to the terms and conditions of the relevant airline.</p>
            <p>Airlines may independently change:</p>
            <ul>
              <li>Flight timings</li>
              <li>Routes</li>
              <li>Aircraft</li>
              <li>Baggage allowances</li>
              <li>Seats</li>
              <li>Schedules</li>
              <li>Cancellation or rebooking policies</li>
            </ul>
            <p>Voyager Vibe will assist travellers where reasonably possible but shall not be responsible for airline operational decisions.</p>

            <h2>13. Hotels and Accommodation</h2>
            <p>Hotel photographs, facilities, room categories and descriptions are provided for general guidance.</p>
            <p>Actual room allocation is subject to hotel availability and the hotel&apos;s policies.</p>
            <p>Hotels may modify facilities, restaurants, recreational areas or services without prior notice.</p>
            <p>Early check-in and late check-out are subject to availability and may involve additional charges.</p>

            <h2>14. Transportation</h2>
            <p>Transportation services are subject to availability and local operating conditions.</p>
            <p>
              Vehicle type, seating capacity and arrangements may vary depending upon destination,
              road conditions, local regulations and supplier availability.
            </p>
            <p>Travellers must comply with applicable transportation safety rules and instructions.</p>

            <h2>15. Travel Experiences and Activities</h2>
            <p>Certain activities may involve inherent risks or physical requirements.</p>
            <p>
              Travellers are responsible for assessing their suitability for any activity and
              should disclose relevant requirements before booking where necessary.
            </p>
            <p>
              Adventure activities, water sports, trekking, wildlife experiences and similar
              activities may be operated by independent third-party suppliers.
            </p>
            <p>Their specific safety rules, eligibility criteria, cancellation policies and terms may apply.</p>

            <h2>16. Travel Insurance</h2>
            <p>Unless expressly included in a package, travel insurance is not included.</p>
            <p>We strongly recommend appropriate travel insurance covering, where relevant:</p>
            <ul>
              <li>Medical emergencies</li>
              <li>Trip cancellation</li>
              <li>Trip interruption</li>
              <li>Lost baggage</li>
              <li>Travel delays</li>
              <li>Personal accident</li>
              <li>Emergency evacuation</li>
            </ul>
            <p>Travellers are responsible for selecting appropriate insurance coverage.</p>

            <h2>17. Force Majeure</h2>
            <p>
              Voyager Vibe shall not be liable for failure, delay, interruption or modification of
              services resulting from circumstances beyond our reasonable control, including but
              not limited to:
            </p>
            <ul>
              <li>Natural disasters</li>
              <li>Floods</li>
              <li>Earthquakes</li>
              <li>Cyclones</li>
              <li>Epidemics or pandemics</li>
              <li>War</li>
              <li>Terrorism</li>
              <li>Civil unrest</li>
              <li>Strikes</li>
              <li>Government restrictions</li>
              <li>Border closures</li>
              <li>Political disturbances</li>
              <li>Airline disruptions</li>
              <li>Severe weather</li>
              <li>Transportation disruptions</li>
              <li>Acts of God</li>
              <li>Other unforeseeable events</li>
            </ul>
            <p>Where such circumstances occur, we will make reasonable efforts to assist travellers and identify available alternatives.</p>

            <h2>18. Third-Party Service Providers</h2>
            <p>
              Voyager Vibe may arrange services through independent third-party suppliers
              including airlines, hotels, transport companies, activity providers, restaurants,
              guides and other travel service providers.
            </p>
            <p>Such suppliers operate under their own terms and policies.</p>
            <p>
              Voyager Vibe will make reasonable efforts to select reliable suppliers but shall not
              be responsible for acts, omissions, delays, negligence or failures of independent
              suppliers to the extent permitted by applicable law.
            </p>

            <h2>19. Traveller Conduct</h2>
            <p>Travellers are expected to behave responsibly and respectfully towards:</p>
            <ul>
              <li>Other travellers</li>
              <li>Hotel staff</li>
              <li>Drivers</li>
              <li>Tour guides</li>
              <li>Local communities</li>
              <li>Property</li>
              <li>Cultural and religious sites</li>
              <li>Applicable laws and regulations</li>
            </ul>
            <p>
              Voyager Vibe reserves the right, subject to applicable law, to discontinue
              assistance or participation in a trip where a traveller&apos;s conduct creates a
              serious risk to other travellers, staff, suppliers or property.
            </p>
            <p>No refund shall automatically arise from removal or discontinuation caused by a traveller&apos;s misconduct.</p>

            <h2>20. Children and Minors</h2>
            <p>Bookings involving children or minors must include accurate age and traveller information.</p>
            <p>
              Parents or legal guardians remain responsible for minors travelling with them unless
              a specific supervised service has been expressly confirmed.
            </p>

            <h2>21. Website Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for unlawful purposes;</li>
              <li>Attempt to gain unauthorised access to the website or its systems;</li>
              <li>Introduce malicious software;</li>
              <li>Copy or reproduce website content without permission;</li>
              <li>Scrape or systematically extract website data;</li>
              <li>Impersonate Voyager Vibe or its representatives;</li>
              <li>Submit false or misleading information;</li>
              <li>Use the website to commit fraud or facilitate unlawful activities.</li>
            </ul>
            <p>We reserve the right to restrict or terminate access where misuse is reasonably suspected.</p>

            <h2>22. Intellectual Property</h2>
            <p>Unless otherwise stated, all content appearing on the Voyager Vibe website, including:</p>
            <ul>
              <li>Brand name</li>
              <li>Logos</li>
              <li>Graphics</li>
              <li>Text</li>
              <li>Photographs</li>
              <li>Videos</li>
              <li>Designs</li>
              <li>Layout</li>
              <li>Trademarks</li>
              <li>Marketing materials</li>
            </ul>
            <p>
              is owned by or licensed to Voyager Vibe/Cocoland Events And Tourism Private Limited
              and is protected under applicable intellectual-property laws.
            </p>
            <p>No content may be reproduced, modified, distributed or commercially exploited without prior written permission.</p>

            <h2>23. Social Media and User-Generated Content</h2>
            <p>Voyager Vibe may maintain accounts on platforms including Instagram, Facebook, YouTube, WhatsApp and other digital platforms.</p>
            <p>By interacting with our social-media content, users agree to comply with the relevant platform&apos;s terms and policies.</p>
            <p>
              Where a user voluntarily submits photographs, testimonials, reviews or other content
              to Voyager Vibe and provides permission for its use, Voyager Vibe may use such
              content for legitimate marketing and promotional purposes subject to applicable law
              and the permissions obtained.
            </p>

            <h2>24. AI-Assisted Communication</h2>
            <p>
              Voyager Vibe may use automated systems, conversational tools or AI-assisted
              technologies to respond to enquiries, provide general travel information, qualify
              leads, schedule follow-ups and assist with customer communication.
            </p>
            <p>AI-assisted responses are intended to provide preliminary information and assistance.</p>
            <p>
              For booking confirmation, pricing commitments, complex travel arrangements,
              complaints, refunds or other material matters, Voyager Vibe may transfer the
              conversation to a human travel representative.
            </p>
            <p>
              The final terms communicated in a formal quotation, booking confirmation or other
              authorised written communication shall prevail over general automated responses.
            </p>

            <h2>25. Privacy</h2>
            <p>
              Your use of the website is also governed by our <a href="/privacy">Privacy Policy</a>,
              which explains how we collect, use, store and process personal information.
            </p>
            <p>By using our website and submitting information to us, you acknowledge the Privacy Policy.</p>

            <h2>26. Links to Third-Party Websites</h2>
            <p>Our website or communications may contain links to third-party websites.</p>
            <p>Such links are provided for convenience only.</p>
            <p>
              Voyager Vibe does not control and is not responsible for the content, availability,
              security, privacy practices or policies of third-party websites.
            </p>

            <h2>27. Disclaimer</h2>
            <p>Travel involves circumstances that may change after a booking is made.</p>
            <p>While we make reasonable efforts to provide accurate information and quality services, Voyager Vibe does not guarantee that:</p>
            <ul>
              <li>Every advertised service will always be available;</li>
              <li>Travel schedules will remain unchanged;</li>
              <li>Third-party suppliers will perform without interruption;</li>
              <li>Visa applications will be approved;</li>
              <li>Immigration authorities will permit entry;</li>
              <li>Weather or local conditions will be favourable;</li>
              <li>Attractions will remain open;</li>
              <li>Travel experiences will exactly match photographs or promotional material.</li>
            </ul>
            <p>Nothing in these Terms excludes any consumer rights or legal protections that cannot lawfully be excluded.</p>

            <h2>28. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Voyager Vibe shall not be liable
              for indirect, incidental, consequential or unforeseeable losses arising from
              circumstances beyond our reasonable control or from independent third-party service
              providers.
            </p>
            <p>Nothing in these Terms shall limit or exclude liability where such limitation or exclusion is prohibited by applicable law.</p>

            <h2>29. Complaints and Customer Support</h2>
            <p>
              We encourage travellers to contact us as soon as possible if they experience any
              issue during a trip so that we can attempt to resolve the matter promptly.
            </p>
            <p>Complaints may be submitted through the contact details provided on our website.</p>
            <p>We will make reasonable efforts to acknowledge and address genuine complaints within an appropriate period.</p>

            <h2>30. Governing Law and Jurisdiction</h2>
            <p>These Terms shall be governed by the laws of India.</p>
            <p>
              Subject to applicable consumer-protection laws and jurisdictional requirements,
              disputes arising in connection with these Terms or services provided by Voyager Vibe
              shall be subject to the jurisdiction of the competent courts/authorities at{" "}
              <strong>[New Delhi, Delhi]</strong>.
            </p>
            <p>Nothing in this clause shall restrict any statutory rights available to consumers under applicable law.</p>

            <h2>31. Changes to These Terms</h2>
            <p>Voyager Vibe may update these Terms from time to time.</p>
            <p>The updated version will be published on this website with the revised &ldquo;Last Updated&rdquo; date.</p>
            <p>
              Your continued use of the website after the updated Terms are published constitutes
              acceptance of the revised Terms, to the extent permitted by law.
            </p>

            <h2>32. Contact Us</h2>
            <p>
              <strong>Voyager Vibe</strong>
              <br />
              A travel brand operated by Cocoland Events And Tourism Private Limited
            </p>
            <p>
              Website: <a href="http://www.voyagervibe.in">www.voyagervibe.in</a>
            </p>
            <p>Registered Office: C-57 Street No. 8, Jagatpuri Extension, Near GTB Hospital, Delhi</p>
            <p>
              Email:{" "}
              <a href="mailto:voyagervibe0001@gmail.com">voyagervibe0001@gmail.com</a>
            </p>
            <p>
              Phone/WhatsApp: <a href="tel:+919971118370">+91 99711 18370</a>
            </p>
            <p>
              Grievance/Privacy Contact Person: <strong>Dinesh Chand (Director)</strong>
            </p>

            <p className="mt-10 font-medium text-ink">
              By using www.voyagervibe.in, submitting an enquiry or making a booking, you
              acknowledge that you have read and agreed to these Terms & Conditions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
