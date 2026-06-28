/**
 * Central site configuration — single source of truth for SEO metadata,
 * structured data, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in your environment for the production domain.
 */
export const siteConfig = {
  name: "Umbrelabs",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://umbrelabs.com").replace(/\/$/, ""),
  title: "Umbrelabs — Engineering the Future of Technology",
  tagline: "Engineering the future of technology, with craft.",
  description:
    "Umbrelabs is a multi-disciplinary technology studio. We partner with ambitious organisations to design, build, and evolve resilient digital systems — uniting deep software engineering, considered design, and clear strategy.",
  locale: "en_US",
  email: "contact@umbrelabs.com",
  phone: "+233 243 528 501",
  country: "GH",
  logo: "/logos/umbrelabs-high-resolution-logo-transparent.png",
  keywords: [
    "Umbrelabs",
    "technology studio",
    "software development",
    "cloud infrastructure",
    "data analytics",
    "machine learning",
    "UX design",
    "digital consulting",
    "system architecture",
    "DevOps",
    "Ghana technology company",
  ],
} as const

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
