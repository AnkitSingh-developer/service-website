import type { Metadata } from "next"
import { services } from "@/lib/data/services"
import { ServiceCard } from "@/components/service-card"
import { categories } from "@/lib/data/categories"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Browse Services",
  description: "Discover and book services from trusted pros.",
}

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string; subcategory?: string }
}) {
  const q = (searchParams?.q || "").toLowerCase()
  const category = searchParams?.category
  const subcategory = searchParams?.subcategory
  
  const filtered = services.filter((s) => {
    const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.tags.some((t) => t.includes(q))
    const matchesCategory = !category || s.category === category
    const matchesSubcategory = !subcategory || s.subCategory === subcategory
    return matchesQuery && matchesCategory && matchesSubcategory
  })

  return (
    <main className="mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-8">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">Services</h1>
        {(q || category || subcategory) && (
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Showing results{q ? ` for "${q}"` : ""}
            {category ? ` in ${category}` : ""}
            {subcategory ? ` - ${subcategory}` : ""}.
          </p>
        )}
      </header>

      {/* Subcategory Filters */}
      {!q && !category && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Browse by subcategory</h2>
          <div className="flex flex-wrap gap-3">
            {categories.slice(0, 8).map((cat) => 
              cat.subCategories?.slice(0, 2).map((subcat) => (
                <Link
                  key={subcat.id}
                  href={`/services?subcategory=${subcat.title}`}
                >
                  <Badge 
                    variant={subcategory === subcat.title ? "default" : "outline"}
                    className="px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
                  >
                    {cat.emoji} {subcat.title}
                  </Badge>
                </Link>
              ))
            )}
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-xl font-semibold">
          {subcategory ? `${subcategory} Services` : category ? `${category} Services` : 'All Services'}
        </h2>
        <p className="text-sm text-muted-foreground">{filtered.length} service{filtered.length !== 1 ? 's' : ''} found</p>
      </div>

      {/* Services Grid */}
      {filtered.length > 0 ? (
        <section className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </section>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No services found</h3>
          <p className="text-muted-foreground mb-6">
            {q ? `No services found for "${q}".` : 'No services found with the current filters.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse All Services
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}
