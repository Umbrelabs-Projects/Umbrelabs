"use client"

import { useState } from "react"

type Variant = "standard" | "wide" | "mobile"

type Props = {
  src: string
  alt: string
  accentFrom: string
  accentTo: string
  variant?: Variant
}

/** Renders a case-study screenshot, or a labelled placeholder when the file is missing. */
export default function CaseStudyGalleryImage({
  src,
  alt,
  accentFrom,
  accentTo,
  variant = "standard",
}: Props) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = failed
  const filename = src.split("/").pop() ?? src

  const gridBg = (
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  )

  if (variant === "mobile") {
    return (
      <div className="relative flex justify-center items-center">
        {!showPlaceholder ? (
          <div className="relative w-[min(100%,320px)] rounded-[1.75rem] overflow-hidden border border-outline-variant/70 shadow-[0_18px_40px_rgba(0,0,0,0.22)] bg-surface">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
              onError={() => setFailed(true)}
            />
          </div>
        ) : (
          <div
            className="w-[min(100%,320px)] min-h-[420px] rounded-[1.75rem] border border-outline-variant/70 bg-surface-container flex flex-col items-center justify-center gap-3 p-8 text-center"
            style={{ background: `linear-gradient(135deg, ${accentFrom}20, ${accentTo}20)` }}
          >
            <span
              className="material-symbols-outlined text-on-surface-variant/60"
              style={{ fontSize: 48, fontVariationSettings: "'wght' 200" }}
            >
              smartphone
            </span>
            <p className="text-sm text-on-surface-variant font-medium">Screenshot placeholder</p>
            <p className="text-xs text-on-surface-variant/70 font-mono max-w-full truncate">{filename}</p>
          </div>
        )}
      </div>
    )
  }

  const aspectClass = variant === "wide" ? "aspect-21/9" : "aspect-16/10"

  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] border border-outline-variant/70 ${aspectClass}`}
      style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
    >
      {gridBg}

      {!showPlaceholder ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
          <span
            className="material-symbols-outlined text-white/40"
            style={{ fontSize: 48, fontVariationSettings: "'wght' 200" }}
          >
            image
          </span>
          <p className="text-sm text-white/70 font-medium">Screenshot placeholder</p>
          <p className="text-xs text-white/50 font-mono max-w-full truncate">{filename}</p>
        </div>
      )}
    </div>
  )
}
