'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    const dpr = window.devicePixelRatio || 1

    function resize() {
      if (!canvas) return
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = []
    const particleCount = 50

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
        context.fillStyle = 'rgba(16, 185, 129, 0.5)'
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
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
