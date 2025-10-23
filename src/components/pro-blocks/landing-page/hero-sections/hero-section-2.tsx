import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialProof } from "@/components/social-proof";

export function HeroSection2() {
  // Sample avatar URLs - replace with actual customer avatars
  const customerAvatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-teal-light/8 to-white py-8 md:py-12 lg:py-16"
      aria-labelledby="hero-heading"
    >
      {/* Content Container */}
      <div className="container-padding-x container mx-auto relative z-10">
        {/* Two-Column Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
            {/* Main Heading */}
            <div className="flex flex-col gap-4">
              <h1
                id="hero-heading"
                className="heading-xl text-foreground leading-tight"
                style={{ color: "var(--teal-dark)" }}
              >
                Seamless Cleaning Services for Outstanding, Lasting Results.
              </h1>

              {/* Description */}
              <p className="text-foreground/70 text-base lg:text-lg leading-relaxed max-w-lg">
                Customized solutions for businesses and homes—powered by
                eco-friendly products and long-term care.
              </p>
            </div>

            {/* Postal Code Input and CTA */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
              <Input
                type="text"
                placeholder="Enter your postal code"
                className="w-full md:flex-1 text-base px-6 py-6 rounded-full border-2"
                style={{
                  borderColor: "var(--teal-dark)",
                }}
              />
              <Button
                size="lg"
                className="w-full md:w-auto text-base px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: "var(--teal-dark)",
                  color: "white",
                }}
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-md md:max-w-sm lg:max-w-lg">
              {/* Social Proof Overlay - Top Left */}
              <div className="absolute top-[20%] -left-4 md:-left-16 lg:-left-32 z-20 scale-75 md:scale-90 lg:scale-100 origin-top-left">
                <SocialProof
                  count="10,000+"
                  label="Happy Customers"
                  avatars={customerAvatars}
                />
              </div>

              {/* Image Container */}
              <div className="relative flex items-center justify-center">
                <img
                  src="/smiling-asian-woman-having-spring-clean-removebg-preview.png"
                  alt="Smiling professional cleaner ready for spring cleaning service"
                  className="w-full md:w-[90%] lg:w-[85%] h-auto object-contain drop-shadow-2xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  }}
                />
              </div>

              {/* Solid Teal Circle */}
              <div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] aspect-square rounded-full opacity-15"
                style={{ backgroundColor: "var(--teal-primary)" }}
                aria-hidden="true"
              />

              {/* Decorative Background Blur */}
              <div
                className="absolute -z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: "var(--teal-primary)" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
