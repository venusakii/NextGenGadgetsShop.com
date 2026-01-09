"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FiltersPage() {
  const filters = [
    {
      id: 1,
      slug: "paper-filters-100-pack",
      name: "Paper Filters 100 pack",
      price: "$12.99",
      description: "Premium white paper filters, size #4",
      image: "/product-7.jpg",
      rating: 4.7,
    },
    {
      id: 2,
      slug: "reusable-metal-filter",
      name: "Reusable Metal Filter",
      price: "$24.99",
      description: "Eco-friendly stainless steel mesh filter",
      image: "/product-8.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      slug: "cloth-filters-bundle",
      name: "Cloth Filters Bundle",
      price: "$19.99",
      description: "Durable cloth filters, pack of 5",
      image: "/product-9.jpg",
      rating: 4.5,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">Coffee Filters</h1>
          <p className="text-muted-foreground mb-12">Paper, metal, and cloth filters for every brewer</p>

          <div className="grid md:grid-cols-3 gap-8">
            {filters.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  
                  <Link href={`/product/${product.slug}`}>
                    <button className="px-3 py-2 bg-primary/20 hover:bg-primary/40 text-primary text-sm rounded-lg transition-colors">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
