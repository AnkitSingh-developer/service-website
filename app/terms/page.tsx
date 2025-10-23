import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - UrbanServe",
  description: "Terms and conditions for using UrbanServe",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Terms & Conditions</h1>
          <p className="mb-8 text-muted-foreground">Last updated: October 18, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to UrbanServe. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and using our services, you accept these terms and conditions in full.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">2. Services</h2>
              <p className="text-muted-foreground">
                UrbanServe provides a platform connecting customers with service professionals. We facilitate bookings but do not directly provide the services. Service quality and execution are the responsibility of the individual professionals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                To use our services, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">4. Bookings and Payments</h2>
              <p className="text-muted-foreground mb-4">
                All bookings are subject to availability. Payment is required after service completion. Cancellation policies vary by service type and timing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">5. Service Guarantee</h2>
              <p className="text-muted-foreground">
                We offer a 7-day service guarantee on most services. If you're not satisfied, we'll arrange for rework or provide a refund according to our refund policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">6. User Conduct</h2>
              <p className="text-muted-foreground mb-4">
                Users agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the service for any illegal purpose</li>
                <li>Harass or abuse service professionals</li>
                <li>Provide false information or impersonate others</li>
                <li>Attempt to circumvent the platform for payments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                UrbanServe acts as a platform and is not liable for damages arising from services provided by professionals. Our liability is limited to the service booking amount.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">8. Privacy</h2>
              <p className="text-muted-foreground">
                Your use of our services is also governed by our Privacy Policy. Please review it to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">10. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at legal@urbanserve.com or call 1800-123-4567.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}


