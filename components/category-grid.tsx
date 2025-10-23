import Link from "next/link"
import type { Category } from "@/lib/types"

export function CategoryGrid({ items }: { items: Category[] }) {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {items.map((c) => (
        <div key={c.id} className="group relative">
          <Link
            href={`/services/categories/${c.slug}`}
            className="block rounded-lg border p-3 sm:p-4 transition-colors hover:border-primary"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base lg:text-lg font-medium">{c.title}</h3>
              <span aria-hidden className="text-lg sm:text-xl lg:text-2xl">
                {c.emoji ?? "🧰"}
              </span>
            </div>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">Browse {c.title.toLowerCase()} services</p>
            <p className="sr-only">{`Open ${c.title} services`}</p>
          </Link>
          
          {/* Subcategories dropdown */}
          {c.subCategories && c.subCategories.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-10 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border rounded-lg shadow-lg p-3">
              <div className="space-y-1">
                <Link
                  href={`/services/categories/${c.slug}`}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded transition-colors"
                >
                  <span>{c.emoji}</span>
                  All {c.title}
                </Link>
                <div className="border-t pt-1">
                  {c.subCategories.slice(0, 4).map((subcat) => (
                    <Link
                      key={subcat.id}
                      href={`/services/categories/${c.slug}?subcategory=${subcat.slug}`}
                      className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                    >
                      {subcat.title}
                    </Link>
                  ))}
                  {c.subCategories.length > 4 && (
                    <Link
                      href={`/services/categories/${c.slug}`}
                      className="block px-3 py-2 text-xs text-primary hover:bg-muted rounded transition-colors"
                    >
                      +{c.subCategories.length - 4} more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
