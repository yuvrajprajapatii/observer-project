'use client'

import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    let mounted = true
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
    let width = 0
    let height = 0
    let rafId = 0

    // Particle class (kept inside effect to close over width/height)
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.radius = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        this.x = Math.max(0, Math.min(width, this.x))
        this.y = Math.max(0, Math.min(height, this.y))
      }

      draw(context: CanvasRenderingContext2D) {
        if (!context) return
        context.fillStyle = 'rgba(16, 185, 129, 0.5)'
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fill()
      }
    }

    const particles: Particle[] = []
    const PARTICLE_COUNT = 50

    function safeGetCanvas(): HTMLCanvasElement | null {
      return canvasRef.current
    }

    function resize() {
      const canvas = safeGetCanvas()
      if (!canvas) return

      // get current layout size
      width = Math.max(1, canvas.clientWidth)
      height = Math.max(1, canvas.clientHeight)

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)

      // always re-get context before using it
      const context = canvas.getContext('2d')
      if (!context) return
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      const canvas = safeGetCanvas()
      if (!canvas || !mounted) return

      const context = canvas.getContext('2d')
      if (!context) return

      try {
        // semi-transparent white to create trailing effect
        context.fillStyle = 'rgba(255, 255, 255, 0.05)'
        context.fillRect(0, 0, width, height)

        for (const p of particles) {
          p.update()
          p.draw(context)
        }
      } catch (err) {
        // small guard so one error doesn't kill the RAF loop
        // console.error('Canvas animation error', err)
      }

      rafId = requestAnimationFrame(animate)
    }

    // initial setup
    resize()
    initParticles()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(animate)

    return () => {
      mounted = false
      window.removeEventListener('resize', resize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block" // display block helps consistent measurements
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Discover Your <span className="text-emerald-600">True Potential</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Observer helps you discover your strengths, find the right subjects, and chart your perfect career path.
        </p>

        <div className="flex gap-4">
          <Link
            href="/register"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/login"
            className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  )
}
