"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p>
                NextGenGadgetsShop ("we", "our", or "us") operates the website. This page informs you of our policies
                regarding the collection, use, and disclosure of personal data when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Personal Data (name, email address, phone number, address)</li>
                <li>Usage Data (browser type, IP address, pages visited)</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means
                to protect your Personal Data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
