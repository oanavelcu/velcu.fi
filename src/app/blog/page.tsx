import Layout from '@/components/layout/Layout'
import HeroImage from '@/components/ui/HeroImage'
import ContentSection from '@/components/ui/ContentSection'
import Link from 'next/link'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, articles, and thoughts about creativity, leadership, and personal development from Oana Velcu-Laitinen.',
}

// Get all blog posts from content directory
function getAllBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts')
    const filenames = fs.readdirSync(postsDirectory)

    const posts = filenames
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const fullPath = path.join(postsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug: name.replace(/\.md$/, ''),
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          date: data.date || '',
          readTime: data.readTime || '5 min read',
          heroImage: data.heroImage || null
        }
      })
      .sort((a, b) => {
        // Sort by date descending (newest first)
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })

    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <Layout hasHeroImage>
      <div className="bg-white">
        {/* Hero Image */}
        <HeroImage
          src="/images/hero-blog.jpg"
          alt="Oana Velcu-Laitinen - Business Coaching and Creative Leadership"
          objectPosition="50% 30%"
        />

        {/* Page Header */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Blog
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Insights, articles, and thoughts about creativity, leadership, and personal development.
              </p>
            </div>
          </div>
        </div>

        <ContentSection narrow>
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                  {/* Hero Image */}
                  {post.heroImage && (
                    <div className="md:w-48 md:flex-shrink-0">
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={post.heroImage}
                          alt={post.title}
                          className="w-full h-48 md:h-32 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          style={{ objectPosition: '50% 0%' }}
                        />
                      </Link>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>

                  </div>
                </div>
              </article>
            ))}
          </div>
        </ContentSection>
      </div>
    </Layout>
  )
}