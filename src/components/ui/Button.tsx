import Link from 'next/link'
import { ReactNode } from 'react'
import { designTokens, cn } from '@/styles/design-tokens'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'primaryLarge'
  className?: string
  external?: boolean
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className,
  external = false
}: ButtonProps) {
  const buttonClass = cn(designTokens.buttons[variant], className)
  
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  )
}