"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PeriodicTable from "@/components/periodic-table"
import OriginMatcher from "@/components/origin-matcher"
import LabLive from "@/components/lab-live"
import MolecularTaste from "@/components/molecular-taste"
import ProductCards from "@/components/product-cards"
import Footer from "@/components/footer"
import CookieNotice from "@/components/cookie-notice"

export default function Home() {
  const [showCookie, setShowCookie] = useState(true)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <HeroSection />
      <PeriodicTable />
      <OriginMatcher />
      <LabLive />
      <MolecularTaste />
      <ProductCards />
      <Footer />
      {showCookie && <CookieNotice onClose={() => setShowCookie(false)} />}
    </div>
  )
}
