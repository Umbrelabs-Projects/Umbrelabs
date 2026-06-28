"use client"

import { useState, type FormEvent } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"

const details = [
  { icon: "mail", label: "Email", value: "contact@umbrelabs.com", href: "mailto:contact@umbrelabs.com" },
  { icon: "call", label: "Phone", value: "+233 243 528 501", href: "tel:+233243528501" },
  { icon: "location_on", label: "Location", value: "Ghana · Worldwide", href: null },
]

const projectTypes = ["Technology Development", "Creative Design", "Data & Analytics", "Digital Consulting", "Other"]

const nextSteps = [
  { n: "01", text: "We review your message and respond within one business day." },
  { n: "02", text: "A short discovery call to understand scope, goals, and constraints." },
  { n: "03", text: "A tailored proposal with timeline, team, and investment." },
]

const inputClass =
  "w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-primary/20 transition-all"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      service: data.get("service"),
      message: data.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "Failed to send message. Please try again.")
      }
      form.reset()
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col text-on-surface overflow-x-hidden bg-background">
      <Navigation />

      <main className="grow">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative px-5 sm:px-8 pt-40 pb-16 md:pt-48 border-b border-outline-variant/60">
          <div className="ambient-orb" style={{ width: "560px", height: "560px", top: "-160px", left: "-120px", background: "radial-gradient(circle, rgba(255,191,0,0.13), transparent 70%)" }} />
          <div className="relative max-w-[1240px] mx-auto">
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-display text-on-surface mt-6 max-w-3xl" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                Let's start a{" "}
                <span className="serif-italic text-gold">conversation</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mt-8">
                Whether you have a defined brief or a half-formed idea, we'd love to
                hear from you. Tell us what you're building.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─────────────── Body ─────────────── */}
        <section className="px-5 sm:px-8 py-20">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              {submitted ? (
                <div className="card-elegant p-10 lg:p-14 text-center">
                  <span className="material-symbols-outlined text-[48px] text-gold">check_circle</span>
                  <h2 className="text-h2 text-on-surface mt-5">Message received.</h2>
                  <p className="text-body-lg text-on-surface-variant mt-4 max-w-md mx-auto">
                    Thank you for reaching out. We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-outline-variant text-on-surface hover:bg-on-surface/5 transition-all press-scale"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-label-caps uppercase text-on-surface-variant block mb-2.5">Full name</label>
                      <input id="name" name="name" required type="text" placeholder="Jane Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-label-caps uppercase text-on-surface-variant block mb-2.5">Email</label>
                      <input id="email" name="email" required type="email" placeholder="jane@company.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="text-label-caps uppercase text-on-surface-variant block mb-2.5">Company</label>
                    <input id="company" name="company" type="text" placeholder="Your organisation" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="service" className="text-label-caps uppercase text-on-surface-variant block mb-2.5">Project type</label>
                    <select id="service" name="service" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a focus area</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-label-caps uppercase text-on-surface-variant block mb-2.5">Tell us about your project</label>
                    <textarea id="message" name="message" required rows={5} placeholder="What are you building, and what does success look like?" className={`${inputClass} resize-none`} />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 rounded-xl border border-error/40 bg-error/5 px-4 py-3 text-error">
                      <span className="material-symbols-outlined text-[20px] shrink-0">error</span>
                      <p className="text-body-md">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-on-surface text-background px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all press-scale w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Send message"}
                    <span className={`material-symbols-outlined text-[18px] ${loading ? "animate-spin" : ""}`}>
                      {loading ? "progress_activity" : "arrow_outward"}
                    </span>
                  </button>
                </form>
              )}
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={120} className="lg:col-span-5">
              <div className="space-y-10">
                <div>
                  <h3 className="text-h3 text-on-surface mb-6">Reach us directly</h3>
                  <div className="space-y-4">
                    {details.map((d) => {
                      const inner = (
                        <div className="flex items-center gap-4 card-elegant p-5 group">
                          <span className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-gold shrink-0">
                            <span className="material-symbols-outlined text-[20px]">{d.icon}</span>
                          </span>
                          <div className="min-w-0">
                            <div className="text-label-caps uppercase text-on-surface-variant">{d.label}</div>
                            <div className="text-on-surface wrap-break-word group-hover:text-gold transition-colors">{d.value}</div>
                          </div>
                        </div>
                      )
                      return d.href ? (
                        <a key={d.label} href={d.href} className="block">{inner}</a>
                      ) : (
                        <div key={d.label}>{inner}</div>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-h3 text-on-surface mb-6">What happens next</h3>
                  <div className="space-y-5">
                    {nextSteps.map((s) => (
                      <div key={s.n} className="flex gap-4">
                        <span className="number-serif text-gold text-lg shrink-0">{s.n}</span>
                        <p className="text-body-md text-on-surface-variant leading-relaxed">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-sm text-on-surface-variant">Currently accepting new projects for 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
