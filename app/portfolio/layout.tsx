import type { Metadata } from "next"
import type { ReactNode } from "react"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Selected work from Umbrelabs — high-performance technical solutions and creative architectures delivered for global industry leaders across engineering, design, and operations.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Client Stories · Umbrelabs",
    description:
      "Engineering the next frontier — a selection of Umbrelabs work across technical engineering, design, and process optimisation.",
    url: absoluteUrl("/portfolio"),
  },
}

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children
}
