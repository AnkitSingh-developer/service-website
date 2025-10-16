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
    <form onSubmit={onSubmit} className="flex w-full items-center gap-2 rounded-md border p-2">
      <input
        aria-label="Search services"
        className="w-full bg-transparent px-2 py-2 outline-none"
        placeholder="Try 'home cleaning', 'plumber', 'salon'..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Search
      </button>
    </form>
  )
}
