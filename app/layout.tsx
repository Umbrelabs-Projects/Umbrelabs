import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Umbrelabs - Everything you can think of, from a single point",
  description: "From idea to execution — solutions, apps, AI, design, cloud, and more. Everything in and out of tech. From one lab.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const setThemeScript = `
    (function() {
      try {
        const storedTheme = localStorage.getItem('techbox-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let initialTheme = 'light'; // Default to light, then check preferences
        if (storedTheme) {
          initialTheme = storedTheme;
        } else if (prefersDark) {
          initialTheme = 'dark';
        }

        // Apply or remove the 'dark' class based on the initialTheme
        if (initialTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error("Failed to apply initial theme script:", e);
      }
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
