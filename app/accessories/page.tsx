"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AccessoriesPage() {
  const accessories = [
    {
      id: 1,
      slug: "coffee-scale-digital",
      name: "Coffee Scale Digital",
      price: "$89.99",
      description: "Precision scale with timer function",
      image: "/product-10.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      slug: "milk-frother-steamer",
      name: "Milk Frother Steamer",
      price: "$79.99",
      description: "Electric milk frother for lattes",
      image: "/product-11.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      slug: "coffee-bean-storage-set",
      name: "Coffee Bean Storage Set",
      price: "$34.99",
      description: "Airtight containers for bean freshness",
      image: "/product-12.jpg",
      rating: 4.6,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">Coffee Accessories</h1>
          <p className="text-muted-foreground mb-12">Essential tools and gadgets for coffee lovers</p>

          <div className="grid md:grid-cols-3 gap-8">
            {accessories.map((product) => (
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
