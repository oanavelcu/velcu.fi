import { componentStyles } from '@/styles/design-tokens'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className={componentStyles.pageHeader.container}>
      <div className={componentStyles.pageHeader.content}>
        <h1 className={componentStyles.pageHeader.title}>
          {title}
        </h1>
        {subtitle && (
          <p className={componentStyles.pageHeader.subtitle}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}