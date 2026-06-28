"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"

const categories = ["All Work", "Technical Engineering", "Creative Design", "Process Optimisation", "Network Ops"]

const projects = [
  {
    id: "01",
    category: "Network Ops",
    title: "Neural Node Expansion",
    desc: "Architecture and deployment of a low-latency global edge network for a tier-one financial institution, achieving exceptional uptime through custom redundancy protocols.",
    tech: ["AWS", "Rust", "Kubernetes"],
    result: "99.999% uptime",
    from: "#1a160e",
    to: "#4a3a12",
    wide: true,
  },
  {
    id: "02",
    category: "Process Optimisation",
    title: "LogicStream Core",
    desc: "Refactoring internal data pipelines for a leading logistics provider, cutting processing overhead substantially.",
    tech: ["Python", "Kafka"],
    result: "−40% overhead",
    from: "#0b3b38",
    to: "#0b6b63",
  },
  {
    id: "03",
    category: "Creative Design",
    title: "Aether UI System",
    desc: "A high-fidelity design language for a decentralised cloud computing interface.",
    tech: ["Figma", "React", "Three.js"],
    result: "9.8 experience score",
    from: "#2a1633",
    to: "#5b3a78",
  },
  {
    id: "04",
    category: "Technical Engineering",
    title: "Sentinel OS",
    desc: "A custom operating layer for industrial automation hardware, focused on secure real-time monitoring.",
    tech: ["Rust", "WASM", "Linux"],
    result: "Sub-1ms latency",
    from: "#13110a",
    to: "#3a2f12",
  },
  {
    id: "05",
    category: "Technical Engineering",
    title: "Secured Support Mesh",
    desc: "A multi-tiered, zero-trust technical support infrastructure for global software operations.",
    tech: ["Zero-Trust", "AES-256"],
    result: "100% compliance",
    from: "#10221f",
    to: "#27514c",
  },
]

export default function PortfolioPage() {
  const [active, setActive] = useState("All Work")
  const filtered = active === "All Work" ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen flex flex-col text-on-surface overflow-x-hidden bg-background">
      <Navigation />

      <main className="grow">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative px-5 sm:px-8 pt-40 pb-16 md:pt-48">
          <div className="ambient-orb" style={{ width: "560px", height: "560px", top: "-160px", right: "-120px", background: "radial-gradient(circle, rgba(255,191,0,0.13), transparent 70%)" }} />
          <div className="relative max-w-[1240px] mx-auto">
            <Reveal>
              <span className="eyebrow">Client stories</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-display text-on-surface mt-6 max-w-4xl" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                Engineering the{" "}
                <span className="serif-italic text-gold">next frontier</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mt-8">
                A selection of high-performance technical solutions and creative
                architectures delivered for global industry leaders.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─────────────── Filter ─────────────── */}
        <section className="px-5 sm:px-8 pb-12">
          <div className="max-w-[1240px] mx-auto flex flex-wrap gap-2.5 pt-8 border-t border-outline-variant/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all press-scale border ${
                  active === cat
                    ? "bg-on-surface text-background border-on-surface"
                    : "border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-on-surface/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ─────────────── Grid ─────────────── */}
        <section className="px-5 sm:px-8 pb-24">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} className={p.wide ? "md:col-span-2" : ""}>
                <Link href="/contact" className="card-elegant group block overflow-hidden h-full">
                  <div
                    className={`relative overflow-hidden ${p.wide ? "aspect-21/9" : "aspect-16/10"}`}
                    style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="number-serif text-white/12 text-[8rem] leading-none">{p.id}</span>
                    </div>
                    <span className="absolute top-5 left-5 text-xs uppercase tracking-widest text-white/85 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {p.category}
                    </span>
                    <span className="absolute bottom-5 right-5 text-sm text-white/90 bg-black/25 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {p.result}
                    </span>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-h2 text-on-surface">{p.title}</h3>
                    <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed max-w-2xl">{p.desc}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full border border-outline-variant text-on-surface-variant">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="link-underline text-on-surface font-medium shrink-0">
                        View case study
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── CTA ─────────────── */}
        <section className="px-5 sm:px-8 pb-24">
          <Reveal className="max-w-[1240px] mx-auto">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-inverse-surface text-inverse-on-surface px-8 py-20 md:px-16 md:py-24 text-center">
              <div className="ambient-orb" style={{ width: "520px", height: "520px", bottom: "-280px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(255,191,0,0.2), transparent 70%)" }} />
              <div className="relative">
                <h2 className="text-h1">Ready to build your story?</h2>
                <p className="text-body-lg opacity-80 max-w-xl mx-auto mt-6">
                  Let's discuss how our studio can transform your technical landscape.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-10 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-medium hover:brightness-105 transition-all press-scale">
                  Start a conversation
                  <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
