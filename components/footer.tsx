"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          

          <div>
            <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">📞 Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:support@coffeehub.com" className="hover:text-primary transition">
                  Email Us
                </a>
              </li>
              <li>
                <a href="tel:0800-COFFEE-HUB" className="hover:text-primary transition">
                  Call: 0800-COFFEE-HUB
                </a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-primary transition">
                  Contact Form
                </a>
              </li>
              <li>
                <a href="#chat" className="hover:text-primary transition">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">🔒 Privacy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Column 4: Learn */}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 grid md:grid-cols-3 gap-4 text-xs text-muted-foreground">
          <div>
            <div className="font-semibold text-foreground mb-2">📍 NextGenGadgetsShop</div>
            <p>4210 Poplar Chase Lane</p>
            <p>Boise, Idaho 83702</p>
            <p>United States</p>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">📞 Support</div>
            <a href="tel:+12088395183" className="hover:text-primary transition">
              Phone: +1 (208) 839-5183
            </a>
            <p>Email: support@coffeehub.com</p>
            <p>24/7 Live Chat Support</p>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">⭐ Commitment</div>
            <p>Premium quality coffee accessories.</p>
            <p>Expert advice and customer service.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-background border-t border-border py-4 text-center text-xs text-muted-foreground">
        <p>© 2026 NextGenGadgetsShop. All rights reserved. | Crafted for coffee lovers by coffee lovers ☕</p>
      </div>
    </footer>
  )
}
