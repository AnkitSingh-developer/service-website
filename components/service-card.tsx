import Link from "next/link"
import type { Service } from "@/lib/data/services"

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col rounded-lg border">
      <img
        src={service.image || "/placeholder.svg?height=360&width=640&query=service image"}
        alt={service.title}
        className="aspect-video w-full rounded-t-lg object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="font-medium">${service.basePrice}</span>
          <span className="text-muted-foreground">{service.rating} ★</span>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
        >
          View details
        </Link>
      </div>
    </article>
  )
}
