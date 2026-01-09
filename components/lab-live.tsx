"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LabLive() {
  const [timeLeft, setTimeLeft] = useState("2:15")
  const [isStreaming, setIsStreaming] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 60)
      setTimeLeft(`${Math.floor(rand / 60)}:${(rand % 60).toString().padStart(2, "0")}`)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Live Brewing <span className="text-accent">Guide</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Watch our coffee experts demonstrate brewing techniques in real-time
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Video Feed */}
          <div className="md:col-span-2">
            <div className="relative bg-black rounded-lg overflow-hidden border-2 border-accent">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center flex-col relative">
                <Image
                  src="/lab-experiment-feed.jpg"
                  alt="Live brewing demonstration"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Semi-transparent overlay for better readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              {isStreaming && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-destructive/90 px-3 py-1 rounded-full z-10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">LIVE</span>
                </div>
              )}
            </div>
          </div>

          {/* Brewing Info */}
          <div className="space-y-4">
            <div className="bg-card border border-primary/30 rounded-lg p-6 glow-cyan">
              <h3 className="text-primary font-semibold mb-2">Today's Demo</h3>
              <p className="text-sm text-muted-foreground mb-4">Espresso Machine Mastery</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pressure:</span>
                  <span className="text-primary">9 Bar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next demo:</span>
                  <span className="text-accent font-mono">{timeLeft}</span>
                </div>
              </div>
            </div>

            <button className="w-full px-4 py-3 bg-accent/20 hover:bg-accent/40 border border-accent text-accent rounded-lg font-semibold transition-colors">
              Shop Brewing Accessories
            </button>

            <div className="bg-card/50 rounded-lg p-4 text-sm text-muted-foreground border border-border">
              <div className="text-primary font-semibold mb-2">Upcoming Demonstrations</div>
              <ul className="space-y-1">
                <li>• Pour Over Techniques</li>
                <li>• French Press Brewing</li>
                <li>• Cold Brew Mastery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
