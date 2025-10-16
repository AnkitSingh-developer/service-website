import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { services } from "@/lib/data/services"
import { BookingForm } from "@/components/booking-form"
import { ReviewSection } from "@/components/review-section"
import { ServiceCard } from "@/components/service-card"
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  BadgeCheck,
  Star,
  Info,
  Wrench,
  Package,
  ThumbsUp,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }
  return {
    title: `${service.title} - UrbanServe`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  // Get related services from the same category
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  // Mock data for FAQs
  const faqs = [
    {
      question: "How do I book this service?",
      answer: "Simply select your preferred date and time, fill in your address details, and confirm your booking. Our professional will arrive at the scheduled time."
    },
    {
      question: "Are your professionals verified?",
      answer: "Yes, all our professionals undergo thorough background verification, training, and regular quality checks to ensure the best service."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 7-day service guarantee. If you're not satisfied, we'll send another professional to fix the issue at no extra cost."
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer: "Yes, you can reschedule or cancel up to 2 hours before the scheduled time without any charges."
    },
    {
      question: "What safety measures are taken?",
      answer: "All professionals are fully vaccinated, wear masks, maintain social distancing, and use sanitized equipment."
    }
  ]

  // Mock service process steps
  const processSteps = [
    {
      title: "Book Online",
      description: "Choose your service, select date & time, and confirm booking"
    },
    {
      title: "Professional Assigned",
      description: "Verified professional will be assigned within 30 minutes"
    },
    {
      title: "Service Delivered",
      description: "Professional arrives on time and completes the service"
    },
    {
      title: "Payment & Review",
      description: "Pay after service completion and leave a review"
    }
  ]

  return (
    <main>
      {/* Breadcrumb */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <span>/</span>
            <Link href={`/services?category=${service.category}`} className="hover:text-foreground">
              {service.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Service Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold md:text-4xl">{service.title}</h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-muted-foreground">({service.reviews} reviews)</span>
                    </div>
                    <Badge variant="secondary">{service.category}</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div className="mb-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Service Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-8 rounded-xl border bg-muted/30 p-6">
              <h3 className="mb-4 text-xl font-semibold">Why Choose This Service?</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Verified Professionals</p>
                    <p className="text-sm text-muted-foreground">Background checked & trained</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">7-Day Guarantee</p>
                    <p className="text-sm text-muted-foreground">Free rework if needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">High Quality</p>
                    <p className="text-sm text-muted-foreground">Top-rated service quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <ThumbsUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Safe & Reliable</p>
                    <p className="text-sm text-muted-foreground">Sanitized equipment used</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <Package className="h-6 w-6" />
                What's Included
              </h2>
              <div className="rounded-xl border bg-background p-6">
                <ul className="space-y-3">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <Wrench className="h-6 w-6" />
                How It Works
              </h2>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 rounded-xl border bg-background p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Measures */}
            <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Shield className="h-6 w-6 text-primary" />
                Safety Measures
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">All professionals fully vaccinated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Masks worn at all times</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Sanitized equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Temperature checks done</span>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <Info className="h-6 w-6" />
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Reviews Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Customer Reviews</h2>
              <ReviewSection 
                serviceId={service.id} 
                serviceTitle={service.title}
                currentRating={service.rating}
                totalReviews={service.reviews}
              />
            </div>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              {/* Pricing Card */}
              <div className="rounded-xl border bg-background p-6 shadow-lg">
                <div className="mb-4 flex items-baseline justify-between">
                  <div>
                    <p className="text-3xl font-bold">${service.basePrice}</p>
                    <p className="text-sm text-muted-foreground">Starting price</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold">{service.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.reviews} reviews</p>
                  </div>
                </div>

                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Service warranty</span>
                    <span className="font-medium">7 days</span>
                  </div>
                </div>

                <div className="my-4 border-t pt-4">
                  <BookingForm serviceId={service.id} serviceTitle={service.title} />
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-3 w-3 shrink-0" />
                    You won't be charged now. Payment after service completion.
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 shrink-0" />
                    Free cancellation up to 2 hours before service
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 space-y-3 rounded-xl border bg-muted/30 p-6">
                <h3 className="font-semibold">Why Book With Us?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>50,000+ happy customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    <span>Background verified professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>100% safe & secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>7-day service guarantee</span>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-6 rounded-xl border bg-background p-6">
                <h3 className="mb-2 font-semibold">Need Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Our customer support team is available to assist you
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Related Services</h2>
              <Link
                href={`/services?category=${service.category}`}
                className="text-sm text-primary hover:underline"
              >
                View all in {service.category}
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
