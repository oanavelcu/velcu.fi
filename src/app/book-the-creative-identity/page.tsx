import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import HeroImage from '@/components/ui/HeroImage'
import ContentSection from '@/components/ui/ContentSection'

export default function BookPage() {
  return (
    <Layout hasHeroImage>
      <div className="bg-white">
        {/* Hero Image */}
        <HeroImage
          src="/images/hero-book-creative-identity.jpg"
          alt="How to Develop Your Creative Identity at Work - Book by Oana Velcu-Laitinen"
          objectPosition="50% 0%"
        />

        {/* Page Header */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                How to Develop Your Creative Identity at Work
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive guide for professionals seeking meaningful work impact through creativity
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <ContentSection narrow>
          <div className="space-y-12">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Why would the book be helpful for you?</h2>

              <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                <div className="md:w-1/3">
                  <Image
                    src="/images/hero-book-creative-identity.jpg"
                    alt="Book autograph"
                    className="w-full rounded-lg shadow-md"
                    width={400}
                    height={600}
                  />
                </div>
                <div className="md:w-2/3 space-y-4">
                  <p className="text-gray-700 leading-relaxed">Are you one of the people who aspire to do work that makes an original and meaningful impact?</p>
                  <p className="text-gray-700 leading-relaxed">Sometimes you may experience despair and depression. In objective measures of success - title and income -, you&rsquo;re doing great. Yet, in your most sincere moments, you feel something is missing.</p>
                  <p className="text-gray-700 leading-relaxed">What&rsquo;s going on? There&rsquo;s misalignment between the achiever and the creative person that you are. This book inspires you to test your potentialities as a creator.</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you&rsquo;ll learn</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">You&rsquo;ll think again about your personal creativity, how it shows in your current work role and in what other ways you can apply it.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">You&rsquo;ll be equipped with the core principles to proactively craft an environment of experimentation with creative and entrepreneurial initiatives.</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How will the learning benefit you</h2>
              <p className="text-gray-700 mb-6">You&rsquo;ll experience three psychological benefits in new roles as a creator:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Self-empowerment</h3>
                </div>
                <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Emotional involvement</h3>
                  <p className="text-sm text-gray-600">with what you do</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Being valued</h3>
                  <p className="text-sm text-gray-600">for original work</p>
                </div>
              </div>
            </div>

            {/* Where to Buy */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get the Book</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="https://link.springer.com/book/10.1007/978-1-4842-8680-7" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Springer Link</span>
                </a>
                <a href="https://www.adlibris.com/fi/kirja/how-to-develop-your-creative-identity-at-work-9781484286791" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Adlibris</span>
                </a>
                <a href="https://www.amazon.co.uk/Develop-Your-Creative-Identity-Work/dp/1484286790" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Amazon UK</span>
                </a>
                <a href="https://www.amazon.com/Develop-Your-Creative-Identity-Work/dp/1484286790" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Amazon US</span>
                </a>
                <a href="https://www.amazon.de/-/en/Oana-Velcu-Laitinen/dp/1484286790" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Amazon DE</span>
                </a>
                <a href="https://www.bookdepository.com/How-Develop-Your-Creative-Identity-at-Work-Oana-Velcu-Laitinen/9781484286791" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Book Depository</span>
                </a>
                <a href="https://www.barnesandnoble.com/w/how-to-develop-your-creative-identity-at-work-oana-velcu-laitinen/1141816263?ean=9781484286791" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border">
                  <span className="text-sm font-medium text-gray-900">Barnes & Noble</span>
                </a>
              </div>
            </div>

            {/* Reader Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What readers are saying</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900">Jonas Spohr</h4>
                    <p className="text-sm text-gray-600">University Lecturer</p>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    &ldquo;For a person like me who usually reads only fiction and books which should make me better in my narrow field of work, this book was a refreshing read. I actually think it benefited my career more than the handful of books in my field that I have read this year.&rdquo;
                  </blockquote>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900">Viorica Milea</h4>
                    <p className="text-sm text-gray-600">Lead Service Designer</p>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    &ldquo;When I started reading, I cried. Then in the middle, I laughed. Now as I&rsquo;m reading the last pages, I begin to think of all the possible directions I could explore in my career.&rdquo;
                  </blockquote>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900">John Swallow</h4>
                    <p className="text-sm text-gray-600">Coach, Educator & Author</p>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    &ldquo;The book provides real-life examples and practical steps to help the reader become more creative. I am delighted to recommend this fascinating read by an author clearly well-versed in the subject of creativity.&rdquo;
                  </blockquote>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900">Nando Miranda</h4>
                    <p className="text-sm text-gray-600">Freelance Consultant</p>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    &ldquo;I was intrigued by this amazing book. What inspired me the most was that I could immediately put the tips and advice into action... I am now making lists and signs around the house as if I were a wide-eyed child again.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-indigo-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay up-to-date with new materials</h2>
              <p className="text-gray-700 mb-6">For updates about the book and new materials, get in touch.</p>
              <a href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Contact Me
              </a>
            </div>
          </div>
        </ContentSection>
      </div>
    </Layout>
  )
}

export async function generateMetadata() {
  return {
    title: 'How to Develop Your Creative Identity at Work - Book by Oana Velcu-Laitinen',
    description: 'A comprehensive guide for professionals seeking meaningful work impact through creativity. Learn to develop your creative identity and find alignment between achievement and creativity.',
  }
}