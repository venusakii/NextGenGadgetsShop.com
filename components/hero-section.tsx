"use client"

import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden flex items-center justify-center bg-crystals">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70 -z-10"></div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-cobalt via-background to-background -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-8 flex justify-center"></div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
          Brew the Perfect{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Cup of Coffee
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto text-balance">
          Premium coffee accessories and equipment for true enthusiasts. From grinders to brewers, elevate your coffee
          ritual.
        </p>

        <Link
          href="/accessories"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-primary via-secondary to-accent text-foreground glow-cyan hover:opacity-90"
        >
          Explore Accessories
        </Link>
      </div>
    </section>
  )
}
