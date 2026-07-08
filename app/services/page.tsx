import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"
import WaveFlow from "@/components/wave-flow"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "From software engineering and cloud architecture to creative design, data analytics, and digital consulting — explore the capabilities Umbrelabs delivers across the entire product lifecycle.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Umbrelabs",
    description:
      "Engineering and design under one roof — the capabilities Umbrelabs delivers across the product lifecycle.",
    url: absoluteUrl("/services"),
  },
}

const services = [
  {
    n: "01",
    icon: "code",
    title: "Technology Development",
    desc: "Custom software engineering and high-performance system architecture, built on modern stacks and scalable cloud foundations.",
    items: ["Full-stack development", "Cloud infrastructure", "API design", "DevOps & CI/CD"],
  },
  {
    n: "02",
    icon: "draw",
    title: "Creative Design",
    desc: "Merging aesthetic precision with user psychology to create immersive digital experiences that resonate and perform.",
    items: ["UX architecture", "Interaction design", "Brand identity", "Motion & animation"],
  },
  {
    n: "03",
    icon: "insights",
    title: "Data & Analytics",
    desc: "Transforming raw data into actionable intelligence through advanced modelling, machine learning, and visualisation.",
    items: ["Predictive modelling", "Data engineering", "Business intelligence", "ML pipelines"],
  },
  {
    n: "04",
    icon: "business_center",
    title: "Business Solutions",
    desc: "Holistic enterprise strategies designed to solve core organisational challenges and drive sustainable growth.",
    items: ["Corporate strategy", "Market positioning", "Financial structuring", "Operational excellence"],
  },
  {
    n: "05",
    icon: "account_tree",
    title: "Project Management",
    desc: "Precision oversight for complex engineering and business initiatives, using agile frameworks for on-time delivery.",
    items: ["Agile Scrum / Kanban", "Risk mitigation", "Milestone tracking", "Stakeholder reporting"],
  },
  {
    n: "06",
    icon: "hub",
    title: "Digital Consulting",
    desc: "Navigating digital transformation — the roadmap for integrating emerging technology into established architectures.",
    items: ["Fractional CTO / CPO", "Tech stack audits", "Digital roadmapping", "Vendor selection"],
  },
  {
    n: "07",
    icon: "science",
    title: "Innovation Labs",
    desc: "Rapid prototyping of experimental technologies — exploring AI, Web3, and IoT to find practical applications.",
    items: ["POC development", "AI / ML exploration", "Web3 integration", "IoT systems"],
  },
  {
    n: "08",
    icon: "bolt",
    title: "Process Optimisation",
    desc: "Streamlining operational workflows through automation and lean methodology to eliminate friction and maximise output.",
    items: ["RPA implementation", "Workflow automation", "Lean Six Sigma", "ERP integration"],
  },
]

const steps = [
  { badge: "01", icon: "travel_explore", title: "Discover", desc: "We immerse ourselves in your goals, constraints, and users to define what truly matters." },
  { badge: "02", icon: "architecture", title: "Architect", desc: "We design the system and experience — pragmatic blueprints built for resilience and scale." },
  { badge: "03", icon: "construction", title: "Build", desc: "We engineer with rigour and craft, shipping in tight, transparent, measurable iterations." },
  { badge: "04", icon: "trending_up", title: "Evolve", desc: "We monitor, refine, and extend — treating launch as the beginning, not the destination." },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col text-on-surface overflow-x-hidden bg-background">
      <Navigation />

      <main className="grow">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative px-5 sm:px-8 pt-40 pb-20 md:pt-48 border-b border-outline-variant/60">
          <div className="ambient-orb" style={{ width: "560px", height: "560px", top: "-160px", right: "-100px", background: "radial-gradient(circle, rgba(255,191,0,0.14), transparent 70%)" }} />
          <div className="relative max-w-[1240px] mx-auto">
            <Reveal>
              <span className="eyebrow">Services</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-display text-on-surface mt-6 max-w-4xl" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                Engineering and design,{" "}
                <span className="serif-italic text-gold">under one roof</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mt-8">
                We integrate strategic business intelligence with deep technical
                execution — from process optimisation to innovation labs, architecting
                the future of enterprise operations.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─────────────── Service rows ─────────────── */}
        <section className="px-5 sm:px-8">
          <div className="max-w-[1240px] mx-auto divide-y divide-outline-variant/60">
            {services.map((s) => (
              <Reveal key={s.n}>
                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 md:py-14">
                  <div className="lg:col-span-4 flex items-start gap-5">
                    <span className="number-serif text-gold text-xl pt-1">{s.n}</span>
                    <div>
                      <span className="material-symbols-outlined text-[30px] text-on-surface mb-3 block" style={{ fontVariationSettings: "'wght' 300" }}>
                        {s.icon}
                      </span>
                      <h2 className="text-h2 text-on-surface">{s.title}</h2>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-xl">{s.desc}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="flex flex-col gap-2.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/70 shrink-0" />
                          <span className="text-body-md">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── Process ─────────────── */}
        <section className="relative px-5 sm:px-8 py-24 bg-surface border-y border-outline-variant/60 overflow-hidden">
          <div className="ambient-orb" style={{ width: "620px", height: "620px", top: "-220px", left: "-160px", background: "radial-gradient(circle, rgba(255,191,0,0.10), transparent 70%)" }} />
          <div className="relative max-w-[1240px] mx-auto">
            <Reveal className="max-w-2xl mb-16">
              <span className="eyebrow">How we work</span>
              <h2 className="text-h1 text-on-surface mt-4">A considered process, end to end.</h2>
            </Reveal>
            <WaveFlow items={steps} ariaLabel="Our process: Discover, Architect, Build, and Evolve." />
          </div>
        </section>

        {/* ─────────────── CTA ─────────────── */}
        <section className="px-5 sm:px-8 py-24">
          <Reveal className="max-w-[1240px] mx-auto text-center">
            <h2 className="text-h1 text-on-surface max-w-3xl mx-auto">
              Ready to optimise your technology stack?
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mt-6">
              Our team is ready to analyse your existing infrastructure and propose a
              tailored modernisation plan.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-on-surface text-background px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all press-scale">
                Schedule a discovery call
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-outline-variant text-on-surface hover:border-on-surface/40 hover:bg-on-surface/5 transition-all press-scale">
                View client stories
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
