import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"
import CaseStudyGalleryImage from "./case-study-gallery-image"
import type { CaseStudy } from "@/lib/case-studies"

type Props = {
  study: CaseStudy
  prev?: CaseStudy
  next?: CaseStudy
}

function SectionBlock({
  section,
  index,
}: {
  section: CaseStudy["challenge"]
  index: number
}) {
  return (
    <Reveal delay={index * 60}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="text-h2 text-on-surface">{section.title}</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">{section.body}</p>
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {section.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/80 shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function CaseStudyView({ study, prev, next }: Props) {
  const sections = [study.challenge, study.approach, study.solution, study.outcomes]

  return (
    <div className="min-h-screen flex flex-col text-on-surface overflow-x-hidden bg-background">
      <Navigation />

      <main className="grow">
        {/* ─────────────── Hero ─────────────── */}
        <section className="relative px-5 sm:px-8 pt-36 pb-12 md:pt-44 border-b border-outline-variant/60">
          <div
            className="ambient-orb"
            style={{
              width: "560px",
              height: "560px",
              top: "-160px",
              right: "-100px",
              background: `radial-gradient(circle, ${study.accentTo}33, transparent 70%)`,
            }}
          />
          <div className="relative max-w-[1240px] mx-auto">
            <Reveal>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-gold transition-colors mb-8"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                All client stories
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <Reveal delay={60}>
                  <span className="eyebrow">{study.category}</span>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="text-display text-on-surface mt-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}>
                    {study.title}
                  </h1>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl leading-relaxed">
                    {study.tagline}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={220}>
                  <dl className="card-elegant p-6 sm:p-8 grid grid-cols-2 gap-x-6 gap-y-5">
                    <div>
                      <dt className="text-label-caps uppercase text-on-surface-variant text-xs">Client</dt>
                      <dd className="text-on-surface mt-1.5 font-medium">{study.client}</dd>
                    </div>
                    <div>
                      <dt className="text-label-caps uppercase text-on-surface-variant text-xs">Year</dt>
                      <dd className="text-on-surface mt-1.5 font-medium">{study.year}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-label-caps uppercase text-on-surface-variant text-xs">Role</dt>
                      <dd className="text-on-surface mt-1.5 font-medium">{study.role}</dd>
                    </div>
                    <div>
                      <dt className="text-label-caps uppercase text-on-surface-variant text-xs">Status</dt>
                      <dd className="text-gold mt-1.5 font-medium">{study.status}</dd>
                    </div>
                    {study.liveUrl && (
                      <div>
                        <dt className="text-label-caps uppercase text-on-surface-variant text-xs">Live</dt>
                        <dd className="mt-1.5">
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-on-surface font-medium"
                          >
                            Visit site
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── Cover image ─────────────── */}
        <section className="px-5 sm:px-8 py-12 md:py-16">
          <Reveal className="max-w-[1240px] mx-auto">
            <div
              className="relative aspect-21/9 rounded-[1.5rem] overflow-hidden border border-outline-variant/70"
              style={{ background: `linear-gradient(135deg, ${study.accentFrom}, ${study.accentTo})` }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <img
                src={study.coverImage}
                alt={`${study.title} — project cover`}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </section>

        {/* ─────────────── Summary + metrics ─────────────── */}
        <section className="px-5 sm:px-8 pb-20 border-b border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="text-body-lg text-on-surface leading-relaxed">{study.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full border border-outline-variant text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <div className="lg:col-span-7 grid grid-cols-2 gap-5">
              {study.metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 70}>
                  <div className="card-elegant p-6 text-center h-full flex flex-col justify-center">
                    <div className="number-serif text-on-surface text-4xl md:text-5xl">{m.value}</div>
                    <div className="text-label-caps uppercase text-on-surface-variant mt-2 text-xs">{m.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Narrative sections ─────────────── */}
        <section className="px-5 sm:px-8 py-24">
          <div className="max-w-[1240px] mx-auto space-y-20 md:space-y-24">
            {sections.map((section, i) => (
              <div key={section.title}>
                {i > 0 && <div className="h-px w-full bg-outline-variant/60 mb-20 md:mb-24" />}
                <SectionBlock section={section} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────── Gallery ─────────────── */}
        <section className="px-5 sm:px-8 py-24 bg-surface border-y border-outline-variant/60">
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="max-w-2xl mb-14">
              <span className="eyebrow">In the build</span>
              <h2 className="text-h1 text-on-surface mt-4">Screens &amp; surfaces.</h2>
              <p className="text-body-lg text-on-surface-variant mt-5 leading-relaxed">
                Key views from the project.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {study.gallery.map((item, i) => {
                const variant = item.variant ?? (i === 0 ? "wide" : "standard")
                const spanFull = variant === "wide" || variant === "mobile"
                return (
                <Reveal key={item.src} delay={i * 80} className={spanFull ? "md:col-span-2" : ""}>
                  <figure className="group">
                    <CaseStudyGalleryImage
                      src={item.src}
                      alt={item.alt}
                      accentFrom={study.accentFrom}
                      accentTo={study.accentTo}
                      variant={variant}
                    />
                    {item.caption && (
                      <figcaption
                        className={`text-body-md text-on-surface-variant mt-4 ${
                          variant === "mobile" ? "text-center" : "text-center md:text-left"
                        }`}
                      >
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── Prev / next + CTA ─────────────── */}
        <section className="px-5 sm:px-8 py-24">
          <div className="max-w-[1240px] mx-auto">
            {(prev || next) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
                {prev ? (
                  <Reveal>
                    <Link href={`/portfolio/${prev.slug}`} className="card-elegant group block p-8 h-full">
                      <span className="text-label-caps uppercase text-on-surface-variant text-xs">Previous</span>
                      <h3 className="text-h3 text-on-surface mt-3 group-hover:text-gold transition-colors">{prev.title}</h3>
                      <span className="link-underline text-on-surface font-medium mt-4 inline-flex">
                        View case study
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                      </span>
                    </Link>
                  </Reveal>
                ) : (
                  <div />
                )}
                {next && (
                  <Reveal delay={80}>
                    <Link href={`/portfolio/${next.slug}`} className="card-elegant group block p-8 h-full text-right">
                      <span className="text-label-caps uppercase text-on-surface-variant text-xs">Next</span>
                      <h3 className="text-h3 text-on-surface mt-3 group-hover:text-gold transition-colors">{next.title}</h3>
                      <span className="link-underline text-on-surface font-medium mt-4 inline-flex justify-end w-full">
                        View case study
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </span>
                    </Link>
                  </Reveal>
                )}
              </div>
            )}

            <Reveal>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-inverse-surface text-inverse-on-surface px-8 py-16 md:px-14 md:py-20 text-center">
                <div
                  className="ambient-orb"
                  style={{
                    width: "480px",
                    height: "480px",
                    bottom: "-240px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "radial-gradient(circle, rgba(255,191,0,0.2), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <h2 className="text-h1">Have a project in mind?</h2>
                  <p className="text-body-lg opacity-80 max-w-xl mx-auto mt-5">
                    We bring the same rigour to every engagement — from discovery through launch and beyond.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-medium hover:brightness-105 transition-all press-scale"
                    >
                      Start a conversation
                      <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-inverse-on-surface/25 hover:bg-inverse-on-surface/10 transition-all press-scale"
                    >
                      More client stories
                    </Link>
                  </div>
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
