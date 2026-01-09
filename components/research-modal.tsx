"use client"

interface GrindResearchData {
  symbol: string
  name: string
  property: string
  research: string
  benefits: string[]
  optimal: string
}

const grindResearchInfo: Record<string, GrindResearchData> = {
  XC: {
    symbol: "XC",
    name: "Extra Coarse",
    property: "Cold Brew",
    research:
      "Extra coarse grind is ideal for cold brew coffee. The larger particles allow for slower extraction over 12-24 hours, resulting in smooth, less acidic coffee with deep flavors.",
    benefits: ["Perfect for cold brew", "Reduces acidity", "Smooth, clean taste", "Longer shelf life"],
    optimal: "12-24 hour steep time for optimal flavor",
  },
  C: {
    symbol: "C",
    name: "Coarse",
    property: "French Press",
    research:
      "Coarse grind is essential for French press brewing. The larger particles prevent over-extraction and sediment issues, producing rich and full-bodied coffee.",
    benefits: ["Prevents over-extraction", "Rich body and flavor", "Easy cleanup", "Consistent results"],
    optimal: "4 minute steep for best extraction",
  },
  M: {
    symbol: "M",
    name: "Medium",
    property: "Drip Coffee",
    research:
      "Medium grind is the standard for drip coffee makers. It provides balanced extraction that brings out the coffee's natural flavors and aromas perfectly.",
    benefits: ["Balanced extraction", "Enhanced aroma", "Versatile brewing", "Easy preparation"],
    optimal: "3-4 minute brew time for optimal results",
  },
  MF: {
    symbol: "MF",
    name: "Medium-Fine",
    property: "Pour Over",
    research:
      "Medium-fine grind works excellently with pour over methods. It allows for controlled extraction and brings out nuanced flavors while maintaining clarity.",
    benefits: ["Enhanced flavor clarity", "Controlled extraction", "Beautiful aromatics", "Precise brewing"],
    optimal: "2-3 minute pour time for ideal extraction",
  },
  F: {
    symbol: "F",
    name: "Fine",
    property: "Espresso",
    research:
      "Fine grind is specifically designed for espresso machines. The small particles create resistance for proper pressure build-up, extracting rich crema and concentrated flavors.",
    benefits: ["Creates proper crema", "Concentrated flavor", "Rich intensity", "Balanced acidity"],
    optimal: "25-30 seconds extraction time",
  },
  VF: {
    symbol: "VF",
    name: "Very Fine",
    property: "Turkish",
    research:
      "Very fine grind, almost powder-like, is used for Turkish coffee preparation. It creates a thick, sediment-rich brew with intense, bold flavors.",
    benefits: ["Intense flavor profile", "Traditional preparation", "Thick body", "Aromatic depth"],
    optimal: "3-5 minute simmer for full extraction",
  },
  UF: {
    symbol: "UF",
    name: "Ultra Fine",
    property: "Powder",
    research:
      "Ultra fine grind produces coffee powder used in specialized brewing methods. It maximizes surface area for rapid extraction.",
    benefits: ["Maximum surface area", "Rapid extraction", "Intense flavor", "Specialty applications"],
    optimal: "30-60 second contact time",
  },
  T: {
    symbol: "T",
    name: "Temperature",
    property: "Water Heat",
    research:
      "Brewing water temperature is critical for extraction. The optimal range of 195-205°F ensures proper extraction without burning or under-extracting coffee.",
    benefits: [
      "Optimal extraction efficiency",
      "Balanced flavor development",
      "Prevents bitter notes",
      "Enhances sweetness",
    ],
    optimal: "195-205°F for best results",
  },
}

interface ResearchModalProps {
  isOpen: boolean
  element: string
  onClose: () => void
}

export function ResearchModal({ isOpen, element, onClose }: ResearchModalProps) {
  if (!isOpen) return null

  const data = grindResearchInfo[element]
  if (!data) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-card border border-primary/50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glow-cyan"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-primary/30 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">
            {data.symbol} - {data.name}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-muted-foreground text-lg">{data.property}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Brewing Guide</h3>
            <p className="text-base leading-relaxed text-foreground">{data.research}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Key Benefits</h3>
            <ul className="space-y-2">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-primary font-semibold">Optimal Brewing:</p>
            <p className="text-foreground mt-1">{data.optimal}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-primary/20 hover:bg-primary/40 border border-primary text-primary rounded-lg transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
