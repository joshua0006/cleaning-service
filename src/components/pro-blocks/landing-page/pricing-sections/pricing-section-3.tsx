
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const pricingData = {
  plans: [
    {
      name: "Basic",
      description:
        "Perfect for maintaining a clean home with regular weekly visits.",
      features: [
        { name: "Weekly 2-hour cleaning", tooltip: "Consistent weekly service" },
        {
          name: "Professional cleaners",
          tooltip: "Trained and background-checked",
        },
        { name: "Eco-friendly products", tooltip: "Safe for family and pets" },
        { name: "Satisfaction guarantee", tooltip: "100% quality assurance" },
      ],
      price: 120,
      period: "/month",
      variant: "outline",
    },
    {
      name: "Premium",
      description:
        "For those who want extra attention and comprehensive cleaning coverage.",
      features: [
        { name: "Twice weekly cleaning", tooltip: "More frequent service" },
        { name: "Monthly deep clean", tooltip: "Thorough detailed cleaning" },
        { name: "Priority scheduling", tooltip: "Book preferred time slots" },
        { name: "Same-day service", tooltip: "Last-minute availability" },
        { name: "Dedicated cleaner", tooltip: "Same professional each visit" },
      ],
      price: 220,
      period: "/month",
      variant: "default",
      highlighted: true,
    },
  ],
};

export function PricingSection3() {
  return (
    <section
      className="bg-gradient-to-b from-white via-teal-light/8 to-white py-8"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Main Title */}
            <h2
              id="pricing-section-title-3"
              className="heading-lg"
              style={{ color: 'var(--teal-dark)' }}
            >
              Pricing plans crafted to meet your needs
            </h2>
          </div>

          {/* Two-Column Side-by-Side Pricing Cards - Stacks on mobile */}
          <div className="flex w-full flex-col items-center gap-6 md:max-w-4xl md:flex-row md:items-stretch">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-teal-primary shadow-[0_0_0_2px] shadow-teal-primary/20 bg-teal-dark text-white md:scale-105"
                    : "border-teal-primary/20 hover:border-teal-primary/40"
                } w-full p-8 sm:p-10`}
              >
                {/* Most Popular Badge */}
                {plan.highlighted && (
                  <Badge className="absolute right-4 top-4 bg-gradient-to-r from-teal-primary to-teal-light border-0 text-white font-semibold px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                {/* Card Content Container */}
                <CardContent className="flex flex-col gap-6 p-0">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-4">
                    {/* Plan Title and Description Block */}
                    <div className="relative flex flex-col gap-3 pt-8">
                      <h3
                        className={`text-2xl font-bold ${
                          plan.highlighted
                            ? "text-white"
                            : "text-teal-dark"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          plan.highlighted
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex items-end gap-1">
                      <span
                        className={`text-5xl font-bold ${
                          plan.highlighted ? "text-white" : "text-teal-dark"
                        }`}
                      >
                        ${plan.price}
                      </span>
                      <span
                        className={`pb-2 text-base ${
                          plan.highlighted
                            ? "text-white/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {pricingData.plans[index].period ?? "/month"}
                      </span>
                    </div>

                    {/* Call-to-Action Button */}
                    <Button
                      variant={plan.highlighted ? "secondary" : "default"}
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-white text-teal-dark hover:bg-white/90 font-semibold"
                          : "bg-teal-primary hover:bg-teal-light text-white font-semibold"
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Separator */}
                  <Separator
                    className={
                      plan.highlighted
                        ? "bg-white/20"
                        : "bg-teal-primary/20"
                    }
                  />

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header with Plan Inheritance */}
                    <p
                      className={`text-sm font-semibold ${
                        plan.highlighted ? "text-white" : "text-teal-dark"
                      }`}
                    >
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${
                            pricingData.plans[index - 1].name
                          }, plus:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check
                            className={`h-5 w-5 flex-shrink-0 ${
                              plan.highlighted
                                ? "text-teal-light"
                                : "text-teal-primary"
                            }`}
                          />
                          <span
                            className={`flex-1 text-sm ${
                              plan.highlighted
                                ? "text-white/90"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info
                                  className={`h-4 w-4 cursor-pointer transition-opacity ${
                                    plan.highlighted
                                      ? "text-white/60 hover:text-white/90"
                                      : "text-muted-foreground/60 hover:text-muted-foreground"
                                  }`}
                                />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
