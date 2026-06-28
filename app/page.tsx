import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const services = [
  { icon: "code", title: "Technology Development", desc: "High-performance software, distributed systems, and cloud-native architecture engineered to scale." },
  { icon: "draw", title: "Creative Design", desc: "Human-centred interfaces and identity systems crafted for clarity, emotion, and longevity." },
  { icon: "insights", title: "Data & Analytics", desc: "Turning complex data into decisions through modelling, engineering, and machine learning." },
  { icon: "hub", title: "Digital Consulting", desc: "Strategic guidance for digital transformation, technical due diligence, and modernisation." },
]

const steps = [
  { n: "01", title: "Discover", desc: "We immerse ourselves in your goals, constraints, and users to define what truly matters." },
  { n: "02", title: "Architect", desc: "We design the system and experience — pragmatic blueprints built for resilience and scale." },
  { n: "03", title: "Build", desc: "We engineer with rigour and craft, shipping in tight, transparent, measurable iterations." },
  { n: "04", title: "Evolve", desc: "We monitor, refine, and extend — treating launch as the beginning, not the destination." },
]

const stats = [
  { value: "50+", label: "Systems deployed" },
  { value: "99.99%", label: "Uptime delivered" },
  { value: "50+", label: "Global clients" },
  { value: "3+", label: "Years of practice" },
]

type Work = {
  id: string
  title: string
  cat: string
  result: string
  from: string
  to: string
  image?: string
  link?: string
}

const work: Work[] = [
  { id: "01", title: "Hostella", cat: "Technical Engineering", result: "Completed", from: "#1a160e", to: "#3a2f12", image: "/projects/hostella.png", link: "https://hostellapp.com" },
  { id: "02", title: "Procobiz", cat: "Procurement Management", result: "Completed", from: "#0b3b38", to: "#0b6b63", image: "/projects/procobiz.png", link: "https://procobiz.com" },
]


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col text-on-surface overflow-x-hidden bg-background">
      <Navigation />

      <main className="grow">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative px-5 sm:px-8 pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="ambient-orb" style={{ width: "640px", height: "640px", top: "-180px", right: "-120px", background: "radial-gradient(circle, rgba(255,191,0,0.16), transparent 70%)" }} />
          <div className="ambient-orb" style={{ width: "520px", height: "520px", top: "40px", left: "-200px", background: "radial-gradient(circle, rgba(11,107,99,0.10), transparent 70%)" }} />

          <div className="relative max-w-[920px] mx-auto text-center">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="w-6 h-px bg-primary/50" />
                Multi-disciplinary technology studio
                <span className="w-6 h-px bg-primary/50" />
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-display text-on-surface mt-7">
                Engineering the future
                <br className="hidden sm:block" /> of technology, with{" "}
                <span className="serif-italic text-gold">craft</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8">
                Umbrelabs partners with ambitious organisations to design, build, and
                evolve resilient digital systems — uniting deep engineering with
                considered design and clear strategy.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-on-surface text-background px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all press-scale"
                >
                  Start a project
                  <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-outline-variant text-on-surface hover:border-on-surface/40 hover:bg-on-surface/5 transition-all press-scale"
                >
                  View our work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────────── Trusted by ─────────────── */}
        <section className="px-5 sm:px-8 pb-20">
          <Reveal className="max-w-[1080px] mx-auto">
            <p className="text-center text-label-caps uppercase text-on-surface-variant/70 mb-8">
              Trusted by forward-thinking organisations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {["Procobiz", "Neural Networks", "Hostella", "Strata Systems", "Nexus Labs"].map((name) => (
                <span
                  key={name}
                  className="text-xl md:text-2xl text-on-surface/35 hover:text-on-surface/70 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ─────────────── Services ─────────────── */}
        <section className="px-5 sm:px-8 py-24 border-t border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <Reveal className="max-w-2xl">
                <span className="eyebrow">What we do</span>
                <h2 className="text-h1 text-on-surface mt-4">
                  Capabilities that span the<br className="hidden lg:block" /> entire product lifecycle.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <Link href="/services" className="link-underline text-on-surface font-medium shrink-0">
                  All services
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <Link
                    href="/services"
                    className="card-elegant group block p-8 lg:p-10 h-full"
                  >
                    <div className="flex items-start justify-between">
                      <span className="material-symbols-outlined text-[34px] text-gold" style={{ fontVariationSettings: "'wght' 300" }}>
                        {s.icon}
                      </span>
                      <span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                        arrow_outward
                      </span>
                    </div>
                    <h3 className="text-h3 text-on-surface mt-6">{s.title}</h3>
                    <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">{s.desc}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Approach ─────────────── */}
        <section className="px-5 sm:px-8 py-24 bg-surface border-y border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="max-w-2xl mb-16">
              <span className="eyebrow">How we work</span>
              <h2 className="text-h1 text-on-surface mt-4">A considered process, end to end.</h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="relative">
                    <span className="number-serif text-gold text-2xl">{step.n}</span>
                    <div className="h-px w-full bg-outline-variant/70 my-5" />
                    <h3 className="text-h3 text-on-surface">{step.title}</h3>
                    <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Stats ─────────────── */}
        <section className="px-5 sm:px-8 py-24">
          <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="number-serif text-on-surface text-5xl md:text-6xl">{s.value}</div>
                <div className="text-label-caps uppercase text-on-surface-variant mt-3">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── Selected work ─────────────── */}
        <section className="px-5 sm:px-8 py-24 border-t border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <Reveal className="max-w-2xl">
                <span className="eyebrow">Selected work</span>
                <h2 className="text-h1 text-on-surface mt-4">Outcomes we're proud of.</h2>
              </Reveal>
              <Reveal delay={120}>
                <Link href="/portfolio" className="link-underline text-on-surface font-medium shrink-0">
                  All client stories
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {work.map((w, i) => (
                <Reveal key={w.id} delay={i * 100}>
                  <Link href={w.link ?? "/portfolio"} className="card-elegant group block overflow-hidden h-full">
                    <div
                      className="relative aspect-16/10 overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${w.from}, ${w.to})` }}
                    >
                      {/* Fallback layer: grid + serif number (sits beneath any screenshot) */}
                      <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="number-serif text-white/15 text-[7rem] leading-none">{w.id}</span>
                      </div>

                      {/* Screenshot (covers fallback when present) */}
                      {w.image && (
                        <img
                          src={w.image}
                          alt={`${w.title} — project screenshot`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      )}

                      {/* Readability scrim for the badge over imagery */}
                      <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

                      <span className="absolute top-5 left-5 text-xs uppercase tracking-widest text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {w.cat}
                      </span>
                    </div>
                    <div className="p-8 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-h3 text-on-surface">{w.title}</h3>
                        <p className="text-body-md text-gold mt-1">{w.result}</p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant/50 group-hover:text-gold group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── CTA ─────────────── */}
        <section className="px-5 sm:px-8 pb-24">
          <Reveal className="max-w-[1240px] mx-auto">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-inverse-surface text-inverse-on-surface px-8 py-20 md:px-16 md:py-28 text-center">
              <div className="ambient-orb" style={{ width: "560px", height: "560px", bottom: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(255,191,0,0.22), transparent 70%)" }} />
              <div className="relative">
                <h2 className="text-display" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
                  Let's build something{" "}
                  <span className="serif-italic" style={{ color: "var(--m3-primary-fixed-dim)" }}>enduring</span>.
                </h2>
                <p className="text-body-lg opacity-80 max-w-xl mx-auto mt-6">
                  Tell us about your ambitions. We'll bring the engineering, design, and
                  strategy to make them real.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-medium hover:brightness-105 transition-all press-scale"
                >
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
