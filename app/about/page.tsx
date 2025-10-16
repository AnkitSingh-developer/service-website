import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Target, Heart, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - UrbanServe",
  description: "Learn about UrbanServe's mission to connect customers with trusted professionals for home services.",
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Transforming Home Services in India
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're on a mission to make quality home services accessible, reliable, and affordable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Founded in 2015, UrbanServe started with a simple observation: finding reliable home service professionals was frustratingly difficult. Customers struggled with trust issues, price transparency, and service quality, while skilled professionals had limited opportunities to grow their business.
            </p>
            <p>
              We set out to change this by creating a platform that bridges the gap between customers and service professionals. Today, we've grown into India's largest home services marketplace, serving millions of customers across major cities.
            </p>
            <p>
              Our platform has empowered thousands of professionals to build sustainable livelihoods while providing customers with convenient access to quality services at transparent prices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-background p-8">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-muted-foreground">
                To empower service professionals and provide customers with seamless access to trusted, high-quality home services across India.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-8">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-muted-foreground">
                To become the most trusted and comprehensive home services platform in India, setting the standard for quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Our Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Trust</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Building trust through verification, quality assurance, and transparent practices.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Community</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Creating opportunities and fostering growth for service professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Excellence</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Committed to delivering exceptional service quality and customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-5xl font-bold">5M+</p>
              <p className="mt-2 text-sm opacity-90">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl font-bold">10k+</p>
              <p className="mt-2 text-sm opacity-90">Verified Professionals</p>
            </div>
            <div>
              <p className="text-5xl font-bold">25+</p>
              <p className="mt-2 text-sm opacity-90">Cities Covered</p>
            </div>
            <div>
              <p className="text-5xl font-bold">100+</p>
              <p className="mt-2 text-sm opacity-90">Services Offered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Our Leadership</h2>
          <p className="mt-4 text-muted-foreground">
            Meet the team driving innovation in home services
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { name: "Amit Sharma", role: "Founder & CEO", img: "/placeholder-user.jpg" },
              { name: "Priya Patel", role: "Chief Technology Officer", img: "/placeholder-user.jpg" },
              { name: "Rahul Verma", role: "Chief Operations Officer", img: "/placeholder-user.jpg" },
            ].map((member) => (
              <div key={member.name} className="rounded-lg border bg-background p-6">
                <div className="mx-auto h-24 w-24 rounded-full bg-muted"></div>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
          <Heart className="mx-auto h-12 w-12" />
          <h2 className="mt-4 text-3xl font-bold">Join Our Journey</h2>
          <p className="mt-4 text-primary-foreground/90">
            Whether you're looking for services or want to join our network of professionals, we'd love to have you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/services">
              <Button size="lg" variant="secondary">
                Browse Services
              </Button>
            </Link>
            <Link href="/become-professional">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Become a Professional
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

