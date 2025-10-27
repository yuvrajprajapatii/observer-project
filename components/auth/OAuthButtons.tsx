// components/auth/OAuthButtons.tsx
'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

interface OAuthButtonsProps {
  callbackUrl?: string
  className?: string
}

export default function OAuthButtons({ callbackUrl = '/dashboard', className = '' }: OAuthButtonsProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleOAuthSignIn = async (provider: 'google' | 'github' | 'apple') => {
    setIsLoading(provider)
    try {
      await signIn(provider, { callbackUrl, redirect: true })
    } catch (error) {
      console.error(`${provider} sign-in error:`, error)
      setIsLoading(null)
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Google */}
      <button
        onClick={() => handleOAuthSignIn('google')}
        disabled={isLoading !== null}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-slate-300 font-medium text-slate-700
                   bg-white
                   hover:bg-gradient-to-r hover:from-blue-50 hover:via-white hover:to-green-50
                   transition-all duration-300 transform hover:scale-105
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading === 'google' ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            Connecting...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </>
        )}
      </button>

      {/* GitHub */}
      <button
        onClick={() => handleOAuthSignIn('github')}
        disabled={isLoading !== null}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-medium
                   hover:from-gray-700 hover:via-gray-800 hover:to-gray-900
                   transition-all duration-300 transform hover:scale-105
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading === 'github' ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Connecting...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Sign in with GitHub
          </>
        )}
      </button>

      {/* Apple */}
      <button
        onClick={() => handleOAuthSignIn('apple')}
        disabled={isLoading !== null}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-black text-white font-medium
                   hover:bg-gray-900 hover:shadow-lg
                   transition-all duration-300 transform hover:scale-105
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading === 'apple' ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Connecting...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.365 1.43c0 1.14-.85 2.67-1.92 3.51-.74.59-1.68 1.04-2.74 1.04-.07-1.18.78-2.64 1.7-3.43.74-.63 1.66-1.14 2.63-1.14.08.01.16.01.23.02.27.05.5.15.67.25zM19.88 12.08c-.03-2.91 2.42-4.33 2.53-4.39-1.39-2.02-3.54-2.31-4.28-2.32-1.81-.18-3.52 1.08-4.42 1.08-.9 0-2.3-1.04-3.79-1.01-1.95.03-3.75 1.14-4.74 2.87-2.04 3.53-.52 8.74 1.44 11.6.95 1.36 2.08 2.87 3.57 2.82 1.42-.05 1.95-.91 3.66-.91 1.71 0 2.21.91 3.7.88 1.5-.03 2.44-1.39 3.38-2.76 1.07-1.52 1.5-3.00 1.53-3.08-.03-.01-2.96-1.14-2.99-4.19z"/>
            </svg>
            Sign in with Apple
          </>
        )}
      </button>
    </div>
  )
}
