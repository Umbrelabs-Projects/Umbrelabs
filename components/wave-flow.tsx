"use client"

import { useEffect, useId, useRef, useState } from "react"

export type WaveItem = {
  title: string
  desc: string
  icon: string
  /** optional small serif label shown above the title (e.g. "01") */
  badge?: string
  /** accent colour for the arc + icon ring; falls back to the shared accent */
  color?: string
}

type Props = {
  items: WaveItem[]
  /** default accent when an item has no explicit colour */
  accent?: string
  ariaLabel: string
}

const TOP = 200
const BOT = 320
const R = 60 // arc radius
const r = 44 // icon circle radius
const VB_W = 1200

type Node = { x: number; cy: number }

function buildNodes(count: number): Node[] {
  const left = 150
  const right = 150
  const gap = count > 1 ? (VB_W - left - right) / (count - 1) : 0
  return Array.from({ length: count }, (_, i) => ({
    x: count > 1 ? left + i * gap : VB_W / 2,
    cy: i % 2 === 0 ? TOP : BOT,
  }))
}

function buildPath(nodes: Node[]) {
  const dx = nodes.length > 1 ? (nodes[1].x - nodes[0].x) / 2 : 150
  const first = nodes[0]
  const last = nodes[nodes.length - 1]
  const start = { x: first.x - 120, y: first.cy === TOP ? first.cy + 55 : first.cy - 55 }
  const end = { x: last.x + 120, y: last.cy === TOP ? last.cy + 55 : last.cy - 55 }

  let d = `M ${start.x} ${start.y}`
  d += ` C ${start.x + (first.x - start.x) * 0.5} ${start.y}, ${first.x - dx * 0.5} ${first.cy}, ${first.x} ${first.cy}`
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i]
    const b = nodes[i + 1]
    d += ` C ${a.x + dx} ${a.cy}, ${b.x - dx} ${b.cy}, ${b.x} ${b.cy}`
  }
  d += ` C ${last.x + dx * 0.5} ${last.cy}, ${end.x - (end.x - last.x) * 0.5} ${end.y}, ${end.x} ${end.y}`

  return { d, start, end }
}

export default function WaveFlow({ items, accent = "var(--m3-primary)", ariaLabel }: Props) {
  const uid = useId().replace(/:/g, "")
  const pathId = `wf-path-${uid}`
  const glowId = `wf-glow-${uid}`

  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const nodes = buildNodes(items.length)
  const { d, start, end } = buildPath(nodes)
  const on = inView || reduced

  return (
    <div ref={ref}>
      {/* ─────────── Desktop: animated serpentine ─────────── */}
      <div className="hidden lg:block">
        <svg viewBox="0 120 1200 470" className="w-full h-auto" role="img" aria-label={ariaLabel}>
          <defs>
            <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* Spiral: motion guide + faint drawn underlay + dotted overlay */}
          <path id={pathId} d={d} fill="none" stroke="none" />
          <path
            d={d}
            fill="none"
            stroke="var(--m3-primary)"
            strokeWidth={1.5}
            strokeLinecap="round"
            pathLength={100}
            style={{
              opacity: 0.22,
              strokeDasharray: 100,
              strokeDashoffset: on ? 0 : 100,
              transition: "stroke-dashoffset 1.8s ease",
            }}
          />
          <path
            d={d}
            fill="none"
            stroke="var(--m3-primary)"
            strokeWidth={2.5}
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="0.5 6"
            style={{ opacity: on ? 0.7 : 0, transition: "opacity 1s ease 0.4s" }}
          />

          {/* Endpoint dots */}
          {[start, end].map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={9} fill="none" stroke="var(--m3-primary)" strokeWidth={1.25} opacity={0.5} />
              <circle cx={p.x} cy={p.y} r={4} fill="var(--m3-primary)" />
            </g>
          ))}

          {/* Travelling comet */}
          {!reduced && (
            <>
              <g filter={`url(#${glowId})`}>
                <circle r={6} fill="var(--m3-primary)">
                  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
              </g>
              <circle r={3} fill="#fff8e6">
                <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </circle>
            </>
          )}

          {/* Nodes */}
          {items.map((v, i) => {
            const node = nodes[i]
            const color = v.color ?? accent
            const arcTop = node.cy === TOP
            const arcSweep = arcTop ? 1 : 0
            const arcD = `M ${node.x - R} ${node.cy} A ${R} ${R} 0 0 ${arcSweep} ${node.x + R} ${node.cy}`
            const textY = arcTop ? node.cy + 66 : node.cy + R + 18
            return (
              <g key={v.title}>
                {/* Colored arc (draws in) */}
                <path
                  d={arcD}
                  fill="none"
                  stroke={color}
                  strokeWidth={3}
                  strokeLinecap="round"
                  pathLength={100}
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: on ? 0 : 100,
                    transition: `stroke-dashoffset 0.9s ease ${0.3 + i * 0.15}s`,
                  }}
                />

                {/* Floating icon */}
                <g className={reduced ? undefined : "cv-float"} style={{ animationDelay: `${i * 0.6}s` }}>
                  <circle cx={node.x} cy={node.cy} r={r + 8} fill={color} opacity={0.08} />
                  <circle cx={node.x} cy={node.cy} r={r} fill="var(--m3-surface)" stroke={color} strokeWidth={1.5} />
                  <foreignObject x={node.x - 26} y={node.cy - 26} width={52} height={52}>
                    <div
                      // @ts-expect-error - xmlns is valid on the foreignObject html child
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 30, color, fontVariationSettings: "'wght' 300" }}
                      >
                        {v.icon}
                      </span>
                    </div>
                  </foreignObject>
                </g>

                {/* Title + description */}
                <foreignObject x={node.x - 130} y={textY} width={260} height={170}>
                  <div
                    // @ts-expect-error - xmlns is valid on the foreignObject html child
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      textAlign: "center",
                      opacity: on ? 1 : 0,
                      transform: on ? "translateY(0)" : "translateY(12px)",
                      transition: `opacity 0.7s ease ${0.4 + i * 0.15}s, transform 0.7s ease ${0.4 + i * 0.15}s`,
                    }}
                  >
                    {v.badge && (
                      <div
                        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 15, color, marginBottom: 4 }}
                      >
                        {v.badge}
                      </div>
                    )}
                    <div className="text-on-surface" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 22 }}>
                      {v.title}
                    </div>
                    <p
                      className="text-on-surface-variant"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.5, marginTop: 8 }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </foreignObject>
              </g>
            )
          })}
        </svg>
      </div>

      {/* ─────────── Mobile: vertical timeline ─────────── */}
      <div className="lg:hidden relative pl-2">
        <div className="absolute left-[35px] top-4 bottom-4 border-l-2 border-dotted border-primary/40" aria-hidden="true" />
        <div className="space-y-10">
          {items.map((v, i) => {
            const color = v.color ?? accent
            return (
              <div
                key={v.title}
                className="relative flex gap-5"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                <div className="relative shrink-0">
                  <span className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 0 8px ${color}14` }} />
                  <div
                    className={`relative w-[70px] h-[70px] rounded-full bg-surface flex items-center justify-center ${reduced ? "" : "cv-float"}`}
                    style={{ border: `2px solid ${color}`, animationDelay: `${i * 0.6}s` }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 30, color, fontVariationSettings: "'wght' 300" }}>
                      {v.icon}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  {v.badge && <span className="serif-italic text-sm" style={{ color }}>{v.badge}</span>}
                  <h3 className="text-h3 text-on-surface">{v.title}</h3>
                  <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
