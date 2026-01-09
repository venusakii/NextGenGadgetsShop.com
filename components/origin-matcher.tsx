"use client"

import { useState } from "react"
import Link from "next/link"

const coffeeTypes = [
  { name: "Espresso", color: "from-secondary to-secondary/50", profile: "Bold, Rich, Intense" },
  { name: "Pour Over", color: "from-accent to-accent/50", profile: "Clean, Bright, Nuanced" },
  { name: "French Press", color: "from-destructive to-destructive/50", profile: "Full Body, Smooth" },
  { name: "Cold Brew", color: "from-chart-4 to-chart-4/50", profile: "Smooth, Sweet, Refreshing" },
]

const accessories = [
  { name: "Burr Grinder", icon: "⚙️", type: "Essential" },
  { name: "Gooseneck Kettle", icon: "🫖", type: "Precision" },
  { name: "Filters & Drippers", icon: "🧾", type: "Equipment" },
  { name: "Milk Frother", icon: "🥛", type: "Specialty" },
]

export default function OriginMatcher() {
  const [selectedType, setSelectedType] = useState(coffeeTypes[0])
  const [selectedAccessory, setSelectedAccessory] = useState(accessories[0])

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Coffee Style <span className="text-secondary">Accessory Matcher</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Find the perfect tools for your brewing style</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Coffee Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Coffee Style</h3>
            <div className="space-y-3">
              {coffeeTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelectedType(type)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedType.name === type.name
                      ? "border-primary bg-gradient-to-r " + type.color + " glow-cyan"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold">{type.name}</div>
                  <div className="text-sm text-muted-foreground">{type.profile}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Recommended Accessories</h3>
            <div className="space-y-3">
              {accessories.map((acc) => (
                <button
                  key={acc.name}
                  onClick={() => setSelectedAccessory(acc)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedAccessory.name === acc.name
                      ? "border-secondary bg-secondary/20 glow-purple"
                      : "border-border bg-card hover:border-secondary/50"
                  }`}
                >
                  <div className="text-2xl mb-1">{acc.icon}</div>
                  <div className="font-semibold">{acc.name}</div>
                  <div className="text-sm text-muted-foreground">{acc.type}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8 text-center glow-cyan">
          <h3 className="text-2xl font-bold mb-2">Your Perfect Setup</h3>
          <p className="text-muted-foreground mb-4">
            {selectedType.name} + {selectedAccessory.name}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {["Grinder: Burr", "Temperature: 195-205°F", "Time: 2-4 min", "Ratio: 1:16"].map((spec) => (
              <div key={spec} className="bg-card/50 rounded-lg p-3 border border-primary/20">
                <div className="text-sm text-primary font-mono">{spec}</div>
              </div>
            ))}
          </div>
          <Link
            href="/grinders"
            className="inline-block px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
