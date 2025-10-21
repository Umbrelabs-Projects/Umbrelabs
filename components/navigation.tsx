"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Zap, Users, Rocket, Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Services", href: "#services", icon: Zap },
  { name: "Why Us", href: "#benefits", icon: Users },
  { name: "Get Started", href: "#cta", icon: Rocket },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
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
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
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
          {/* Logo - Made more compact on mobile */}
          <div className="flex-shrink-0 min-w-0">
            <button onClick={() => scrollToSection("#hero")} className="flex items-center space-x-2 sm:space-x-3 group">
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
            </button>
          </div>

          {/* Desktop Nav - Hidden on mobile/tablet */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.replace("#", "")

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-600/20 to-yellow-600/20 text-primary border border-primary/20"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                    } backdrop-blur-sm hover:scale-105`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tablet Nav - Show on large tablets only */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.replace("#", "")

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-600/20 to-yellow-600/20 text-primary border border-primary/20"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                    } backdrop-blur-sm hover:scale-105`}
                    title={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Desktop Actions - Hidden on mobile/tablet */}
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
              onClick={() => scrollToSection("#cta")}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
            >
              Start Building
            </Button>
          </div>

          {/* Mobile/Tablet Actions - Compact layout */}
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

        {/* Mobile Nav - Only show on mobile/small tablets */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4 sm:pb-6" : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 rounded-2xl p-3 sm:p-4 backdrop-blur-xl bg-white/80 border border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-800/50">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.replace("#", "")

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-600/20 to-yellow-600/20 text-primary border border-primary/20"
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
                onClick={() => scrollToSection("#cta")}
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
