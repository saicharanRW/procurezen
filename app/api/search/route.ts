import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get("q") || "copper wire"

  // Mocked response (single item) based on the requested query
  const data = {
    position: 21,
    asin: "B000BP7WH8",
    title: "The Hillman Group 123127 16 Gauge Copper Wire, 25-Feet, 1-Pack",
    link: "https://www.amazon.com/Hillman-Group-123127-Copper-25-Feet/dp/B000BP7WH8/",
    thumbnail: "https://m.media-amazon.com/images/I/711ate6eFjL._AC_UY218_.jpg",
    rating: 4.7,
    reviews: 520,
    bought_last_month: "50+ bought in past month",
    price: "$9.49",
    price_unit: "$0.38/feet",
    offers: ["Save more with Subscribe & Save"],
    delivery: ["FREE delivery Sat, Oct 11 on $35 of items shipped by Amazon", "Or fastest delivery Tomorrow, Oct 7"],
    more_buying_choices: "$8.69 (11 new offers)",
    more_buying_choices_link: "https://www.amazon.com/gp/offer-listing/B000BP7WH8/",
    query: q,
  }

  return NextResponse.json(data)
}
