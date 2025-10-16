"use client"

import type React from "react"

import { useState } from "react"

export function BookingForm({ serviceId, serviceTitle }: { serviceId: string; serviceTitle: string }) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [notes, setNotes] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId, date, time, notes }),
      })
      if (!res.ok) throw new Error("Failed to create booking")
      setMessage("Request sent! We’ll confirm shortly.")
      setDate("")
      setTime("")
      setNotes("")
    } catch (err: any) {
      setMessage(err.message ?? "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-3">
      <label className="grid gap-1 text-sm">
        <span className="text-foreground">Preferred date</span>
        <input
          required
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-md border bg-background px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-foreground">Preferred time</span>
        <input
          required
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="rounded-md border bg-background px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-foreground">Notes (optional)</span>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[80px] rounded-md border bg-background px-3 py-2"
          placeholder="Add instructions like number of rooms, materials, parking info..."
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-60"
      >
        {submitting ? "Sending..." : `Request ${serviceTitle}`}
      </button>
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  )
}
