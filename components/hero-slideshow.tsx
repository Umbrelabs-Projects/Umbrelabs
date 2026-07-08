"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Slide = { src: string; label: string; caption: string }

const slides: Slide[] = [
  { src: "/woman-with-umbrella.jpg", label: "Umbrelabs", caption: "Everything, under one umbrella" },
  { src: "/programming-background.jpg", label: "Engineering", caption: "Software built to endure" },
  { src: "/medium-shot-people-working.jpg", label: "Collaboration", caption: "Partners in the build" },
  { src: "/employee-working-marketing-setting.jpg", label: "Strategy", caption: "Consulting with clarity" },
  { src: "/standard-quality-control-collage-concept.jpg", label: "Delivery", caption: "Quality, measured" },
]

const INTERVAL = 5500

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const count = slides.length
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || reduced) return
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused, reduced, count])

  return (
    <div
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[600px] rounded-[1.75rem] overflow-hidden border border-outline-variant/70 shadow-[0_30px_80px_-20px_rgba(20,17,10,0.45)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Umbrelabs showcase"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.src}
            alt={slide.caption}
            loading={i === 0 ? "eager" : "lazy"}
            className={`w-full h-full object-cover ${i === index && !reduced ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Scrim for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(20,17,10,0.72), rgba(20,17,10,0.12) 42%, rgba(20,17,10,0.06) 70%, rgba(20,17,10,0.18))",
        }}
      />

      {/* Caption */}
      <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div
            className="uppercase mb-1.5"
            style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 600, color: "#ffcf5c" }}
          >
            {slides[index].label}
          </div>
          <div
            className="text-white truncate"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.25rem, 2.4vw, 1.8rem)", lineHeight: 1.15 }}
          >
            {slides[index].caption}
          </div>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/25 transition-all press-scale"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full flex items-center justify-center text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/25 transition-all press-scale"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute left-6 top-6 flex items-center gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-7 bg-[#ffcf5c]" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
