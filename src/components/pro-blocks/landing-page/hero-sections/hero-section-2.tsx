import { Button } from "@/components/ui/button";
import { SocialProof } from "@/components/social-proof";
import { Testimonial } from "@/components/testimonial";

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
      className="relative overflow-hidden bg-gradient-to-b from-white via-teal-light/8 to-white py-8"
      aria-labelledby="hero-heading"
    >
      {/* Content Container */}
      <div className="container-padding-x container mx-auto relative z-10">
        {/* Two-Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: "var(--teal-dark)",
                  color: "white",
                }}
              >
                Subscribe Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full font-semibold border-2"
                style={{
                  borderColor: "var(--teal-dark)",
                  color: "var(--teal-dark)",
                }}
              >
                Get a Quote
              </Button>
            </div>

            {/* Testimonial */}
            <div className="mt-2">
              <Testimonial
                quote="CleanPro has been an amazing addition to my business toolkit. Managing everything from my phone allows me to stay organized and in control, even when I'm on the move. Their support team is always responsive and incredibly helpful."
                author="Sarah Wilson"
                role="3 years with CleanPro"
                avatar="https://i.pravatar.cc/150?img=5"
                highlighted="Highly recommended!"
              />
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex items-center justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg">
              {/* Social Proof Overlay - Top Left */}
              <div className="absolute top-[20%] -left-8 md:-left-32 z-20 scale-90 md:scale-100 origin-top-left">
                <SocialProof
                  count="10,000+"
                  label="Happy Customers"
                  avatars={customerAvatars}
                />
              </div>

              {/* Image Container */}
              <div className="relative">
                <img
                  src="/smiling-asian-woman-having-spring-clean-removebg-preview.png"
                  alt="Smiling professional cleaner ready for spring cleaning service"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  }}
                />
              </div>

              {/* Decorative Background Element */}
              <div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-10 blur-3xl"
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
