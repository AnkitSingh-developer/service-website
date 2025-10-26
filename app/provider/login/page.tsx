"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, Briefcase, ArrowLeft } from "lucide-react"

export default function ProviderLoginPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // Redirect to provider dashboard
      window.location.href = '/provider/dashboard'
    }, 1000)
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/login" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Customer Login
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Service Provider Login</h1>
              <p className="text-muted-foreground">Access your professional dashboard</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Provider Login
            </CardTitle>
            <CardDescription>Login to manage your bookings and earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login as Provider"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don't have a provider account?{" "}
                <Link href="/become-professional" className="text-primary hover:underline">
                  Apply to become a provider
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <div className="rounded-lg border bg-muted/30 p-4">
            <h3 className="font-semibold text-sm mb-2">Provider Benefits</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Flexible Schedule</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Quick Payments</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Regular Customers</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Training Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
