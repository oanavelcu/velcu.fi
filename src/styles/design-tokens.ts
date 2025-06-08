// Centralized design tokens and styling utilities
export const designTokens = {
  colors: {
    primary: {
      50: 'indigo-50',
      500: 'indigo-500',
      600: 'indigo-600',
      700: 'indigo-700',
    },
    gray: {
      50: 'gray-50',
      100: 'gray-100',
      200: 'gray-200',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      900: 'gray-900',
    },
    blue: {
      500: 'blue-500',
      600: 'blue-600',
    },
    white: 'white',
  },
  
  spacing: {
    section: 'py-16',
    container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    containerNarrow: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8',
    gridGap: 'gap-8 lg:gap-16',
  },
  
  typography: {
    heading1: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl',
    heading2: 'text-3xl font-bold text-gray-900',
    heading3: 'text-2xl font-semibold text-gray-900',
    body: 'text-gray-600',
    bodyLarge: 'text-lg text-gray-600',
  },
  
  buttons: {
    primary: 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    primaryLarge: 'inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-wide',
  },
  
  layouts: {
    hero: 'w-full h-[70vh] object-cover object-center',
    section: 'py-16',
    sectionAlt: 'bg-gray-50 py-16',
    grid2Col: 'lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start',
    grid2ColCenter: 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center',
  },
  
  prose: {
    base: {
      paragraphs: '[&>p]:mb-6 [&>p]:text-gray-700 [&>p]:leading-relaxed',
      headings: {
        h1: '[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-6 [&>h1]:mt-8',
        h2: '[&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-8',
        h3: '[&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-gray-900 [&>h3]:mb-3 [&>h3]:mt-6',
      },
      lists: '[&>ul]:mb-6 [&>ul]:pl-6 [&>ol]:mb-6 [&>ol]:pl-6 [&>li]:mb-2',
      blockquotes: '[&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600',
      links: '[&>p>a]:text-blue-600 [&>p>a]:hover:text-blue-500 [&>p>a]:underline',
    },
  },
  
  cards: {
    base: 'bg-white rounded-lg shadow-sm p-6',
    hover: 'bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow',
  },
} as const

// Utility function to combine classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Component style variants
export const componentStyles = {
  pageHeader: {
    container: `bg-gray-50 ${designTokens.spacing.section}`,
    content: `${designTokens.spacing.container} text-center`,
    title: designTokens.typography.heading1,
    subtitle: `mt-4 ${designTokens.typography.bodyLarge} max-w-2xl mx-auto`,
  },
  
  contentSection: {
    container: designTokens.spacing.section,
    content: designTokens.spacing.container,
    grid: designTokens.layouts.grid2Col,
  },
  
  heroImage: {
    wrapper: 'w-full',
    image: designTokens.layouts.hero,
  },
} as const