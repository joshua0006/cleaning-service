
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Our Impact</Tagline>
            <h2 className="heading-lg text-foreground">Trusted by thousands</h2>
            <p className="text-muted-foreground">
              Delivering exceptional cleaning services and building lasting
              relationships with our valued customers.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Cleans Completed
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  50,000+
                </span>

                <p className="text-muted-foreground text-base">
                  Professional cleaning services delivered across homes and businesses
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Happy Customers</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  10,000+
                </span>
                <p className="text-muted-foreground text-base">
                  Families and businesses trust us with their cleaning needs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Customer Rating</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  4.8/5
                </span>
                <p className="text-muted-foreground text-base">
                  Average rating from thousands of verified customer reviews
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
