import { NextResponse } from "next/server"

type Review = {
  id: string
  serviceId: string
  rating: number
  name: string
  title?: string
  comment: string
  createdAt: string
}

const reviews: Review[] = [
  {
    id: "r_1001",
    serviceId: "s2",
    rating: 5,
    name: "Arjun",
    title: "Quick and reliable",
    comment: "Arrived on time and fixed the leak in 20 minutes. Great experience.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "r_1002",
    serviceId: "s2",
    rating: 4,
    name: "Neha",
    title: "Good service",
    comment: "Transparent pricing and neat work. Took a bit longer than expected.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
  },
]

export async function GET(req: Request) {
  const url = new URL(req.url)
  const serviceId = url.searchParams.get("serviceId")
  if (!serviceId) {
    return NextResponse.json({ error: "Missing serviceId" }, { status: 400 })
  }
  const list = reviews.filter((r) => r.serviceId === serviceId)
  return NextResponse.json({ reviews: list })
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { serviceId, name, rating, title, comment } = body || {}
  if (!serviceId || !name || !comment || typeof rating !== "number") {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }
  const normalized = Math.max(1, Math.min(5, Math.round(rating)))
  const review: Review = {
    id: `r_${Math.random().toString(36).slice(2, 8)}`,
    serviceId,
    rating: normalized,
    name: String(name).slice(0, 80),
    title: title ? String(title).slice(0, 120) : undefined,
    comment: String(comment).slice(0, 2000),
    createdAt: new Date().toISOString(),
  }
  reviews.push(review)
  return NextResponse.json({ ok: true, review }, { status: 201 })
}
