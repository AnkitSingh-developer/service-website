"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useState } from "react"

export function HeroSearch() {
  const router = useRouter()
  const [q, setQ] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (q.trim()) params.set("q", q.trim())
    router.push(`/services?${params.toString()}`)
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full items-center gap-1 sm:gap-2 rounded-md border p-1.5 sm:p-2">
      <input
        aria-label="Search services"
        className="w-full bg-transparent px-1.5 sm:px-2 py-1.5 sm:py-2 outline-none text-sm sm:text-base"
        placeholder="Try 'home cleaning', 'plumber'..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center rounded-md bg-primary px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground"
      >
        <span className="hidden sm:inline">Search</span>
        <span className="sm:hidden">🔍</span>
      </button>
    </form>
  )
}
