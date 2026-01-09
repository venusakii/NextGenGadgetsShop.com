"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-primary">Cookie Policy</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. What Are Cookies</h2>
              <p>
                Cookies are small files that are stored on your browser or device when you visit our website. They help
                us remember your preferences and analyze your usage patterns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how visitors use our website
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to track visitors across websites
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Managing Cookies</h2>
              <p>
                You can control and manage cookies in your browser settings. Most browsers allow you to refuse cookies
                or alert you when cookies are being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us:</p>
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
