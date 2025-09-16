"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  variant?: "hero" | "default"
}

export default function AnimatedBackground({ variant = "default" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animated particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle =
          variant === "hero" ? `rgba(99, 102, 241, ${particle.opacity})` : `rgba(147, 197, 253, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background */}
      <div
        className={`absolute inset-0 ${
          variant === "hero"
            ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5"
            : "bg-gradient-to-br from-blue-500/3 to-purple-500/3"
        }`}
      />

      {/* Animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />

      {/* Additional gradient overlay for hero variant */}
      {variant === "hero" && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
      )}
    </div>
  )
}
