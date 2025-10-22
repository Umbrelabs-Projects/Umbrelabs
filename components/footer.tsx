"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Heart
} from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/umbrelabs-high-resolution-logo-transparent.png"
                  alt="Umbrelabs Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Umbrelabs
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your all-in-one partner for digital transformation. From idea to execution,
              we deliver comprehensive solutions across technology, design, and business domains.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-amber-50 hover:border-amber-200"
                onClick={() => window.open('https://facebook.com/theumbrelabs', '_blank')}
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-amber-50 hover:border-amber-200"
                onClick={() => window.open('https://twitter.com/theumbrelabs', '_blank')}
                title="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-amber-50 hover:border-amber-200"
                onClick={() => window.open('https://linkedin.com/company/umbrelabs', '_blank')}
                title="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-amber-50 hover:border-amber-200"
                onClick={() => window.open('https://instagram.com/theumbrelabs', '_blank')}
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@umbrelabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-border/50" />

      {/* Bottom Footer */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Umbrelabs. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for digital innovation.</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="hover:bg-amber-50 hover:border-amber-200"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}