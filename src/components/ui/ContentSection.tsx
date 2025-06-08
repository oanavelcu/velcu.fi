import { ReactNode } from 'react'
import { componentStyles, cn } from '@/styles/design-tokens'

interface ContentSectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray'
  narrow?: boolean
}

export default function ContentSection({ 
  children, 
  className,
  background = 'white',
  narrow = false 
}: ContentSectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'
  const containerClass = narrow ? 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8' : componentStyles.contentSection.content
  
  return (
    <div className={cn(bgClass, componentStyles.contentSection.container, className)}>
      <div className={containerClass}>
        {children}
      </div>
    </div>
  )
}