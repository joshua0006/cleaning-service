
import { CalendarCheck, Clock, Sparkles, Home } from "lucide-react";

export function FeatureSection9() {
  return (
    <section
      className="relative py-8 overflow-hidden"
      style={{ background: 'var(--teal-primary)' }}
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 className="heading-lg text-white">
            Book your cleaning in minutes
          </h2>
          <p className="text-white/90 text-base leading-relaxed">
            Simple, fast, and hassle-free booking process to get your home
            sparkling clean.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-5 text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg"
            >
              <CalendarCheck className="h-9 w-9" style={{ color: 'var(--teal-primary)' }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-white">
                1. Choose Service
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Select your cleaning type and customize preferences
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-5 text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg"
            >
              <Clock className="h-9 w-9" style={{ color: 'var(--teal-primary)' }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-white">
                2. Pick Schedule
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Choose your preferred date, time, and frequency
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-5 text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg"
            >
              <Sparkles className="h-9 w-9" style={{ color: 'var(--teal-primary)' }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-white">
                3. Relax
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our professionals handle everything with care
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center gap-5 text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg"
            >
              <Home className="h-9 w-9" style={{ color: 'var(--teal-primary)' }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-white">
                4. Enjoy
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Come home to a spotless, fresh space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
