// components/ui/Hero.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'

/**
 * Hero component
 * - Off-white background (#f6f7f8)
 * - Minimal one-point perspective canvas grid
 * - Pointer-based parallax and scroll-driven tilt
 * - Heading slightly shifted down for visual balance
 * - Nunito font ensured to load if missing
 */

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null) // Canvas reference
  const rafRef = useRef<number | null>(null) // Animation frame ID
  const [scrollY, setScrollY] = useState(0) // Track scroll position
  const [pointer, setPointer] = useState({ x: 0, y: 0 }) // Pointer position for parallax
  const [mounted, setMounted] = useState(false) // Component mount status

  // Load Nunito font if not already present
  useEffect(() => {
    if (document.getElementById('nunito-font')) return
    const link = document.createElement('link')
    link.id = 'nunito-font'
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap'
    document.head.appendChild(link)
  }, [])

  // Mark component as mounted
  useEffect(() => setMounted(true), [])

  // Update scrollY on window scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset || 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track pointer movements for parallax effect
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  // Canvas drawing effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = Math.max(1, window.devicePixelRatio || 1)

    // ---------- Grid configuration ----------
    const LINE_COLOR = 'rgba(17,24,39,0.07)' // Subtle line color
    const HORIZONTAL_LINES = 0 // Horizontal lines count (adjustable)
    const RAY_COUNT = 8 // Number of radial rays
    const MAX_TILT = 72 // Max scroll tilt in degrees
    const DEPTH_SPACING = 120 // Spacing between depth lines

    let tilt = 0
    let tiltTarget = 0
    let fade = 1

    // Resize canvas to match client size
    function resize() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const deg2rad = (d: number) => (d * Math.PI) / 180

    // Project depth (z) to screen Y
    function project(z: number, vpY: number) {
      const perspective = 0.0028
      return height * (1 - (1 / (1 + z * perspective)) * (1 - vpY))
    }

    // Draw minimal perspective grid
    function drawGrid() {
      ctx.clearRect(0, 0, width, height)

      const scrollNorm = Math.min(1, scrollY / (window.innerHeight * 0.9))
      tiltTarget = scrollNorm * MAX_TILT
      tilt = lerp(tilt, tiltTarget, 0.08)
      fade = lerp(fade, Math.max(0, 1 - scrollY / (window.innerHeight * 1.1)), 0.06)

      // Vanishing point adjusted by pointer
      const vpX = 0.5 + pointer.x * 0.06
      const vpY = 0.45 + pointer.y * 0.03 - scrollNorm * 0.05
      const cx = width * vpX
      const cy = height * vpY

      // Set line style
      ctx.lineWidth = 1
      ctx.strokeStyle = LINE_COLOR
      ctx.globalAlpha = Math.max(0.06, fade * 0.98)
      ctx.lineCap = 'round'

      // Draw radial rays
      ctx.beginPath()
      for (let i = -RAY_COUNT / 2; i <= RAY_COUNT / 2; i++) {
        const t = i / (RAY_COUNT / 2)
        const baseX = width * (0.5 + t * 1.4)
        ctx.moveTo(baseX, height + 18)
        ctx.lineTo(cx, cy)
      }
      ctx.stroke()

      // Draw horizontal/depth lines
      ctx.beginPath()
      const maxZ = 1500
      const step = Math.max(80, Math.floor(maxZ / HORIZONTAL_LINES))
      for (let z = step; z <= maxZ; z += step) {
        const sy = project(z, vpY)
        const depthScale = 1 / (1 + z * 0.0024)
        const halfWidth = width * (0.6 + depthScale * 1.0)
        const tiltRad = deg2rad(tilt)
        const skew = Math.tan(tiltRad) * 0.26 * (z / maxZ)
        const leftX = cx - halfWidth + skew * 160
        const rightX = cx + halfWidth + skew * 160
        ctx.moveTo(leftX, sy)
        ctx.lineTo(rightX, sy)
      }
      ctx.stroke()

      // Optional soft vignette at bottom
      ctx.globalAlpha = Math.min(0.12, (1 - fade) * 0.5)
      const g = ctx.createLinearGradient(0, height * 0.6, 0, height)
      g.addColorStop(0, 'rgba(0,0,0,0)')
      g.addColorStop(1, 'rgba(0,0,0,0.03)')
      ctx.fillStyle = g
      ctx.fillRect(0, height * 0.6, width, height * 0.4)

      ctx.globalAlpha = 1
    }

    // Animation loop
    function step() {
      drawGrid()
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    // Cleanup on unmount
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY, pointer.x, pointer.y])

  // Vertical offset for visual balance
  const verticalNudge = 0.06
  const contentTransform = `translateY(${verticalNudge * 100}vh)`

  return (
    <section className="relative w-full bg-[#f6f7f8]">
      <div className="relative h-screen md:h-[88vh] lg:h-[80vh] overflow-hidden">
        {/* Canvas grid */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{ display: mounted ? 'block' : 'none', willChange: 'transform, opacity' }}
        />

        {/* Content overlay */}
        <div
          className="relative z-20 flex items-start justify-center h-full px-6"
          style={{ transform: 'translateY(18vh)' }}
        >
          <div className="max-w-3xl text-center">
            <h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0f1720] leading-tight"
              style={{ fontFamily: 'Nunito, system-ui', transform: 'translateY(8%)' }}
            >
              Your journey to a
              <br className="hidden md:inline" />
              <span className="text-[#0f1720]">a world-class future</span>
            </h1>

            <p
              className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
              style={{ fontFamily: 'Nunito, system-ui' }}
            >
              An AI-powered platform to help students from any background discover their passions, blend interests,
              and chart a clear path to global success.
            </p>

            {/* Call-to-action buttons */}
            <div className="mt-14 flex items-center gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-white text-[#0f1720] shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                aria-label="Start Your Journey"
                style={{ fontFamily: 'Nunito, system-ui' }}
              >
                Start Your Journey
              </a>

              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-gray-300 text-[#0f1720] bg-white/0 hover:bg-white/30 transition"
                aria-label="Sign in"
                style={{ fontFamily: 'Nunito, system-ui' }}
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
