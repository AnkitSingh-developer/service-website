import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Calendar, CheckCircle, CreditCard, Shield, Clock, Star, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works - UrbanServe",
  description: "Learn how to book trusted home service professionals with UrbanServe in just a few simple steps.",
}

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              How UrbanServe Works
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Booking trusted home service professionals has never been easier. Get started in just 3 simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Step 1 */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold">Choose Your Service</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Browse through our wide range of home services or use the search bar to find exactly what you need. From cleaning and repairs to beauty and wellness, we've got you covered.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">100+ services across multiple categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Transparent pricing with no hidden charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Detailed service descriptions and inclusions</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex aspect-square items-center justify-center rounded-2xl border bg-gradient-to-br from-primary/10 to-background p-8">
                <Search className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <div className="flex aspect-square items-center justify-center rounded-2xl border bg-gradient-to-br from-primary/10 to-background p-8">
                <Calendar className="h-32 w-32 text-primary" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h2 className="text-2xl font-bold">Book Your Slot</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Select your preferred date and time slot. Our professionals work around your schedule, including evenings and weekends.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Flexible scheduling - same day or plan ahead</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Real-time availability updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Add specific instructions or requirements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h2 className="text-2xl font-bold">Relax & Enjoy</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                A verified professional will arrive at your doorstep at the scheduled time. Track their arrival and pay only after you're satisfied with the service.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Background-verified professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Real-time tracking and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">Multiple payment options available</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex aspect-square items-center justify-center rounded-2xl border bg-gradient-to-br from-primary/10 to-background p-8">
                <CheckCircle className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold">Why Choose UrbanServe?</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-background p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Verified Professionals</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                All service providers are background verified and trained
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Transparent Pricing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Know the exact price upfront with no hidden charges
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">On-Time Service</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Professionals arrive on schedule, every time
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">24/7 Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our customer support team is always here to help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 rounded-2xl border bg-gradient-to-br from-primary/5 to-background p-8 md:grid-cols-2 md:p-12">
            <div>
              <CreditCard className="h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-bold">Secure Payment Options</h2>
              <p className="mt-4 text-muted-foreground">
                Pay safely through multiple secure payment methods. You only pay after the service is completed to your satisfaction.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Credit & Debit Cards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  UPI & Net Banking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Digital Wallets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Cash on Delivery
                </li>
              </ul>
            </div>
            <div>
              <Star className="h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-bold">Quality Guarantee</h2>
              <p className="mt-4 text-muted-foreground">
                Not satisfied? We offer a 7-day service guarantee. If there's an issue, we'll fix it at no extra cost.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  7-day service warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Free rework if needed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Money-back guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Insurance coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
          <h2 className="text-3xl font-bold">Ready to Book Your First Service?</h2>
          <p className="mt-4 text-primary-foreground/90">
            Join millions of happy customers who trust UrbanServe for their home service needs
          </p>
          <Link href="/services" className="mt-8 inline-block">
            <Button size="lg" variant="secondary">
              Browse Services
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

