import Link from "next/link"

type Category = {
  id: string
  title: string
  slug: string
  emoji?: string
}

export function CategoryGrid({ items }: { items: Category[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((c) => (
        <Link
          key={c.id}
          href={`/services?category=${encodeURIComponent(c.title)}`}
          className="group rounded-lg border p-4 transition-colors hover:border-primary"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{c.title}</h3>
            <span aria-hidden className="text-2xl">
              {c.emoji ?? "🧰"}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Browse {c.title.toLowerCase()} services</p>
          <p className="sr-only">{`Open ${c.title} services`}</p>
        </Link>
      ))}
    </div>
  )
}
