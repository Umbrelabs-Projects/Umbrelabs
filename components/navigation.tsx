"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/theme-provider"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav border-b border-outline-variant/60" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto w-full flex items-center justify-between px-5 sm:px-8 h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group press-scale">
          <img
            src="/logos/umbrelabs-high-resolution-logo-transparent.png"
            alt="Umbrelabs"
            className="w-8 h-8 object-contain"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = "none"
            }}
          />
          <span className="text-[1.35rem] leading-none text-on-surface" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
            Umbre<span className="text-gold">labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[0.95rem] py-1 transition-colors duration-300 ${
                  active ? "text-on-surface" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-on-surface/5 transition-all press-scale"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-on-surface text-background px-5 py-2.5 rounded-full text-[0.9rem] font-medium hover:opacity-90 transition-all press-scale"
          >
            Start a project
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-px w-6 bg-on-surface transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-px w-6 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-on-surface transition-all duration-300 ${mobileOpen ? "-rotate-45 translate-y-[-5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-outline-variant/60 px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 rounded-xl text-lg transition-colors border-l-2 ${
                  active ? "text-on-surface bg-on-surface/5 border-gold" : "text-on-surface-variant border-transparent"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-on-surface text-background px-5 py-3.5 rounded-full text-center font-medium"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  )
}
