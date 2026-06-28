import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Umbrelabs — Engineering the Future of Technology",
  description:
    "Umbrelabs delivers multi-disciplinary excellence across Technology Development, Creative Design, and Strategic Consulting for the modern global enterprise.",
  icons: {
    icon: "/logos/umbrelabs-high-resolution-logo-transparent.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const setThemeScript = `
    (function() {
      try {
        const stored = localStorage.getItem('umbrelabs-theme');
        const theme = stored || 'light';
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
      } catch(e) {}
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
