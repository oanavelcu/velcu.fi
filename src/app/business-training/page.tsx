import OptimizedImage from '@/components/ui/OptimizedImage'
import Layout from '@/components/layout/Layout'
import HeroImage from '@/components/ui/HeroImage'
import ContentSection from '@/components/ui/ContentSection'
import ProseContent from '@/components/ui/ProseContent'
import { getPageData } from '@/lib/mdx'
import { remark } from 'remark'
import html from 'remark-html'

export default async function BusinessTrainingPage() {
  const pageData = getPageData('business-training')

  // Process markdown content
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(pageData.content)
  const contentHtml = processedContent.toString()

  return (
    <Layout hasHeroImage>
      <div className="bg-white">
        {/* Hero Image */}
        <HeroImage
          src="/images/hero-oana-background.jpg"
          alt="Oana Velcu-Laitinen - Business Training"
          objectPosition="50% 30%"
        />

        {/* Page Header */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                {pageData.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <ContentSection>
          <div className="max-w-4xl mx-auto">
            <ProseContent content={contentHtml} />
          </div>
        </ContentSection>
      </div>
    </Layout>
  )
}

export async function generateMetadata() {
  const pageData = getPageData('business-training')

  return {
    title: pageData.seoTitle,
    description: pageData.description,
  }
}