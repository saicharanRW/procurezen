import { NextResponse } from "next/server"
import { getJson } from "serpapi"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get("q") || "copper wire"

  try {
    const params = {
      "engine": "amazon",
      "k": q,
      "amazon_domain": "amazon.in",
      "api_key": "e5a71b0aba626e458a164fc248dd166c7158f94d1886958f9a7a3458befb64aa"
    }

    return new Promise((resolve) => {
      getJson(params, (json) => {
        const organic_results = json.organic_results || []
        
        // Return the top 3 results
        const topResults = organic_results.slice(0, 3)
        
        if (topResults.length === 0) {
          resolve(NextResponse.json({ error: "No results found" }, { status: 404 }))
        } else {
          resolve(NextResponse.json(topResults))
        }
      })
    })
  } catch (error) {
    console.error("SerpAPI error:", error)
    return NextResponse.json({ error: "Failed to fetch search results" }, { status: 500 })
  }
}
