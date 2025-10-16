import type { Metadata } from "next"
import { services } from "@/lib/data/services"
import { ServiceCard } from "@/components/service-card"

export const metadata: Metadata = {
  title: "Browse Services",
  description: "Discover and book services from trusted pros.",
}

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string }
}) {
  const q = (searchParams?.q || "").toLowerCase()
  const category = searchParams?.category
  const filtered = services.filter((s) => {
    const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.tags.some((t) => t.includes(q))
    const matchesCategory = !category || s.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Services</h1>
        {(q || category) && (
          <p className="text-muted-foreground">
            Showing results{q ? ` for "${q}"` : ""}
            {category ? ` in ${category}` : ""}.
          </p>
        )}
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </section>

      {filtered.length === 0 && (
        <p className="mt-8 text-muted-foreground">No services found. Try a different search.</p>
      )}
    </main>
  )
}
