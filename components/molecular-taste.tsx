export default function MolecularTaste() {
  const flavors = [
    { name: "Chocolate Notes", symbol: "C₈H₁₀O₄", color: "text-chart-4" },
    { name: "Floral Tones", symbol: "C₆H₆O", color: "text-primary" },
    { name: "Berry Bright", symbol: "C₁₂H₁₆O₆", color: "text-destructive" },
    { name: "Nutty Base", symbol: "C₁₀H₁₂O₂", color: "text-secondary" },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Molecular <span className="text-primary">Taste</span> Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          How minerals unlock flavor molecules in your perfect cup
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {flavors.map((flavor) => (
            <div
              key={flavor.name}
              className="bg-card border-2 border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div
                className={`text-5xl font-mono font-bold mb-4 ${flavor.color} group-hover:scale-110 transition-transform`}
              >
                ⚛️
              </div>
              <h3 className="font-semibold text-lg mb-2">{flavor.name}</h3>
              <div className="text-sm text-muted-foreground font-mono">{flavor.symbol}</div>
              <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                Activated by optimal mineral balance
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
