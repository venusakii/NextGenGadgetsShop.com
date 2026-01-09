"use client"

import { useState } from "react"
import Link from "next/link"
import { Star } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Precision Burr Grinder",
    price: "$129.99",
    rating: 4.8,
    reviews: 324,
    specs: "40 Grind Settings",
    description: "Professional burr grinding for espresso to French press",
    badge: "Best Seller",
    image: "/ethiopian-pack.jpg",
    slug: "precision-burr-grinder",
  },
  {
    id: 2,
    name: "Gooseneck Kettle Pro",
    price: "$79.99",
    rating: 4.6,
    reviews: 189,
    specs: "0.8L Capacity",
    description: "Precision temperature control for perfect water heating",
    badge: "New",
    image: "/south-american-set.jpg",
    slug: "gooseneck-kettle-pro",
  },
  {
    id: 3,
    name: "Espresso Maker Deluxe",
    price: "$199.99",
    rating: 4.9,
    reviews: 456,
    specs: "9 Bar Pressure",
    description: "Premium espresso machine with steam wand",
    badge: "Premium",
    image: "/asian-terroir.jpg",
    slug: "espresso-maker-deluxe",
  },
  {
    id: 4,
    name: "Complete Coffee Kit",
    price: "$349.99",
    rating: 4.7,
    reviews: 203,
    specs: "All-In-One",
    description: "Everything needed for the ultimate coffee setup",
    badge: "Complete Set",
    image: "/custom-blend.jpg",
    slug: "complete-coffee-kit",
  },
]

export default function ProductCards() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Coffee <span className="text-secondary">Accessories</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Premium equipment and accessories for coffee enthusiasts
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-card border-2 rounded-xl p-6 transition-all duration-300 ${
                hoveredId === product.id ? "border-primary/60 glow-cyan scale-105" : "border-border"
              }`}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-semibold">
                  {product.badge}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.description}</p>

              <div className="mb-3 text-sm">
                <div className="text-primary font-mono mb-2">{product.specs}</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href={`/product/${product.slug}`}
                  className="px-3 py-2 bg-primary/20 hover:bg-primary/40 text-primary text-sm rounded-lg transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
