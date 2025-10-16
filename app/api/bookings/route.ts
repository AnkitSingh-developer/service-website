import { NextResponse } from "next/server"

type Booking = {
  id: string
  serviceId: string
  date: string
  time: string
  notes?: string
  createdAt: string
}

// Simple in-memory store for demo purposes only.
const bookings: Booking[] = []

export async function POST(req: Request) {
  const body = await req.json()
  const { serviceId, date, time, notes } = body || {}
  if (!serviceId || !date || !time) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }
  const booking: Booking = {
    id: `b_${Math.random().toString(36).slice(2, 8)}`,
    serviceId,
    date,
    time,
    notes,
    createdAt: new Date().toISOString(),
  }
  bookings.push(booking)
  return NextResponse.json({ ok: true, booking })
}
