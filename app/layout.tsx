// app/layout.tsx
import { ReactNode } from 'react'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  )
}
