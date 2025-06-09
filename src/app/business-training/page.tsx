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

          {/* Visual Training Modules Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Transformational Leadership */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transformational Leadership</h3>
                <p className="text-gray-600 mb-6">
                  Because organisational changes reflect the quality of conversations in teams. Direct and one to one conversations are the engine of change when the feeling of overwhelm is replaced by focus on priorities.
                </p>
                <div className="flex justify-center">
                  <OptimizedImage
                    src="/images/2022/07/Website_Trainings_page_Building_culture_transformational_leadership_July2022-300x169.png"
                    alt="Transformational Leadership Training"
                    className="w-full max-w-md rounded-lg shadow-sm"
                    width={300}
                    height={169}
                  />
                </div>
              </div>

              {/* Emotional Intelligence */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Intelligence</h3>
                <p className="text-gray-600 mb-6">
                  Because being involved in organisational change means managing tension in work relationships. Self-awareness is like a breath of fresh air.
                </p>
                <div className="flex justify-center">
                  <OptimizedImage
                    src="/images/2022/07/Website_Trainings_page_Building_culture_emotinal_intelligence_July2022-300x169.png"
                    alt="Emotional Intelligence Training"
                    className="w-full max-w-md rounded-lg shadow-sm"
                    width={300}
                    height={169}
                  />
                </div>
              </div>
            </div>

            {/* Connection and Engagement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connection and Engagement</h3>
                <p className="text-gray-600 mb-6">
                  Because lack of employee motivation to engage in change will result in overdue projects.
                </p>
                <div className="flex justify-center">
                  <OptimizedImage
                    src="/images/2022/07/Website_Trainings_page_Building_culture_connection_July2022-300x169.png"
                    alt="Connection and Engagement Training"
                    className="w-full max-w-md rounded-lg shadow-sm"
                    width={300}
                    height={169}
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative Thinking Development</h3>
                <p className="text-gray-600 mb-6">
                  Because we get the tendency to get attached to a particular way of thinking and a set of rules. And breakthroughs happen when we break free from the habitual thinking and dare to try out new things.
                </p>
                <div className="flex justify-center">
                  <OptimizedImage
                    src="/images/2022/07/Website_Trainings_page_Building_culture_creative_thinking_July2022-1-300x169.png"
                    alt="Creative Thinking Training"
                    className="w-full max-w-md rounded-lg shadow-sm"
                    width={300}
                    height={169}
                  />
                </div>
              </div>
            </div>

            {/* Final Training Module */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Wellbeing at Work</h3>
                <p className="text-gray-600 mb-6">
                  In the same way we are interested in brushing our teeth twice a day, we can get interested in taking care of our emotional states.
                </p>
                <div className="flex justify-center">
                  <OptimizedImage
                    src="/images/2022/07/Website_Trainings_page_Building_culture_workwellbeing_July2022-2-300x169.png"
                    alt="Emotional Wellbeing Training"
                    className="w-full max-w-md rounded-lg shadow-sm"
                    width={300}
                    height={169}
                  />
                </div>
              </div>
            </div>

            {/* Who May Benefit Section */}
            <div className="bg-indigo-50 rounded-lg p-8">
              <h4 className="text-lg font-medium text-gray-900 mb-6">Who may benefit from this training?</h4>
              <div className="max-w-2xl">
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>Leaders and change agents</li>
                  <li>Researchers</li>
                  <li>Programmers</li>
                  <li>Experts with creative and entrepreneurial roles in organisations</li>
                  <li>Newly formed interdisciplinary teams</li>
                </ul>
              </div>
            </div>
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