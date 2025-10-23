import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - UrbanServe",
  description: "Transparent pricing for all services",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "₹0",
      description: "Perfect for occasional service needs",
      features: [
        "Book any service",
        "Standard pricing",
        "Customer support",
        "Service guarantee",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "₹499",
      period: "/month",
      description: "Best for regular service users",
      features: [
        "All Basic features",
        "10% discount on all services",
        "Priority booking",
        "Priority support",
        "Free rescheduling",
        "Extended warranty",
      ],
      cta: "Subscribe Now",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For businesses and property managers",
      features: [
        "All Premium features",
        "Custom pricing",
        "Dedicated account manager",
        "Bulk booking discounts",
        "Custom SLA",
        "Invoice management",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary shadow-lg" : ""}
            >
              {plan.popular && (
                <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="font-semibold">How does the subscription work?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe monthly and get 10% off on all services plus priority booking. Cancel anytime.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="font-semibold">Do I need a subscription to book services?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No, you can book services without a subscription at standard pricing.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="font-semibold">What payment methods do you accept?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We accept all major credit/debit cards, UPI, net banking, and digital wallets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



