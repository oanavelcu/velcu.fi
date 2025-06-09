import { designTokens, cn } from '@/styles/design-tokens'

interface ProseContentProps {
  content: string
  className?: string
  enableLinks?: boolean
}

export default function ProseContent({ content, className, enableLinks = true }: ProseContentProps) {
  const { prose } = designTokens

  const proseClasses = cn(
    'max-w-none',
    prose.base.paragraphs,
    prose.base.headings.h1,
    prose.base.headings.h2,
    prose.base.headings.h3,
    prose.base.headings.h4,
    prose.base.lists,
    prose.base.blockquotes,
    enableLinks && prose.base.links,
    className
  )

  return (
    <div
      className={proseClasses}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}