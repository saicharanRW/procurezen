"use client"

import type React from "react"

import useSWR from "swr"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

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
  query?: string
}

const fetcher = (url: string) => fetch(url).then((r) => {
  if (!r.ok) {
    throw new Error(`HTTP error! status: ${r.status}`)
  }
  return r.json() as Promise<Product[]>
})

export function SearchSection() {
  const [input, setInput] = useState("")
  const [query, setQuery] = useState<string | null>(null)

  const { data, isLoading, error } = useSWR<Product[]>(
    () => (query ? `/api/search?q=${encodeURIComponent(query)}` : null),
    fetcher,
    { revalidateOnFocus: false },
  )

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = input.trim()
    if (!q) return
    setQuery(q)
  }

  return (
    <section className="mx-auto max-w-3xl">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-lg border bg-card p-2 shadow-sm"
        aria-label="Product Search"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search products (e.g., copper wire)"
          className="flex-1 bg-transparent"
          aria-label="Search query"
        />
        <Button type="submit">Search</Button>
      </form>

      <div className="mt-6">
        {isLoading && query && <div className="text-center text-sm text-muted-foreground">Loading results…</div>}
        {error && <div className="text-center text-sm text-destructive">Something went wrong. Please try again.</div>}
        {data && (
          <div className="flex flex-col gap-4">
            {data.map((product, index) => (
              <ProductCard key={product.asin || index} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
