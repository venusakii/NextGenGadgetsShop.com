"use client"

import { useState } from "react"
import { ResearchModal } from "./research-modal"

const grindSizes = [
  { symbol: "XC", name: "Extra Coarse", property: "Cold Brew", color: "bg-primary", icon: "🧊" },
  { symbol: "C", name: "Coarse", property: "French Press", color: "bg-white", icon: "🫖" },
  { symbol: "M", name: "Medium", property: "Drip Coffee", color: "bg-chart-3", icon: "💧" },
  { symbol: "MF", name: "Medium-Fine", property: "Pour Over", color: "bg-chart-2", icon: "⏱️" },
  { symbol: "F", name: "Fine", property: "Espresso", color: "bg-accent", icon: "🔥" },
  { symbol: "VF", name: "Very Fine", property: "Turkish", color: "bg-secondary", icon: "⚛️" },
  { symbol: "UF", name: "Ultra Fine", property: "Powder", color: "bg-chart-1", icon: "💨" },
  { symbol: "T", name: "Temperature", property: "Water Heat", color: "bg-chart-5", icon: "📊" },
]

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(grindSizes[0])
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-20 px-4 bg-lab-equipment">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/75 to-background/80 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Coffee Grinding <span className="text-primary">Guide</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Master grind sizes for every brewing method
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {grindSizes.map((size) => (
            <button
              key={size.symbol}
              onClick={() => setSelectedElement(size)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                selectedElement.symbol === size.symbol
                  ? `${size.color} border-primary glow-cyan scale-105`
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="text-3xl mb-1">{size.icon}</div>
              <div className="text-xl font-bold">{size.symbol}</div>
              <div className="text-xs text-muted-foreground">{size.name}</div>
            </button>
          ))}
        </div>

        {/* Element Details */}
        <div className="bg-card border border-primary/30 rounded-xl p-8 glow-cyan">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">{selectedElement.symbol}</h3>
              <p className="text-muted-foreground">{selectedElement.name}</p>
            </div>
            <div className="text-5xl">{selectedElement.icon}</div>
          </div>
          <p className="text-lg mb-4">Best for: {selectedElement.property}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary text-primary rounded-lg transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      <ResearchModal isOpen={isModalOpen} element={selectedElement.symbol} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
