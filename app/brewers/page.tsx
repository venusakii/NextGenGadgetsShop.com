"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BrewersPage() {
  const brewers = [
    {
      id: 1,
      slug: "espresso-machine-pro",
      name: "Espresso Machine Pro",
      price: "$599.99",
      description: "Professional espresso machine for home use",
      image: "/product-4.jpg",
      rating: 4.9,
    },
    {
      id: 2,
      slug: "pour-over-kettle",
      name: "Pour Over Kettle",
      price: "$89.99",
      description: "Gooseneck kettle with temperature control",
      image: "/product-5.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      slug: "french-press-classic",
      name: "French Press Classic",
      price: "$44.99",
      description: "Traditional French press, 34 oz capacity",
      image: "/product-6.jpg",
      rating: 4.6,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">Coffee Brewers</h1>
          <p className="text-muted-foreground mb-12">All brewing methods for perfect extraction</p>

          <div className="grid md:grid-cols-3 gap-8">
            {brewers.map((product) => (
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
