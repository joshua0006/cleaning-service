
import { CalendarCheck, Clock, Sparkles, Home } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection9() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>How it works</Tagline>
          <h2 className="heading-lg text-foreground">
            Book your cleaning in minutes
          </h2>
          <p className="text-muted-foreground text-base">
            Simple, fast, and hassle-free booking process to get your home
            sparkling clean.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <CalendarCheck className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Choose Service</h3>
              <p className="text-muted-foreground">
                Select your cleaning type and customize preferences
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Clock className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Pick Schedule</h3>
              <p className="text-muted-foreground">
                Choose your preferred date, time, and frequency
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Sparkles className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Relax</h3>
              <p className="text-muted-foreground">
                Our professionals handle everything with care
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Home className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Enjoy</h3>
              <p className="text-muted-foreground">
                Come home to a spotless, fresh space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
