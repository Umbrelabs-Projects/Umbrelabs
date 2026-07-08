import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"
import CoreValues from "@/components/core-values"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Umbrelabs is a multi-disciplinary technology studio architecting resilient, high-performance systems. Discover our methodology, guiding principles, and the team behind the work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Umbrelabs",
    description:
      "Architecting the future of systems — the methodology, principles, and people behind Umbrelabs.",
    url: absoluteUrl("/about"),
  },
}

type Member = {
  name: string
  role: string
  initials: string
  /** Optional portrait in /public/team. Falls back to initials when omitted. */
  image?: string
}

const team: Member[] = [
  { name: "Benjamin Odoi-Lartey", role: "Chief Executive Officer", initials: "BO" },
  { name: "Brigid Addai-Mmra", role: "Lead Designer", initials: "BA" },
  { name: "Elvis Gyasi Owusu", role: "Lead Software Engineer", initials: "EG", image: "/team/elvis.png"  },
  { name: "Raymond Antwi Aboagye", role: "Software Engineer", initials: "RA", image: "/team/ray.png" },
]

const principles = [
  { icon: "architecture", title: "Resilience by design", desc: "We engineer systems with inherent fault tolerance — redundant, observable, and built to never sleep." },
  { icon: "shield", title: "Security as foundation", desc: "Identity-aware, end-to-end encrypted by default. Security is the groundwork, not an afterthought." },
  { icon: "bolt", title: "Performance obsessed", desc: "Sub-millisecond intent. We measure relentlessly and optimise where it genuinely matters." },
  { icon: "diversity_3", title: "Partnership over delivery", desc: "We embed with your team, share context openly, and stay invested well beyond launch." },
]

const stats = [
  { value: "50+", label: "Systems deployed" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50+", label: "Global clients" },
  { value: "3+", label: "Years of practice" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col text-on-surface overflow-x-hidden bg-background">
      <Navigation />

      <main className="grow">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative px-5 sm:px-8 pt-40 pb-20 md:pt-48 border-b border-outline-variant/60">
          <div className="ambient-orb" style={{ width: "560px", height: "560px", top: "-180px", left: "-120px", background: "radial-gradient(circle, rgba(255,191,0,0.13), transparent 70%)" }} />
          <div className="relative max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="eyebrow">About Umbrelabs</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-display text-on-surface mt-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                  Architecting the future of{" "}
                  <span className="serif-italic text-gold">systems</span>.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={160}>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  Umbrelabs was founded on a simple premise: complexity is the enemy of
                  innovation. We build high-performance distributed systems and AI
                  infrastructure that scale effortlessly — a story of relentless
                  technical curiosity and an obsession with excellence.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────── Stats ─────────────── */}
        <section className="px-5 sm:px-8 py-20 border-b border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="number-serif text-on-surface text-5xl md:text-6xl">{s.value}</div>
                <div className="text-label-caps uppercase text-on-surface-variant mt-3">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── Principles ─────────────── */}
        <section className="px-5 sm:px-8 py-24">
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="max-w-2xl mb-16">
              <span className="eyebrow">What guides us</span>
              <h2 className="text-h1 text-on-surface mt-4">Methodology &amp; mastery.</h2>
              <p className="text-body-lg text-on-surface-variant mt-5 leading-relaxed">
                Our technical stack isn't just a list of tools — it's a carefully curated
                ecosystem of performance-first technologies and principles.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="card-elegant p-8 lg:p-10 h-full">
                    <span className="material-symbols-outlined text-[32px] text-gold" style={{ fontVariationSettings: "'wght' 300" }}>
                      {p.icon}
                    </span>
                    <h3 className="text-h3 text-on-surface mt-5">{p.title}</h3>
                    <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Core values ─────────────── */}
        <section className="relative px-5 sm:px-8 py-24 bg-surface border-y border-outline-variant/60 overflow-hidden">
          <div className="ambient-orb" style={{ width: "620px", height: "620px", top: "-220px", right: "-160px", background: "radial-gradient(circle, rgba(255,191,0,0.10), transparent 70%)" }} />
          <div className="relative max-w-[1240px] mx-auto">
            <Reveal className="max-w-2xl mb-16">
              <span className="eyebrow">What we stand for</span>
              <h2 className="text-h1 text-on-surface mt-4">Our core values.</h2>
              <p className="text-body-lg text-on-surface-variant mt-5 leading-relaxed">
                Four principles thread through every decision we make — the through-line
                that connects our craft, our partnerships, and our commitments.
              </p>
            </Reveal>
            <CoreValues />
          </div>
        </section>

        {/* ─────────────── Team ─────────────── */}
        <section className="px-5 sm:px-8 py-24 border-b border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="max-w-2xl mb-16">
              <span className="eyebrow">Our core unit</span>
              <h2 className="text-h1 text-on-surface mt-4">The minds behind the machine.</h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={i * 80}>
                  <div className="group">
                    <div className="relative aspect-4/5 rounded-[1.25rem] overflow-hidden border border-outline-variant/70 bg-surface-container flex items-center justify-center transition-all duration-500 group-hover:border-gold/40">
                      {/* Fallback layer: grid + initials (sits beneath any portrait) */}
                      <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{ backgroundImage: "linear-gradient(var(--m3-on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--m3-on-surface) 1px, transparent 1px)", backgroundSize: "26px 26px" }}
                      />
                      <span className="number-serif text-on-surface/25 text-6xl transition-transform duration-500 group-hover:scale-110">
                        {member.initials}
                      </span>

                      {/* Portrait (covers fallback when present) */}
                      {member.image && (
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      )}
                    </div>
                    <h3 className="text-h3 text-on-surface mt-5">{member.name}</h3>
                    <p className="text-body-md text-gold mt-1">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── CTA ─────────────── */}
        <section className="px-5 sm:px-8 py-24">
          <Reveal className="max-w-[1240px] mx-auto text-center">
            <h2 className="text-h1 text-on-surface max-w-3xl mx-auto">Ready to build with us?</h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mt-6">
              Join the organisations that trust Umbrelabs with their most
              mission-critical systems.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-10 bg-on-surface text-background px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all press-scale">
              Build with us
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
