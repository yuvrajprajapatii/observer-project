// app/login/page.tsx
'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import OAuthButtons from '@/components/auth/OAuthButtons'
import { BookOpen } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

type FormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = async (data: FormValues) => {
    setError(null)
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else if (result?.ok) {
        window.location.href = '/dashboard'
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f6f7f8] px-4 py-16">
      <div className="w-full max-w-[920px]">
        <div
          className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
        >
          {/* Left decorative panel (md+) */}
          <div className="hidden md:flex flex-col justify-center items-start p-12 bg-gradient-to-b from-white to-[#fbfbfc]">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#0f1720] flex items-center justify-center">
                  <span className="text-white font-medium" style={{ fontFamily: 'Nunito, system-ui' }}>
                    O
                  </span>
                </div>
                <div>
                  <div className="text-lg text-[#0f1720] font-medium" style={{ fontFamily: 'Nunito, system-ui' }}>
                    Observer
                  </div>
                  <div className="text-sm text-gray-500">Discover • Map • Launch</div>
                </div>
              </div>
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-[#0f1720] leading-tight" style={{ fontFamily: 'Nunito, system-ui' }}>
              Welcome back
            </h3>

            <p className="mt-3 text-gray-600 max-w-xs">
              Sign in to continue your personalized learning journey — projects, mentors and global opportunities await.
            </p>

            <div className="mt-8 w-24 h-[1px] bg-gray-100 rounded-full" />
            <div className="mt-6 text-sm text-gray-500">New here? <Link href="/register" className="font-medium text-[#0f1720] hover:underline">Create an account</Link></div>
          </div>

          {/* Right: Form */}
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#0f1720] flex items-center justify-center">
                  <span className="text-white font-medium" style={{ fontFamily: 'Nunito, system-ui' }}>O</span>
                </div>
                <div className="text-lg font-medium text-[#0f1720]" style={{ fontFamily: 'Nunito, system-ui' }}>
                  Observer
                </div>
              </div>

              <div />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f1720] mb-1" style={{ fontFamily: 'Nunito, system-ui' }}>
              Welcome back
            </h2>
            <p className="text-gray-600 text-sm mb-6">Sign in to continue your learning journey</p>

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Form */}
            <form className="space-y-4 mb-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-[#0f1720] mb-2">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 border rounded-xl outline-none transition-all duration-200
                    ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-gray-100'}`}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f1720] mb-2">Password</label>
                <input
                  type="password"
                  {...register('password')}
                  className={`w-full px-4 py-3 border rounded-xl outline-none transition-all duration-200
                    ${errors.password ? 'border-red-500 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-gray-100'}`}
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1.5">{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0f1720] text-white font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0f1720]/30"
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* OAuth Buttons */}
            <div>
              <OAuthButtons callbackUrl="/dashboard" />
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#0f1720] font-medium hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
