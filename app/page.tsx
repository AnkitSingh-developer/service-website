import Link from "next/link"
import type { Metadata } from "next"
import { CategoryGrid } from "@/components/category-grid"
import { HeroSearch } from "@/components/hero-search"
import { services } from "@/lib/data/services"
import { ServiceCard } from "@/components/service-card"
import { categories } from "@/lib/data/categories"

export const metadata: Metadata = {
  title: "Home Services Marketplace",
  description: "Book trusted professionals for home services.",
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-5xl">
                Find trusted professionals for any home service
              </h1>
              <p className="text-muted-foreground">Compare options, check ratings, and book at your convenience.</p>
              <HeroSearch />
              <div className="flex items-center gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
                >
                  Explore services
                </Link>
                <Link href="#categories" className="inline-flex items-center rounded-md border px-4 py-2">
                  Browse categories
                </Link>
              </div>
              <p className="sr-only">Use the search to find services like cleaning, painting, plumbing, and more.</p>
            </div>
            <div className="rounded-lg border p-4 md:p-6">
              <img
                src="https://media.istockphoto.com/id/169270269/photo/plumbers-working-on-pipes-under-sink.jpg?s=2048x2048&w=is&k=20&c=GCXUwi_A9pFFCsCkGbJXG4bHR8gKhdB4YdczrL9WroM="
                alt="Booking a trusted professional through the app"
                className="aspect-video w-full rounded-md object-cover"
              />
              <p className="mt-3 text-sm text-muted-foreground">Real app screenshot example.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Categories */}
      <section id="categories" className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-balance text-2xl font-semibold">Popular categories</h2>
          <Link href="/services" className="text-primary underline-offset-4 hover:underline">
            See all
          </Link>
        </div>
        <CategoryGrid items={categories} />
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-balance text-2xl font-semibold">Featured services</h2>
          <Link href="/services" className="text-primary underline-offset-4 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-balance text-2xl font-semibold">How it works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <div className="mb-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium">1</div>
            <h3 className="font-medium">Search or browse</h3>
            <p className="text-sm text-muted-foreground">Find services by category, keywords, or top picks near you.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium">2</div>
            <h3 className="font-medium">Compare and select</h3>
            <p className="text-sm text-muted-foreground">
              Check prices, ratings, and what’s included. Choose what fits your needs.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium">3</div>
            <h3 className="font-medium">Book instantly</h3>
            <p className="text-sm text-muted-foreground">Pick date and time. Pros confirm, you pay after service.</p>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">Why customers trust us</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center backdrop-blur">
            <p className="text-4xl font-bold">4.7★</p>
            <p className="mt-2 text-sm opacity-90">Average rating</p>
          </div>
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center backdrop-blur">
            <p className="text-4xl font-bold">1,000+</p>
            <p className="mt-2 text-sm opacity-90">Verified professionals</p>
          </div>
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center backdrop-blur">
            <p className="text-4xl font-bold">50k+</p>
            <p className="mt-2 text-sm opacity-90">Bookings completed</p>
          </div>
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center backdrop-blur">
            <p className="text-4xl font-bold">100%</p>
            <p className="mt-2 text-sm opacity-90">Transparent pricing</p>
          </div>
        </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 rounded-2xl border bg-gradient-to-br from-primary/10 to-background p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-balance text-2xl font-semibold md:text-3xl">Download our app</h2>
            <p className="mt-4 text-muted-foreground">
              Get the best experience with our mobile app. Book services on the go, track professionals in real-time, and enjoy exclusive app-only deals.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg border bg-background px-6 py-3 transition-colors hover:bg-muted"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg border bg-background px-6 py-3 transition-colors hover:bg-muted"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-2xl bg-muted/50 md:h-80 md:w-80">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">App Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">What our customers say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex text-yellow-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Excellent service! The professional arrived on time and did a fantastic job with my home cleaning. Highly recommend!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex text-yellow-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "The plumber was very skilled and fixed the issue quickly. Great platform for finding trusted professionals."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Rajesh Kumar</p>
                  <p className="text-xs text-muted-foreground">Delhi</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex text-yellow-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Easy booking process and transparent pricing. The salon service at home was top-notch. Will use again!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Anjali Verma</p>
                  <p className="text-xs text-muted-foreground">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">Ready to get started?</h2>
          <p className="mt-4 text-primary-foreground/90">
            Join thousands of satisfied customers who trust us for their home service needs
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-background px-8 py-3 font-medium text-primary transition-colors hover:bg-background/90"
            >
              Browse Services
            </Link>
            <Link
              href="/become-professional"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Become a Professional
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
