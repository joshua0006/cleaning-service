
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid6() {
  return (
    <section className="bg-gradient-to-b from-teal-light/5 to-white py-8" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Why Choose Us</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            Professional cleaning you can trust
          </h2>
        </div>

        {/* Split Layout - Large Image Left, Text Cards Right */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Large Image - Hidden on Mobile */}
          <div className="hidden md:block md:w-2/5 lg:w-1/2">
            <img
              src="/professional-training.png"
              alt="Professional cleaning service"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Cards Column */}
          <div className="flex flex-col gap-4 md:w-3/5 lg:w-1/2">
            {/* Card 1 - Professional Training */}
            <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border p-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col gap-2 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--teal-dark)' }}>
                  Professional Training
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  200+ hours of hotel-grade training for every cleaner
                </p>
              </CardContent>
            </Card>

            {/* Card 2 - Thorough Cleaning */}
            <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border p-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col gap-2 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--teal-dark)' }}>
                  Thorough Cleaning
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  50-point inspection checklist for every service
                </p>
              </CardContent>
            </Card>

            {/* Card 3 - Trusted Professionals */}
            <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border p-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col gap-2 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--teal-dark)' }}>
                  Trusted Professionals
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Background-checked and insured cleaners
                </p>
              </CardContent>
            </Card>

            {/* Card 4 - Flexible Booking */}
            <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border p-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col gap-2 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--teal-dark)' }}>
                  Flexible Booking
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Same-day availability and easy rescheduling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
