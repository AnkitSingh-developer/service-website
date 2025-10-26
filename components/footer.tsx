import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    forCustomers: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "All Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQs", href: "/faqs" },
    ],
    forProfessionals: [
      { name: "Become a Professional", href: "/become-professional" },
      { name: "Partner with Us", href: "/partner" },
      { name: "Professional Login", href: "/professional/login" },
      { name: "Training", href: "/training" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Safety", href: "/safety" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  }

  const popularServices = [
    { name: "Home Cleaning", href: "/services?category=Home Cleaning" },
    { name: "Plumbing", href: "/services?category=Plumbing" },
    { name: "Electrical", href: "/services?category=Electrical" },
    { name: "Painting", href: "/services?category=Painting" },
    { name: "Salon at Home", href: "/services?category=Salon at Home" },
    { name: "Pest Control", href: "/services?category=Pest Control" },
  ]

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xl font-bold">H</span>
              </div>
              <span className="text-xl font-bold">Helpguru</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              India's largest home services platform. Book trusted professionals for cleaning, repairs, beauty services, and more.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>support@helpguru.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">For Customers</h3>
            <ul className="space-y-3">
              {footerLinks.forCustomers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">For Professionals</h3>
            <ul className="space-y-3">
              {footerLinks.forProfessionals.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Services */}
        <div className="mt-12 border-t pt-8">
          <h3 className="mb-4 text-sm font-semibold">Popular Services</h3>
          <div className="flex flex-wrap gap-2">
            {popularServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Helpguru. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-primary">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

