"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Zap, Users, Rocket, Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Portfolio", href: "/portfolio", icon: Zap },
  { name: "Contact", href: "/contact", icon: Rocket },
]

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [pendingPath, setPendingPath] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setPendingPath(null) // reset pending highlight after navigation

    if (pathname === "/") {
      setActiveSection("hero")
    } else {
      setActiveSection(pathname.replace("/", "") || "hero")
    }

    const handleScroll = () => {
      if (pathname === "/") {
        const scrollY = window.scrollY + 120
        const sections = ["hero", "services", "benefits", "cta"]
        let current = "hero"
        for (const id of sections) {
          const el = document.getElementById(id)
          if (el) {
            const top = el.offsetTop
            const bottom = top + el.offsetHeight
            if (scrollY >= top && scrollY < bottom) {
              current = id
              break
            }
          }
        }
        setActiveSection(current)
      }
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const navigateToPage = (href: string) => {
    setPendingPath(href) // mark the next tab immediately
    if (href.startsWith("#")) {
      const section = href.replace("#", "")
      setActiveSection(section)
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      router.push(href)
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 dark:bg-slate-950/80 dark:border-slate-800/50"
          : "bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link href="/" prefetch={false} className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/umbrelabs-high-resolution-logo-transparent.png"
                  alt="Umbrelabs Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent truncate">
                Umbrelabs
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive =
                  (pathname === item.href && !pendingPath) ||
                  pendingPath === item.href ||
                  (item.href === "/" && pathname === "/" && !pendingPath)

                return (
                  <button
                    key={item.name}
                    onClick={() => navigateToPage(item.href)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                    } backdrop-blur-sm hover:scale-105 hover:shadow-md`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tablet Nav */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive =
                  (pathname === item.href && !pendingPath) || pendingPath === item.href

                return (
                  <button
                    key={item.name}
                    onClick={() => navigateToPage(item.href)}
                    className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                    } backdrop-blur-sm hover:scale-105 hover:shadow-md`}
                    title={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Theme + CTA */}
          <div className="hidden xl:flex items-center space-x-3">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-xl border-2 hover:scale-110 transition-all duration-300 backdrop-blur-sm border-slate-300 dark:border-slate-700 bg-transparent"
            >
              {mounted ? (
                theme === "amber-noir" ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-amber-600" />
                )
              ) : (
                <span className="h-4 w-4" />
              )}
            </Button>

            <Button
              onClick={() => {
                // Check current page and navigate to appropriate CTA section
                const currentPath = window.location.pathname
                if (currentPath === "/") {
                  navigateToPage("#cta")
                } else {
                  // For other pages, scroll to the bottom CTA section
                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
                }
              }}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
            >
              Start Building
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-2 hover:scale-110 transition-all duration-300 backdrop-blur-sm border-slate-300 dark:border-slate-700 bg-transparent"
            >
              {mounted ? (
                theme === "amber-noir" ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-amber-600" />
                )
              ) : (
                <span className="h-4 w-4" />
              )}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl transition-all duration-300 backdrop-blur-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50 border border-transparent dark:border-transparent lg:hidden"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 rounded-2xl p-3 sm:p-4 backdrop-blur-xl bg-white/80 border border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-800/50">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive =
                (pathname === item.href && !pendingPath) || pendingPath === item.href

              return (
                <button
                  key={item.name}
                  onClick={() => navigateToPage(item.href)}
                  className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{item.name}</span>
                </button>
              )
            })}

            <div className="pt-3 sm:pt-4 border-t border-slate-200/20 dark:border-slate-700/20">
              <Button
                onClick={() => {
                  // Check current page and navigate to appropriate CTA section
                  const currentPath = window.location.pathname
                  if (currentPath === "/") {
                    navigateToPage("#cta")
                  } else {
                    // For other pages, scroll to the bottom CTA section
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
                  }
                }}
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Start Building Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
