
import { CalendarCheck, Clock, Sparkles, Home } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection9() {
  return (
    <section
      className="relative section-padding-y border-b overflow-hidden bg-blue-950"
      id="how-it-works"
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--purple-primary)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--purple-primary)' }} />
      </div>

      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12 relative z-10">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>How it works</Tagline>
          <h2 className="heading-lg text-white">
            Book your cleaning in minutes
          </h2>
          <p className="text-white/90 text-base">
            Simple, fast, and hassle-free booking process to get your home
            sparkling clean.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center group hover:scale-105 transition-transform duration-300">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg"
              style={{
                background: 'var(--purple-primary)',
                boxShadow: '0 10px 30px -5px rgba(91, 78, 246, 0.5), 0 0 0 3px rgba(91, 78, 246, 0.3)'
              }}
            >
              <CalendarCheck className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg">1. Choose Service</h3>
              <p className="text-white/80">
                Select your cleaning type and customize preferences
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center group hover:scale-105 transition-transform duration-300">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg"
              style={{
                background: 'var(--purple-primary)',
                boxShadow: '0 10px 30px -5px rgba(91, 78, 246, 0.5), 0 0 0 3px rgba(91, 78, 246, 0.3)'
              }}
            >
              <Clock className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg">2. Pick Schedule</h3>
              <p className="text-white/80">
                Choose your preferred date, time, and frequency
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center group hover:scale-105 transition-transform duration-300">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg"
              style={{
                background: 'var(--purple-primary)',
                boxShadow: '0 10px 30px -5px rgba(91, 78, 246, 0.5), 0 0 0 3px rgba(91, 78, 246, 0.3)'
              }}
            >
              <Sparkles className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg">3. Relax</h3>
              <p className="text-white/80">
                Our professionals handle everything with care
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center group hover:scale-105 transition-transform duration-300">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg"
              style={{
                background: 'var(--purple-primary)',
                boxShadow: '0 10px 30px -5px rgba(91, 78, 246, 0.5), 0 0 0 3px rgba(91, 78, 246, 0.3)'
              }}
            >
              <Home className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg">4. Enjoy</h3>
              <p className="text-white/80">
                Come home to a spotless, fresh space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
