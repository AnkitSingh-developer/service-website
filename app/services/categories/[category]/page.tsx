import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { categories } from "@/lib/data/categories"
import { services } from "@/lib/data/services"
import { ServiceCard } from "@/components/service-card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.category)
  if (!category) {
    return {
      title: "Category Not Found",
    }
  }
  return {
    title: `${category.title} Services - UrbanServe`,
    description: category.description || `Browse ${category.title} services`,
  }
}

export default function CategoryPage({ params, searchParams }: { params: { category: string }, searchParams: { subcategory?: string } }) {
  const category = categories.find((c) => c.slug === params.category)
  if (!category) return notFound()

  const subcategoryFilter = searchParams.subcategory

  let filtered = services.filter((s) => s.category === category.title)
  
  if (subcategoryFilter) {
    const subcategory = category.subCategories?.find(sc => sc.slug === subcategoryFilter)
    if (subcategory) {
      filtered = filtered.filter((s) => s.subCategory === subcategory.title)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{category.title}</span>
          </nav>
        </div>
      </section>

      {/* Category Header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl" aria-hidden>{category.emoji}</span>
            <div>
              <h1 className="text-4xl font-bold">{category.title}</h1>
              <p className="mt-2 text-muted-foreground">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Sub-categories Filter */}
        {category.subCategories && category.subCategories.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Browse by Sub-category</h2>
            <div className="flex flex-wrap gap-3">
              <Link href={`/services/categories/${params.category}`}>
                <Badge 
                  variant={!subcategoryFilter ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
                >
                  All {category.title}
                </Badge>
              </Link>
              {category.subCategories.map((subcat) => (
                <Link 
                  key={subcat.id} 
                  href={`/services/categories/${params.category}?subcategory=${subcat.slug}`}
                >
                  <Badge 
                    variant={subcategoryFilter === subcat.slug ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
                  >
                    {subcat.title}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Services Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-2xl font-semibold">
            {subcategoryFilter 
              ? `${category.subCategories?.find(sc => sc.slug === subcategoryFilter)?.title} Services`
              : `All ${category.title} Services`
            }
          </h2>
          <p className="text-sm text-muted-foreground">{filtered.length} service{filtered.length !== 1 ? 's' : ''} found</p>
        </div>

        {/* Services Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">{category.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground mb-6">
              {subcategoryFilter 
                ? `No services found in ${category.subCategories?.find(sc => sc.slug === subcategoryFilter)?.title} subcategory.`
                : `No services found in ${category.title} category.`
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href={`/services/categories/${params.category}`}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View All {category.title}
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}


