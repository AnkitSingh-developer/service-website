"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Briefcase, 
  TrendingUp, 
  Shield, 
  Calendar, 
  Wallet, 
  Award,
  CheckCircle,
  Users,
  Clock
} from "lucide-react"

export default function BecomeProfessionalPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    category: "",
    experience: "",
    description: "",
    termsAccepted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions")
      return
    }
    alert("Thank you for your interest! Our team will contact you within 24-48 hours.")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      category: "",
      experience: "",
      description: "",
      termsAccepted: false,
    })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Become a Service Professional
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join India's largest network of home service professionals. Grow your business and increase your earnings with UrbanServe.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#apply">Apply Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#benefits">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Why Partner with UrbanServe?</h2>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Increase Your Income</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get access to thousands of customers and increase your monthly earnings by up to 300%
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Regular Customers</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get consistent bookings throughout the month with our large customer base
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Flexible Schedule</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Work on your own schedule. Accept bookings that fit your availability
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Quick Payments</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get paid directly to your bank account within 24-48 hours of service completion
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Training & Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Free training programs and ongoing support to help you deliver excellent service
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Insurance Coverage</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All professionals are covered with insurance for added safety and security
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
            <div>
              <p className="text-5xl font-bold">10,000+</p>
              <p className="mt-2 text-sm opacity-90">Active Professionals</p>
            </div>
            <div>
              <p className="text-5xl font-bold">₹50,000+</p>
              <p className="mt-2 text-sm opacity-90">Average Monthly Earnings</p>
            </div>
            <div>
              <p className="text-5xl font-bold">4.8★</p>
              <p className="mt-2 text-sm opacity-90">Average Professional Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Professionals */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-xl font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sign Up & Verify</h3>
              <p className="mt-2 text-muted-foreground">
                Fill out the application form below. Our team will verify your documents and schedule an interview within 2-3 business days.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-xl font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Training & Onboarding</h3>
              <p className="mt-2 text-muted-foreground">
                Complete our comprehensive training program to learn best practices, app usage, and customer service standards.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-xl font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Start Accepting Jobs</h3>
              <p className="mt-2 text-muted-foreground">
                Once approved, you'll start receiving booking requests. Accept jobs that match your schedule and skills.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Deliver & Earn</h3>
              <p className="mt-2 text-muted-foreground">
                Complete services, collect ratings, and get paid directly to your bank account. Build your reputation and grow your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold">Requirements</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="font-semibold">Basic Requirements</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Age: 18 years or above
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Valid government-issued ID proof
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Bank account for payments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Smartphone with internet access
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="font-semibold">Professional Requirements</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Relevant skills and experience in your category
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Professional tools and equipment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Good communication skills
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Commitment to quality service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Apply Now</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we'll get back to you within 24-48 hours
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-2xl border bg-background p-8">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g., Mumbai"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Service Category *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cleaning">Home Cleaning</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="salon">Salon & Beauty</SelectItem>
                    <SelectItem value="appliance">Appliance Repair</SelectItem>
                    <SelectItem value="pest">Pest Control</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience *</Label>
              <Input
                id="experience"
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g., 5 years"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Tell us about your skills and experience</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your expertise, certifications, and what makes you a great service professional..."
                rows={5}
              />
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
              />
              <label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I agree to the terms and conditions and consent to background verification
              </label>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl font-bold">Success Stories</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex text-yellow-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Since joining UrbanServe, my monthly income has tripled. I get consistent bookings and the payment is always on time."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Ramesh Kumar</p>
                  <p className="text-xs text-muted-foreground">Plumber, Delhi</p>
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
                "The platform is easy to use and the training helped me improve my service quality. Customers appreciate my work!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Sunita Patil</p>
                  <p className="text-xs text-muted-foreground">Beautician, Mumbai</p>
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
                "Best decision I made for my business. UrbanServe provides constant support and I can work on my own schedule."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <p className="font-medium">Vikram Singh</p>
                  <p className="text-xs text-muted-foreground">Electrician, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

