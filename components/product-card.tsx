import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Product = {
  position: number
  asin: string
  title: string
  link: string
  thumbnail: string
  rating: number
  reviews: number
  bought_last_month?: string
  price?: string
  price_unit?: string
  offers?: string[]
  delivery?: string[]
  more_buying_choices?: string
  more_buying_choices_link?: string
}

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-shrink-0">
            <img
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              className="h-32 w-32 rounded-md bg-muted object-contain sm:h-36 sm:w-36"
            />
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-pretty text-lg font-medium text-primary underline-offset-4 hover:underline"
            >
              {product.title}
            </a>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              {product.price && <span className="font-semibold">{product.price}</span>}
              {product.price_unit && <span className="text-muted-foreground">{product.price_unit}</span>}
            </div>

            <div className="text-sm text-muted-foreground">
              {"Rating: "}
              {product.rating}
              {" ("}
              {product.reviews}
              {" reviews)"}
            </div>

            {product.bought_last_month && (
              <div className="text-sm text-muted-foreground">{product.bought_last_month}</div>
            )}

            {product.offers && product.offers.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.offers.map((offer, idx) => (
                  <Badge key={idx} variant="secondary" className="rounded-md">
                    {offer}
                  </Badge>
                ))}
              </div>
            )}

            {product.delivery && product.delivery.length > 0 && (
              <div className="pt-1">
                <div className="text-sm font-medium">Delivery</div>
                <ul className="ms-5 list-disc space-y-1 text-sm text-muted-foreground">
                  {product.delivery.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {(product.more_buying_choices || product.more_buying_choices_link) && (
              <div className="pt-1 text-sm">
                <a
                  href={product.more_buying_choices_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {product.more_buying_choices || "More buying choices"}
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
