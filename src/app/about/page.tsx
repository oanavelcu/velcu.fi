import Layout from '@/components/layout/Layout'
import ImageCarousel from '@/components/ImageCarousel'
import HeroImage from '@/components/ui/HeroImage'
import ContentSection from '@/components/ui/ContentSection'
import ProseContent from '@/components/ui/ProseContent'
import { getPageData } from '@/lib/mdx'
import { remark } from 'remark'
import html from 'remark-html'
import { componentStyles } from '@/styles/design-tokens'

export default async function AboutPage() {
  const pageData = getPageData('about')

  // Process markdown content
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(pageData.content)
  const contentHtml = processedContent.toString()

  // Carousel images
  const carouselImages = [
    {
      src: '/images/2016/12/DSC_1513webb.jpg',
      alt: 'Oana Velcu-Laitinen - Professional portrait'
    },
    {
      src: '/images/2016/12/DSC_1556webb.jpg',
      alt: 'Oana Velcu-Laitinen - Professional portrait'
    },
    {
      src: '/images/2016/12/Oana_website_background_photo_May2018-2.jpg',
      alt: 'Oana Velcu-Laitinen - Professional portrait'
    }
  ]

  return (
    <Layout hasHeroImage>
      <div className="bg-white">
        {/* Hero Image */}
        <HeroImage
          src="/images/2016/12/Oana_about_page_May2018.jpg"
          alt="Oana Velcu-Laitinen - About page hero"
        />

        {/* Content Section */}
        <ContentSection>
          <div className={componentStyles.contentSection.grid}>
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                {pageData.title}
              </h1>
              <ProseContent content={contentHtml} />
            </div>

            {/* Image Carousel */}
            <div className="mt-12 lg:mt-0">
              <ImageCarousel images={carouselImages} autoplayInterval={4000} />
            </div>
          </div>
        </ContentSection>
      </div>
    </Layout>
  )
}

export async function generateMetadata() {
  const pageData = getPageData('about')

  return {
    title: pageData.seoTitle,
    description: pageData.description,
  }
}