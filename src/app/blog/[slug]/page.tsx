import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Get blog post data
function getBlogPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts')
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontMatter: data,
      content
    }
  } catch {
    return null
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts')
    const filenames = fs.readdirSync(postsDirectory)

    return filenames
      .filter((name) => name.endsWith('.md'))
      .map((name) => ({
        slug: name.replace(/\.md$/, '')
      }))
  } catch {
    return []
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.frontMatter.title || 'Blog Post',
    description: post.frontMatter.excerpt || post.frontMatter.description || 'A blog post by Oana Velcu-Laitinen'
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Process markdown content
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <Layout>
      <div className="bg-white">
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                {post.frontMatter.date && (
                  <time dateTime={post.frontMatter.date}>
                    {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
                {post.frontMatter.readTime && (
                  <>
                    <span>•</span>
                    <span>{post.frontMatter.readTime}</span>
                  </>
                )}
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {post.frontMatter.title || 'Untitled Post'}
              </h1>

              {post.frontMatter.excerpt && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {post.frontMatter.excerpt}
                </p>
              )}
            </div>
          </header>

          {/* Hero Image */}
          {post.frontMatter.heroImage && (
            <div className="mb-12">
              <Image
                src={post.frontMatter.heroImage}
                alt={post.frontMatter.title}
                className="w-full h-64 sm:h-80 object-cover object-top rounded-lg shadow-lg"
                style={{ objectPosition: '50% 0%' }}
                width={800}
                height={400}
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="space-y-6 [&>p]:mb-4 [&>p:last-child]:mb-0 [&>h2]:mt-8 [&>h2]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h3]:mt-6 [&>h3]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h4]:mt-4 [&>h4]:mb-3 [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-gray-900 [&>blockquote]:my-6 [&>blockquote]:border-l-4 [&>blockquote]:border-indigo-200 [&>blockquote]:pl-4 [&>blockquote]:italic [&>ul]:my-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:my-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2 [&>img]:my-8 [&>img]:rounded-lg [&>img]:shadow-lg [&_a]:text-indigo-600 [&_a]:hover:text-indigo-500 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  )
}