
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
        {/* Outer (Wider) V-shape - Layer 1 (Background) */}
        {/* Left triangle of outer V-shape */}
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: 'var(--purple-light)',
            clipPath: 'polygon(0% 0%, 0% 65%, 50% 75%, 0% 0%)',
            opacity: 0.9
          }}
        />
        {/* Right triangle of outer V-shape */}
        <div
          className="absolute right-0 top-0 w-full h-full"
          style={{
            background: 'var(--purple-light)',
            clipPath: 'polygon(100% 0%, 50% 75%, 100% 65%, 100% 0%)',
            opacity: 0.9
          }}
        />

        {/* Inner V-shape - Layer 2 (Foreground) */}
        {/* Left triangle of inner V-shape */}
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: 'var(--purple-primary)',
            clipPath: 'polygon(0% 40%, 0% 70%, 50% 80%, 50% 70%)',
            opacity: 0.9
          }}
        />
        {/* Right triangle of inner V-shape */}
        <div
          className="absolute right-0 top-0 w-full h-full"
          style={{
            background: 'var(--purple-primary)',
            clipPath: 'polygon(100% 30%, 50% 70%, 50% 80%, 100% 70%)',
            opacity: 0.9
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

          {/* Service Booking Form - Positioned to cover V-shape endpoint */}
          <div className="w-full ">
            <ServiceBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
