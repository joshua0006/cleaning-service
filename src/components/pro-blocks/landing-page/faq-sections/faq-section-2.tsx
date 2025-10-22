
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-gradient-to-b from-teal-light/5 to-white section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We&apos;ve compiled the most important information to help you get
              the most out of your experience. Can&apos;t find what you&apos;re
              looking for?{" "}
              <a href="#" className="text-purple-primary underline">
                Contact us.
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                General
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What services do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a comprehensive range of cleaning services including
                    regular home cleaning, deep cleaning, move in/out cleaning,
                    spring cleaning, post-renovation cleaning, and specialized
                    services like carpet, sofa, and mattress cleaning. All services
                    are performed by trained, background-checked professionals
                    using eco-friendly products.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How much does cleaning cost?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our regular home cleaning starts at $25-35 per hour. We also
                    offer monthly packages starting at $120/month for weekly
                    service. Deep cleaning and specialized services are priced
                    based on home size and specific requirements. Contact us for
                    a free quote tailored to your needs.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Are your cleaners background-checked?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, absolutely. Every cleaner on our team undergoes a
                    thorough background check and comprehensive training program
                    including 200+ hours of hotel-grade cleaning training. All
                    our professionals are fully insured and bonded for your
                    peace of mind.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What if I'm not satisfied with the cleaning?
                  </AccordionTrigger>
                  <AccordionContent>
                    We stand behind our 100% satisfaction guarantee. If you're
                    not completely happy with our service, contact us within 24
                    hours and we'll return to re-clean the areas of concern at
                    no additional charge. Your satisfaction is our top priority.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Billing
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    Do I need to provide cleaning supplies?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, our cleaners bring all necessary cleaning supplies and
                    equipment, including eco-friendly, non-toxic products that
                    are safe for your family and pets. If you prefer us to use
                    specific products, just let us know and we'll accommodate
                    your preferences.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    How do I reschedule or cancel?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can easily reschedule or cancel through our online
                    booking system or mobile app. We require 24 hours notice for
                    changes to avoid cancellation fees. For same-day changes,
                    please contact our customer service team directly and we'll
                    do our best to accommodate you.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    What areas do you serve?
                  </AccordionTrigger>
                  <AccordionContent>
                    We currently serve the Greater Sydney area including all
                    major suburbs. Enter your postcode on our booking page to
                    check availability in your area. We're continuously
                    expanding our service areas, so if we don't cover your
                    location yet, join our waitlist to be notified when we do.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    Is there a minimum booking time?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our standard minimum booking is 2 hours for regular cleaning
                    services. This ensures our cleaners have adequate time to
                    deliver thorough, high-quality results. Deep cleaning and
                    specialized services may require longer minimum booking times
                    depending on the scope of work.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
