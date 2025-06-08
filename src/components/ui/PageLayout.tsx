import { ReactNode } from 'react'
import Layout from '@/components/layout/Layout'
import PageHeader from './PageHeader'
import HeroImage from './HeroImage'

interface PageLayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
  heroImage?: {
    src: string
    alt: string
  }
}

export default function PageLayout({ 
  children, 
  title, 
  subtitle,
  heroImage 
}: PageLayoutProps) {
  return (
    <Layout>
      <div className="bg-white">
        {heroImage && (
          <HeroImage src={heroImage.src} alt={heroImage.alt} />
        )}
        
        {title && !heroImage && (
          <PageHeader title={title} subtitle={subtitle} />
        )}
        
        {children}
      </div>
    </Layout>
  )
}