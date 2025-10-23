import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQs - UrbanServe",
  description: "Frequently asked questions about our services",
}

export default function FAQsPage() {
  const faqs = [
    {
      category: "Booking & Services",
      questions: [
        {
          q: "How do I book a service?",
          a: "Simply browse our services, select the one you need, choose your preferred date and time, and confirm your booking. You'll receive instant confirmation."
        },
        {
          q: "Can I reschedule or cancel my booking?",
          a: "Yes, you can reschedule or cancel up to 2 hours before the scheduled time without any charges. After that, cancellation fees may apply."
        },
        {
          q: "How long does a service take?",
          a: "Service duration varies by type. Each service page lists the estimated duration. Most basic services take 30 minutes to 2 hours."
        },
        {
          q: "Do I need to be present during the service?",
          a: "Yes, someone needs to be present to provide access and approve the work. You can designate someone else if you can't be there."
        },
      ]
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          q: "When do I need to pay?",
          a: "Payment is required after the service is completed. You'll pay based on the actual work done, not upfront."
        },
        {
          q: "Are there any hidden charges?",
          a: "No, all pricing is transparent and displayed upfront. Any additional charges will be discussed and approved by you before proceeding."
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept all major credit/debit cards, UPI, net banking, and popular digital wallets like Paytm, PhonePe, and Google Pay."
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, if you're not satisfied with the service, we offer a 7-day service guarantee with free rework or refund."
        },
      ]
    },
    {
      category: "Professionals & Quality",
      questions: [
        {
          q: "Are your professionals verified?",
          a: "Yes, all professionals undergo thorough background verification, training, and regular quality checks."
        },
        {
          q: "What if I'm not satisfied with the service?",
          a: "We offer a 7-day service guarantee. If you're not satisfied, we'll send another professional to fix the issue at no extra cost."
        },
        {
          q: "Can I request the same professional again?",
          a: "Yes, you can add professionals to your favorites and request them for future bookings."
        },
        {
          q: "What safety measures are taken?",
          a: "All professionals are fully vaccinated, wear masks, maintain social distancing, and use sanitized equipment."
        },
      ]
    },
    {
      category: "Account & Membership",
      questions: [
        {
          q: "Do I need an account to book services?",
          a: "While you can browse services without an account, you'll need to create one to complete a booking."
        },
        {
          q: "What are the benefits of membership?",
          a: "Members get priority booking, exclusive discounts, service history tracking, and personalized recommendations."
        },
        {
          q: "How do I become a service provider?",
          a: "Visit our 'Become a Professional' page, fill out the application form, and our team will contact you with next steps."
        },
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="mb-6 text-2xl font-bold">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.category}-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-4 text-muted-foreground">
            Our customer support team is here to help
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90">
              Contact Support
            </a>
            <a href="tel:18001234567" className="inline-flex items-center justify-center rounded-md border bg-background px-8 py-3 font-medium hover:bg-muted">
              Call 1800-123-4567
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


