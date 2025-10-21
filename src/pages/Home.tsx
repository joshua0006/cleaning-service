import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function Home() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <section id="testimonials">
        <TestimonialsSection1
          quote="Athena has been a game-changer for our household. The cleaning is consistently excellent, and the team is always reliable. Highly recommended!"
          authorName="David Park"
          authorRole="Homeowner, Singapore"
          avatarSrc="/DavidPark.png"
        />
      </section>
      <BentoGrid6 />
      <FeatureSection9 />
      <StatsSection4 />
      <TestimonialsSection1
        quote="We've been using Athena for six months and couldn't be happier. Our home is spotless every time, and their attention to detail is outstanding!"
        authorName="Monica Kurt"
        authorRole="Homeowner, Singapore"
        avatarSrc="/MonicaKurt.png"
      />
      <PricingSection3 />
      <FaqSection2 />
      <Footer1 />
    </main>
  );
}
