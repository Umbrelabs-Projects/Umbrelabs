"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"
type ThemeProviderContextType = {
  theme: Theme
  toggleTheme: () => void
}

/**
 * Safely determine the initial theme:
 * • Try localStorage (if we’re in the browser)
 * • Otherwise fall back to the system preference
 * • Default to "light" during SSR (important: this should match the inline script's default)
 */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light" // SSR default for React state

  const saved = localStorage.getItem("techbox-theme") as Theme | null
  if (saved) return saved

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize React state with the initial theme.
  // This value will be consistent with what the inline script sets on the HTML.
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  /** Apply the 'dark' class (or remove it) on every change & persist the choice */
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("techbox-theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeProviderContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeProviderContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
