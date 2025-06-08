import Layout from '@/components/layout/Layout'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Blog posts, publications, and resources about creativity, leadership, and personal development from Oana Velcu-Laitinen.',
}

export default function ResourcesPage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Header */}
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Resources
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Insights, articles, and resources about creativity, leadership, and personal development.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Blog Section */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Posts</h2>
              <p className="text-gray-600 mb-6">
                Explore articles about creativity, leadership, entrepreneurship, and personal development.
              </p>

              {/* Featured Blog Posts */}
              <div className="space-y-4">
                <article className="border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href="/blog/creativity-in-research-why-what-how" className="hover:text-indigo-600">
                      Creativity in Research: Why, What, How
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exploring the role of creativity in academic and professional research environments.
                  </p>
                </article>

                <article className="border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href="/blog/inclusive-creativity-for-prototyping" className="hover:text-indigo-600">
                      Inclusive Creativity for Prototyping
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How to create inclusive environments that foster creative collaboration.
                  </p>
                </article>

                <article className="pb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href="/blog/how-to-respond-to-the-early-signs-of-vulnerability-to-boost-psychological-safety" className="hover:text-indigo-600">
                      Responding to Early Signs of Vulnerability
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Building psychological safety through understanding and addressing vulnerability.
                  </p>
                </article>
              </div>

              <div className="mt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  View all blog posts
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Publications Section */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
              <p className="text-gray-600 mb-6">
                Academic publications, research, and thought leadership articles.
              </p>

              {/* Featured Publications */}
              <div className="space-y-6">
                <article className="border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    How to Develop Your Creative Identity at Work
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    A comprehensive guide to nurturing creativity in professional environments.
                  </p>
                  <a
                    href="/book-the-creative-identity"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    Learn more about the book
                    <span className="ml-1">→</span>
                  </a>
                </article>

                <article className="border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Research on Creative Leadership
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Academic research contributions to the field of creative leadership and organizational psychology.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Guest Articles & Interviews
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Featured writing and interviews in professional publications and podcasts.
                  </p>
                </article>
              </div>

              <div className="mt-6">
                <p className="text-gray-500 text-sm italic">
                  Additional publications and research papers are available upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-indigo-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to receive insights about creativity, leadership, and personal development.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}