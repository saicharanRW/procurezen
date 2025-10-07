import type { Metadata } from "next"
import { SearchSection } from "@/components/search-section"

export const metadata: Metadata = {
  title: "Amazon Product Search",
  description: "Search Amazon products with a clean UI (mocked)",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-balance text-center text-2xl font-semibold sm:text-3xl">Amazon Product Search</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Enter a product name and view a neat product card with pricing, rating, delivery, and more.
        </p>
      </header>

      <SearchSection />
    </main>
  )
}
