
import { Button } from "@/components/ui/button";
import { ServiceBookingForm } from "@/components/service-booking-form";

export function HeroSection2() {
  return (
    <section
      className="relative overflow-hidden bg-white section-padding-y"
      aria-labelledby="hero-heading"
    >
      {/* V-Shaped Violet Background - Accessibility compliant */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        {/* Left triangle of V-shape */}
        <div
          className="absolute left-0 top-0 w-full h-2/3 md:h-3/4"
          style={{
            background: 'var(--purple-primary)',
            clipPath: 'polygon(0% 0%, 0% 70%, 50% 100%, 0% 0%)'
          }}
        />
        {/* Right triangle of V-shape */}
        <div
          className="absolute right-0 top-0 w-full h-2/3 md:h-3/4"
          style={{
            background: 'var(--purple-primary)',
            clipPath: 'polygon(100% 0%, 100% 70%, 50% 100%, 100% 0%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container-padding-x container mx-auto relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="section-title-gap-xl flex flex-col items-center">
            <h1 id="hero-heading" className="heading-xl text-foreground max-w-3xl">
              Guaranteed House Cleaning Service
            </h1>

            {/* Description with trust signals */}
            <p className="text-foreground/80 text-base lg:text-lg max-w-2xl">
              More than five years of providing home cleaning services.
              <br />
              98% of our customers are satisfied with our services.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-full focus:ring-4 focus:ring-orange-cta/50 focus:outline-none transition-all"
              style={{ backgroundColor: 'var(--orange-cta)', color: 'white' }}
              aria-label="Get started with our cleaning service"
            >
              Get Started
            </Button>
          </div>

          {/* Service Booking Form - Positioned to cover V-shape endpoint */}
          <div className="w-full mt-12 md:mt-16">
            <ServiceBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
