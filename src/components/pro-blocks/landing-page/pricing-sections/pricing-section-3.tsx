
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";

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
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <Tagline>Pricing</Tagline>
            {/* Main Title */}
            <h2
              id="pricing-section-title-3"
              className="heading-lg text-foreground"
            >
              Pricing plans crafted to meet your needs
            </h2>
          </div>

          {/* Two-Column Side-by-Side Pricing Cards - Stacks on mobile */}
          <div className="flex w-full flex-col items-center gap-4 md:max-w-3xl md:flex-row md:gap-0">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-6 shadow-none sm:p-12 md:rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl md:border-r-0 ${
                  plan.highlighted
                    ? "shadow-[0px_0px_0px_6px_rgba(7,46,106,0.05)] md:rounded-xl md:border-r-1"
                    : ""
                }`}
              >
                {/* Card Content Container */}
                <CardContent className="flex flex-col gap-8 p-0">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description Block */}
                    <div className="relative flex flex-col gap-3">
                      <h3
                        className={`text-lg font-semibold ${
                          plan.highlighted ? "text-primary" : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex items-end gap-0.5">
                      <span className="text-4xl font-semibold">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground text-base">
                        {pricingData.plans[index].period ?? "/month"}
                      </span>
                    </div>

                    {/* Call-to-Action Button */}
                    <Button
                      variant={
                        plan.variant as VariantProps<
                          typeof buttonVariants
                        >["variant"]
                      }
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header with Plan Inheritance */}
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${
                            pricingData.plans[index - 1].name
                          }, plus:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="text-primary h-5 w-5" />
                          <span className="text-muted-foreground flex-1 text-sm">
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="text-muted-foreground h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
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
