// components/ui/CTA.tsx
import React from "react"

export default function CTA() {
  return (
    <section className="bg-[#1c2024] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="bg-[#16161b] border border-[#23242d] rounded-2xl px-8 py-14 text-center shadow-lg"
          style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight">
            Ready to discover your future?
          </h2>

          <p className="text-[#c7cde4] text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Whether you’re in elementary school or preparing for university — start a guided, world-class path today.
          </p>

          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            {/* Primary CTA */}
            <a
              href="/register"
              aria-label="Start Your Journey"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold bg-white text-[#0f1720] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40 transition transform hover:-translate-y-0.5"
            >
              Start Your Journey
            </a>

            {/* Secondary CTA */}
            <a
              href="/login"
              aria-label="Sign in"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-white/25 text-white bg-transparent hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
            >
              Sign in
            </a>
          </div>

          <div className="text-xs text-[#9aa3c6] font-medium">
            100% free · No credit card required · Available in 20+ languages
          </div>
        </div>
      </div>
    </section>
  )
}
