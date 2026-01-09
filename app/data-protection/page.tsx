"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DataProtection() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-primary">Data Protection</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Data Protection Principles</h2>
              <p>
                NextGenGadgetsShop is committed to protecting your personal data in compliance with applicable data
                protection laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Your Rights</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to provide our services and comply with legal
                obligations. When data is no longer needed, we securely delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Transfers</h2>
              <p>
                Your personal data may be transferred to, stored in, and processed in countries other than your country
                of residence. We ensure adequate safeguards are in place for any international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Contact Us</h2>
              <p>If you have any questions or requests regarding your data protection rights, please contact us:</p>
              <p className="mt-2">Email: support@nextgengadgetsshop.com</p>
              <p>Phone: +1 (208) 839-5183</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
