// components/ui/Button.tsx
import React from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const base =
    'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-black text-white hover:bg-gray-900 hover:shadow-lg focus:ring-gray-400',
    secondary:
      'bg-white border border-gray-900 text-gray-900 hover:bg-gray-100 hover:shadow-sm focus:ring-gray-400',
    ghost:
      'bg-transparent text-gray-900 hover:bg-gray-100 hover:shadow-none focus:ring-gray-400',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      {...props}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        'hover:scale-[1.03]',
        className
      )}
    >
      {props.children}
    </button>
  )
}
