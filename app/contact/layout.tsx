import type { Metadata } from "next"
import type { ReactNode } from "react"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Umbrelabs. Whether you have a defined brief or an early idea, tell us what you're building and we'll bring the engineering, design, and strategy to make it real.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Umbrelabs",
    description:
      "Let's start a conversation — tell Umbrelabs what you're building.",
    url: absoluteUrl("/contact"),
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
