export interface NavigationItem {
  name: string
  href: string
  external?: boolean
  description?: string
}

export const navigationConfig: NavigationItem[] = [
  { name: 'Home', href: '/', description: 'Homepage' },
  { name: 'About', href: '/about', description: 'About Oana Velcu-Laitinen' },
  { name: 'Book', href: '/book-the-creative-identity', description: 'The Creative Identity book' },
  { name: 'For Business', href: '/business-training', description: 'Business training services' },
  { name: 'Personal', href: '/career-coaching', description: 'Personal coaching services' },
  { name: 'Blog', href: '/blog', description: 'Blog articles and insights' },
  { name: 'Testimonials', href: '/testimonials', description: 'Client testimonials' },
] as const

// Brand configuration
export const brandConfig = {
  name: 'Oana Velcu-Laitinen',
  tagline: 'NeuroLeadership Coach and Trainer',
  email: 'oana@velcu.fi',
  location: 'Helsinki, Finland',
} as const