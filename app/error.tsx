"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <AlertCircle className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h1 className="text-2xl font-bold">Something went wrong!</h1>
          <p className="mt-2 text-muted-foreground">
            An unexpected error occurred. Please try again.
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button type="button" onClick={reset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-muted-foreground">
            If the problem persists,{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

