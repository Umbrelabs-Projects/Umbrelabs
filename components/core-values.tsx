"use client"

import WaveFlow, { type WaveItem } from "@/components/wave-flow"

const values: WaveItem[] = [
  {
    title: "Excellence",
    desc: "We hold every engagement to an exacting standard, striving for perfection in the details.",
    icon: "workspace_premium",
    color: "#d9544d",
  },
  {
    title: "Partnership",
    desc: "We build long-term relationships, embedding with your team and staying invested beyond launch.",
    icon: "handshake",
    color: "#3a63f0",
  },
  {
    title: "Innovation",
    desc: "We embrace emerging technology and creative thinking to solve complex challenges.",
    icon: "lightbulb",
    color: "#1f9d6b",
  },
  {
    title: "Integrity",
    desc: "We operate with honesty and transparency in everything we build and every decision we make.",
    icon: "balance",
    color: "#14a3b8",
  },
]

export default function CoreValues() {
  return (
    <WaveFlow
      items={values}
      ariaLabel="Umbrelabs core values: Excellence, Partnership, Innovation, and Integrity."
    />
  )
}
