
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-gradient-to-b from-white to-teal-light/5 section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Our Impact</Tagline>
            <h2 className="heading-lg" style={{ color: 'var(--teal-dark)' }}>Trusted by thousands</h2>
            <p style={{ color: 'var(--teal-dark)', opacity: 0.8 }}>
              Delivering exceptional cleaning services and building lasting
              relationships with our valued customers.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card
              className="rounded-xl border-none p-6 shadow-md"
              style={{
                background: 'linear-gradient(135deg, var(--teal-dark), var(--teal-primary))',
                boxShadow: '0 4px 20px rgba(92, 142, 133, 0.3)'
              }}
            >
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3
                  className="font-semibold"
                  style={{ color: 'white' }}
                >
                  Cleans Completed
                </h3>
                <span
                  className="text-3xl font-semibold md:text-4xl"
                  style={{ color: 'white' }}
                >
                  50,000+
                </span>

                <p
                  className="text-base"
                  style={{ color: 'white', opacity: 0.9 }}
                >
                  Professional cleaning services delivered across homes and businesses
                </p>
              </CardContent>
            </Card>

            <Card
              className="rounded-xl border-none p-6 shadow-md"
              style={{
                background: 'linear-gradient(135deg, var(--teal-dark), var(--teal-primary))',
                boxShadow: '0 4px 20px rgba(92, 142, 133, 0.3)'
              }}
            >
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3
                  className="font-semibold"
                  style={{ color: 'white' }}
                >
                  Happy Customers
                </h3>
                <span
                  className="text-3xl font-semibold md:text-4xl"
                  style={{ color: 'white' }}
                >
                  10,000+
                </span>
                <p
                  className="text-base"
                  style={{ color: 'white', opacity: 0.9 }}
                >
                  Families and businesses trust us with their cleaning needs
                </p>
              </CardContent>
            </Card>

            <Card
              className="rounded-xl border-none p-6 shadow-md"
              style={{
                background: 'linear-gradient(135deg, var(--teal-dark), var(--teal-primary))',
                boxShadow: '0 4px 20px rgba(92, 142, 133, 0.3)'
              }}
            >
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3
                  className="font-semibold"
                  style={{ color: 'white' }}
                >
                  Customer Rating
                </h3>
                <span
                  className="text-3xl font-semibold md:text-4xl"
                  style={{ color: 'white' }}
                >
                  4.8/5
                </span>
                <p
                  className="text-base"
                  style={{ color: 'white', opacity: 0.9 }}
                >
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
