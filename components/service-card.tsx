import Link from "next/link"
import type { Service } from "@/lib/types"

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col rounded-lg border overflow-hidden">
      <img
        src={service.image || "/placeholder.svg?height=360&width=640&query=service image"}
        alt={service.title}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold line-clamp-2">{service.title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{service.description}</p>
        <div className="mt-auto flex items-center justify-between text-xs sm:text-sm">
          <span className="font-medium">₹{service.basePrice}</span>
          <span className="text-muted-foreground">{service.rating} ★</span>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-xs sm:text-sm font-medium text-primary-foreground"
        >
          View details
        </Link>
      </div>
    </article>
  )
}
