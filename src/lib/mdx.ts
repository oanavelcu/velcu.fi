import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface PageData {
  slug: string
  title: string
  description: string
  seoTitle: string
  featured_image: string | null
  content: string
}

export interface PostData extends PageData {
  date: string
  excerpt: string
}

export function getPageData(slug: string): PageData {
  const realSlug = slug === 'index' ? 'index' : slug
  const fullPath = path.join(contentDirectory, 'pages', `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    seoTitle: data.seoTitle,
    featured_image: data.featured_image,
    content,
  }
}

export function getAllPages(): PageData[] {
  const pagesDirectory = path.join(contentDirectory, 'pages')
  const filenames = fs.readdirSync(pagesDirectory)

  return filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const slug = name.replace(/\.md$/, '')
      return getPageData(slug)
    })
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(contentDirectory, 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    seoTitle: data.seoTitle || data.title,
    featured_image: data.featured_image,
    date: data.date,
    excerpt: data.excerpt,
    content,
  }
}

export function getAllPosts(): PostData[] {
  const postsDirectory = path.join(contentDirectory, 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const slug = name.replace(/\.md$/, '')
      return getPostData(slug)
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}