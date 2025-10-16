"use client"

import type React from "react"

import { useState } from "react"
import useSWR, { mutate as globalMutate } from "swr"

type Review = {
  id: string
  serviceId: string
  rating: number
  name: string
  title?: string
  comment: string
  createdAt: string
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to load reviews")
  return res.json() as Promise<{ reviews: Review[] }>
}

export function ReviewSection({
  serviceId,
  serviceTitle,
  currentRating,
  totalReviews,
}: {
  serviceId: string
  serviceTitle: string
  currentRating: number
  totalReviews: number
}) {
  const { data, error, isLoading, mutate } = useSWR<{ reviews: Review[] }>(
    `/api/reviews?serviceId=${encodeURIComponent(serviceId)}`,
    fetcher,
  )

  const [name, setName] = useState("")
  const [rating, setRating] = useState<number>(5)
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId,
          name: name.trim(),
          rating,
          title: title.trim() || undefined,
          comment: comment.trim(),
        }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j?.error || "Failed to add review")
      }
      setName("")
      setRating(5)
      setTitle("")
      setComment("")
      setMessage("Thanks! Your review has been added.")
      await mutate()
      // Also update any other components that might key off the same URL.
      await globalMutate((key: string) => key?.startsWith?.("/api/reviews"))
    } catch (err: any) {
      setMessage(err?.message || "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section aria-labelledby="reviews-heading" className="grid gap-6">
      <header className="flex flex-col gap-1">
        <h2 id="reviews-heading" className="text-xl font-semibold">
          Reviews for {serviceTitle}
        </h2>
        <p className="text-sm text-muted-foreground">
          {currentRating} ★ ({totalReviews} reviews on average)
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Reviews list */}
        <div className="md:col-span-3">
          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-base font-semibold">Recent reviews</h3>
            {isLoading && <p className="text-sm text-muted-foreground">Loading reviews…</p>}
            {error && <p className="text-sm text-muted-foreground">Could not load reviews.</p>}
            {!isLoading && !error && (
              <ul className="grid gap-4">
                {data?.reviews?.length ? (
                  data.reviews.map((r) => (
                    <li key={r.id} className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{r.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {"★".repeat(Math.max(0, Math.min(5, Math.round(r.rating))))}
                        </p>
                      </div>
                      {r.title ? <p className="mt-1 font-medium">{r.title}</p> : null}
                      <p className="mt-1 text-sm text-muted-foreground">{r.comment}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleString()}</p>
                    </li>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No reviews yet. Be the first to review.</p>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Add review form */}
        <aside className="md:col-span-2">
          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-base font-semibold">Add your review</h3>
            <form onSubmit={submit} className="grid gap-3" aria-label="Add review form">
              <label className="grid gap-1 text-sm">
                <span className="text-foreground">Your name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md border bg-background px-3 py-2"
                  placeholder="Enter your name"
                />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-foreground">Rating</span>
                <select
                  required
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="rounded-md border bg-background px-3 py-2"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} {r === 1 ? "star" : "stars"}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-foreground">Title (optional)</span>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-md border bg-background px-3 py-2"
                  placeholder="Great service!"
                />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="text-foreground">Your review</span>
                <textarea
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px] rounded-md border bg-background px-3 py-2"
                  placeholder="Share details about your experience…"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit review"}
              </button>

              {message && <p className="text-sm text-muted-foreground">{message}</p>}
            </form>
          </div>
        </aside>
      </div>
    </section>
  )
}
