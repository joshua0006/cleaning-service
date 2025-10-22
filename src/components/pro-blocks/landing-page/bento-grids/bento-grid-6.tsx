
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid6() {
  return (
    <section className="bg-white section-padding-y border-b" id="features">
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

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border border-t-2 p-0 shadow-sm lg:col-span-2" style={{ borderTopColor: 'var(--purple-primary)' }}>
            <img
              src="/professional-training.png"
              alt="Professional Training"
              width={813}
              height={332}
              className="hidden w-full aspect-[813/332] object-cover object-center md:block"
            />
            <img
              src="/professional-training_mobile.png"
              alt="Professional Training"
              width={480}
              height={332}
              className="block w-full aspect-[480/332] object-cover object-center md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--purple-primary)' }}>
                Professional Training
              </h3>
              <p className="text-muted-foreground">
                200+ hours of hotel-grade training for every cleaner
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border border-t-2 p-0 shadow-sm lg:col-span-1" style={{ borderTopColor: 'var(--purple-primary)' }}>
            <img
              src="/thorough-cleaning.png"
              alt="Thorough Cleaning"
              width={480}
              height={332}
              className="w-full aspect-[480/332] object-cover object-center"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--purple-primary)' }}>
                Thorough Cleaning
              </h3>
              <p className="text-muted-foreground">
                50-point inspection checklist for every service
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border border-t-2 p-0 shadow-sm lg:col-span-1" style={{ borderTopColor: 'var(--purple-primary)' }}>
            <img
              src="/trusted-cleaners.png"
              alt="Trusted Professionals"
              width={480}
              height={332}
              className="w-full aspect-[480/332] object-cover object-center"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--purple-primary)' }}>
                Trusted Professionals
              </h3>
              <p className="text-muted-foreground">
                Background-checked and insured cleaners
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border border-border border-t-2 p-0 shadow-sm lg:col-span-2" style={{ borderTopColor: 'var(--purple-primary)' }}>
            <img
              src="/flexible-booking.png"
              alt="Flexible Booking"
              width={813}
              height={332}
              className="hidden w-full aspect-[813/332] object-cover object-center md:block"
            />
            <img
              src="/flexible-booking_mobile.png"
              alt="Flexible Booking"
              width={480}
              height={332}
              className="block w-full aspect-[480/332] object-cover object-center md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--purple-primary)' }}>
                Flexible Booking
              </h3>
              <p className="text-muted-foreground">
                Same-day availability and easy rescheduling
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
