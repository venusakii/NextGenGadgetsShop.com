"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const allProducts = [
  // Grinders
  {
    slug: "precision-burr-grinder",
    category: "grinders",
    name: "Precision Burr Grinder",
    price: "$129.99",
    description: "Professional burr grinding for espresso to French press",
    image: "/ethiopian-pack.jpg",
    rating: 4.8,
    reviews: 324,
    fullDescription:
      "Experience precision grinding with our professional burr grinder. Features 40 adjustable grind settings from fine espresso to coarse French press. Consistent particle size ensures optimal extraction for any brewing method.",
    specifications: ["Burr Type: Conical", "Grind Settings: 40", "Capacity: 125g", "Power: 110W", "Speed: 450 RPM"],
    inStock: true,
  },
  {
    slug: "blade-grinder-ultra",
    category: "grinders",
    name: "Blade Grinder Ultra",
    price: "$79.99",
    description: "Fast and efficient blade grinding",
    image: "/product-2.jpg",
    rating: 4.5,
    fullDescription:
      "Quick and efficient blade grinder perfect for everyday coffee. Pulse button for controlled grinding, compact design ideal for any kitchen.",
    specifications: ["Type: Blade", "Capacity: 110g", "Power: 110W", "Design: Compact"],
    inStock: true,
  },
  {
    slug: "manual-ceramic-grinder",
    category: "grinders",
    name: "Manual Ceramic Grinder",
    price: "$39.99",
    description: "Portable manual grinder for travel",
    image: "/product-3.jpg",
    rating: 4.6,
    fullDescription:
      "Portable and lightweight manual grinder with ceramic burrs. Perfect for travel, camping, or office use. Adjustable grind settings and beautiful design.",
    specifications: ["Burr Type: Ceramic", "Capacity: 30g", "Material: Stainless Steel", "Weight: 300g"],
    inStock: true,
  },
  // Brewers
  {
    slug: "espresso-machine-pro",
    category: "brewers",
    name: "Espresso Machine Pro",
    price: "$599.99",
    description: "Professional espresso machine for home use",
    image: "/product-4.jpg",
    rating: 4.9,
    fullDescription:
      "Professional-grade espresso machine for home baristas. Features dual boiler system, PID temperature control, and commercial-style group head.",
    specifications: ["Boiler: Dual", "Pressure: 9 bar", "Water Capacity: 2L", "PID Control: Yes"],
    inStock: true,
  },
  {
    slug: "gooseneck-kettle-pro",
    category: "brewers",
    name: "Gooseneck Kettle Pro",
    price: "$79.99",
    description: "Precision temperature control for perfect water heating",
    image: "/south-american-set.jpg",
    rating: 4.6,
    reviews: 189,
    fullDescription:
      "Precision pour over kettle with built-in thermometer and temperature control. Perfect for pour over and manual brewing methods with gooseneck spout for precise water flow.",
    specifications: ["Capacity: 1L", "Temperature Range: 50-100°C", "Material: Stainless Steel", "Power: 1500W"],
    inStock: true,
  },
  {
    slug: "french-press-classic",
    category: "brewers",
    name: "French Press Classic",
    price: "$44.99",
    description: "Traditional French press, 34 oz capacity",
    image: "/product-6.jpg",
    rating: 4.6,
    fullDescription:
      "Classic French press design with durable borosilicate glass and stainless steel frame. Perfect for brewing full-bodied coffee.",
    specifications: [
      "Capacity: 34oz (1L)",
      "Material: Borosilicate Glass",
      "Frame: Stainless Steel",
      "Brew Time: 4 minutes",
    ],
    inStock: true,
  },
  // Filters
  {
    slug: "paper-filters-100-pack",
    category: "filters",
    name: "Paper Filters 100 pack",
    price: "$12.99",
    description: "Premium white paper filters, size #4",
    image: "/product-7.jpg",
    rating: 4.7,
    fullDescription:
      "Premium quality white paper filters specially designed for size #4 drippers. Bleached to remove impurities and ensure clean, bright coffee.",
    specifications: ["Size: #4", "Quantity: 100 filters", "Material: Premium Paper", "Bleach: Oxygen-bleached"],
    inStock: true,
  },
  {
    slug: "reusable-metal-filter",
    category: "filters",
    name: "Reusable Metal Filter",
    price: "$24.99",
    description: "Eco-friendly stainless steel mesh filter",
    image: "/product-8.jpg",
    rating: 4.8,
    fullDescription:
      "Durable stainless steel mesh filter that is reusable and eco-friendly. Perfect for reducing waste while enjoying your favorite coffee.",
    specifications: ["Material: Stainless Steel", "Mesh: Micron 100", "Compatible: Most brewers", "Lifetime: Reusable"],
    inStock: true,
  },
  {
    slug: "cloth-filters-bundle",
    category: "filters",
    name: "Cloth Filters Bundle",
    price: "$19.99",
    description: "Durable cloth filters, pack of 5",
    image: "/product-9.jpg",
    rating: 4.5,
    fullDescription:
      "Premium cloth filters that are washable and reusable. Produces a rich, full-bodied cup with natural oils retained.",
    specifications: ["Material: Organic Cotton", "Quantity: 5 filters", "Washable: Yes", "Lifetime: 1-2 years"],
    inStock: true,
  },
  // Accessories
  {
    slug: "coffee-scale-digital",
    category: "accessories",
    name: "Coffee Scale Digital",
    price: "$89.99",
    description: "Precision scale with timer function",
    image: "/product-10.jpg",
    rating: 4.8,
    fullDescription:
      "Precision digital scale with integrated timer for perfect coffee brewing. Auto-tare function and multiple weighing modes.",
    specifications: ["Capacity: 5kg", "Accuracy: 0.1g", "Timer: Built-in", "Display: LCD"],
    inStock: true,
  },
  {
    slug: "milk-frother-steamer",
    category: "accessories",
    name: "Milk Frother Steamer",
    price: "$79.99",
    description: "Electric milk frother for lattes",
    image: "/product-11.jpg",
    rating: 4.7,
    fullDescription:
      "Electric milk frother for creating barista-quality foam. Perfect for lattes, cappuccinos, and other espresso beverages.",
    specifications: ["Capacity: 250ml", "Power: 500W", "Auto-shutoff: Yes", "Material: Stainless Steel"],
    inStock: true,
  },
  {
    slug: "coffee-bean-storage-set",
    category: "accessories",
    name: "Coffee Bean Storage Set",
    price: "$34.99",
    description: "Airtight containers for bean freshness",
    image: "/product-12.jpg",
    rating: 4.6,
    fullDescription:
      "Set of 3 airtight containers to keep your coffee beans fresh. Vacuum-sealed lids and transparent design for easy monitoring.",
    specifications: [
      "Quantity: 3 containers",
      "Capacity: 500ml each",
      "Seal: Vacuum",
      "Material: Glass & Stainless Steel",
    ],
    inStock: true,
  },
  {
    slug: "complete-coffee-kit",
    category: "accessories",
    name: "Complete Coffee Kit",
    price: "$349.99",
    description: "Everything needed for the ultimate coffee setup",
    image: "/custom-blend.jpg",
    rating: 4.7,
    reviews: 203,
    fullDescription:
      "All-in-one coffee kit containing grinder, kettle, scale, filters, and more. Everything you need to start your specialty coffee journey with professional equipment.",
    specifications: [
      "Includes: 5 Premium Items",
      "Total Capacity: Multiple",
      "Material: Stainless Steel & Glass",
      "Warranty: 2 Years",
    ],
    inStock: true,
  },
]

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string

  const product = allProducts.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, the product you're looking for doesn't exist.</p>
            <Link href="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/${product.category}`} className="text-primary hover:underline mb-8 inline-block">
            Back to {product.category}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
              <div className="mb-4">
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(product.rating) ? "text-accent" : "text-muted-foreground"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">{product.fullDescription}</p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => window.open(`https://www.amazon.com/s?k=${product.name}`, "_blank")}
                className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-colors mb-4"
              >
                Buy on Amazon
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
