"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p>
                By accessing and using NextGenGadgetsShop website, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                NextGenGadgetsShop website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Disclaimer</h2>
              <p>
                The materials on NextGenGadgetsShop website are provided on an 'as is' basis. NextGenGadgetsShop makes
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Limitations</h2>
              <p>
                In no event shall NextGenGadgetsShop or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit) arising out of the use or inability to use the materials
                on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
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
