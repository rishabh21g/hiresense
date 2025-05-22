"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "Free",
    price: "₹0",
    description: "Perfect for students or small teams getting started.",
    features: [
      "1 Interview Room / day",
      "Basic Voice Analysis",
      "Community Support",
    ],
    cta: "Start for Free",
    href: "/auth",
  },
  {
    title: "Pro",
    price: "₹999/mo",
    description: "For startups and recruiters conducting regular interviews.",
    features: [
      "Up to 50 Interviews / month",
      "Advanced Voice & Emotion Analysis",
      "Custom Interview Questions",
      "Email Support",
    ],
    cta: "Upgrade to Pro",
    href: "https://x.com/rishabh21g",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    description: "Tailored solutions for large-scale hiring teams.",
    features: [
      "Unlimited Interviews",
      "Team Collaboration Tools",
      "Dedicated Account Manager",
      "Priority Support",
    ],
    cta: "Book a Demo",
    href: "https://x.com/rishabh21g",
  },
];

export function PricingSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-muted/40">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background to-background/90" />
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          Choose your plan
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-teal-500 to-primary bg-clip-text text-transparent mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
          Pick a plan that suits your hiring needs. No hidden fees, no nonsense.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-6 shadow-lg flex flex-col ${
                plan.highlight
                  ? "border-primary bg-background"
                  : "border-muted bg-muted/10"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}
              </div>

              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href}>
                <Button
                  className={`mt-auto ${
                    plan.highlight ? "bg-primary text-white" : ""
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
