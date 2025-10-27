// components/ui/Navbar.tsx
'use client'

import React, { useEffect, useState } from 'react'

export function Navbar(): JSX.Element {
  const [stuck, setStuck] = useState<boolean>(false)

  useEffect(() => {
    // guard for SSR / non-window environments
    if (typeof window === 'undefined') return

    let mounted = true

    const onScroll = () => {
      const y = window.scrollY ?? window.pageYOffset ?? 0
      const next = y > 36
      // only update when value actually changes to avoid needless renders
      setStuck((prev) => (prev === next ? prev : next))
    }

    // initial check in case page is already scrolled
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      mounted = false
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none transition-all`}
      aria-hidden
    >
      <div
        className={`pointer-events-auto w-full max-w-6xl mx-4 rounded-2xl transition-all duration-300
          ${stuck ? 'backdrop-blur-md bg-white/10 border border-white/6 shadow-lg py-2' : 'bg-white/0 py-3'}
          `}
      >
        <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo — full Observer text in Nunito, dark gray, medium weight */}
          <div className="flex items-center gap-3">
            <span
              style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
              className="text-xl font-medium text-[#1f1f1f]"
            >
              Observer
            </span>
          </div>

          {/* Right side: only Sign In as requested */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 bg-white/0 text-gray-900 text-sm font-medium transition-all hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
            >
              Sign In
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
