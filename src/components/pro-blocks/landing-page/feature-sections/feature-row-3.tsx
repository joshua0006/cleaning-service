import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Quality Cleaning",
    description:
      "Premium service with attention to every detail, ensuring spotless results every time",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Competitive rates with transparent pricing and no hidden fees",
  },
  {
    icon: Shield,
    title: "Reliable Team",
    description:
      "Trusted, background-checked professionals you can count on",
  },
];

export function FeatureRow3() {
  return (
    <section className="bg-white section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white gap-0 overflow-hidden rounded-xl border border-border border-t-4 p-0 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderTopColor: "var(--teal-primary)" }}
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--teal-primary)" }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold text-lg"
                      style={{ color: "var(--teal-dark)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
