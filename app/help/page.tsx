import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MessageCircle, Search, Book, CreditCard, UserCircle, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Help Center - UrbanServe",
  description: "Get help with UrbanServe services",
}

export default function HelpPage() {
  const topics = [
    {
      icon: Book,
      title: "Booking Services",
      description: "Learn how to book and manage services",
      link: "/faqs#booking",
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment methods, refunds, and invoices",
      link: "/faqs#payment",
    },
    {
      icon: UserCircle,
      title: "Account Management",
      description: "Manage your profile and preferences",
      link: "/faqs#account",
    },
    {
      icon: Settings,
      title: "Service Quality",
      description: "Information about service standards",
      link: "/faqs#quality",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">How can we help you?</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Search for answers or browse our help topics
          </p>
          
          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for help..."
                className="h-14 pl-12 pr-4 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Popular Topics</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Link key={topic.title} href={topic.link}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Quick Links</h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <Link href="/faqs" className="rounded-lg border bg-background p-6 transition-colors hover:bg-muted">
              <h3 className="font-semibold">Frequently Asked Questions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Find answers to common questions
              </p>
            </Link>
            <Link href="/how-it-works" className="rounded-lg border bg-background p-6 transition-colors hover:bg-muted">
              <h3 className="font-semibold">How It Works</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn how to use our platform
              </p>
            </Link>
            <Link href="/pricing" className="rounded-lg border bg-background p-6 transition-colors hover:bg-muted">
              <h3 className="font-semibold">Pricing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                View our transparent pricing
              </p>
            </Link>
            <Link href="/contact" className="rounded-lg border bg-background p-6 transition-colors hover:bg-muted">
              <h3 className="font-semibold">Contact Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get in touch with our team
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Still need help?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Phone className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Call Us</CardTitle>
              <CardDescription>Mon-Sun, 8 AM - 10 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:18001234567" className="font-semibold text-primary hover:underline">
                1800-123-4567
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Email Us</CardTitle>
              <CardDescription>Response within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@urbanserve.com" className="font-semibold text-primary hover:underline">
                support@urbanserve.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with support team</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}


