"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { name: "Grinders", path: "/grinders" },
    { name: "Brewers", path: "/brewers" },
    { name: "Filters", path: "/filters" },
    { name: "Accessories", path: "/accessories" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3m0 2v2m0-4V3m6 6h.01M9 17h.01"
            />
          </svg>
          <span className="text-xl font-bold text-primary hidden sm:inline ml-2">NextGenGadgetsShop</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-4 text-sm text-muted-foreground">
            {categories.map((item) => (
              <Link key={item.name} href={item.path} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative hidden lg:flex"></div>

          {/* Cart */}
          <button className="relative"></button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border p-4 space-y-2">
          {categories.map((item) => (
            <Link key={item.name} href={item.path} className="block py-2 text-primary hover:text-secondary">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
