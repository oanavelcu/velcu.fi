import { designTokens } from './design-tokens'

export const headerStyles = {
  base: 'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
  
  background: {
    scrolled: 'bg-white shadow-md border-b border-gray-200',
    transparent: 'bg-gradient-to-b from-black/40 via-black/20 to-transparent',
  },
  
  brand: {
    base: 'text-lg sm:text-xl font-bold transition-colors duration-300',
    scrolled: 'text-gray-900',
    transparent: 'text-white',
  },
  
  navigation: {
    desktop: {
      container: 'hidden lg:flex lg:items-center lg:space-x-8',
      link: {
        base: 'px-3 py-2 text-sm font-medium transition-all duration-300',
        scrolled: 'text-gray-700 hover:text-gray-900',
        transparent: 'text-white/90 hover:text-white hover:bg-white/20 rounded-md',
      },
    },
    mobile: {
      button: {
        container: 'lg:hidden flex items-center',
        base: 'focus:outline-none transition-colors duration-300',
        scrolled: 'text-gray-700 hover:text-gray-900 focus:text-gray-900',
        transparent: 'text-white/90 hover:text-white focus:text-white',
      },
      menu: {
        container: 'lg:hidden bg-white/95 backdrop-blur-md border-b border-white/20',
        content: 'px-2 pt-2 pb-3 space-y-1 sm:px-3',
        link: 'text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium',
      },
    },
  },
  
  layout: {
    nav: designTokens.spacing.container,
    container: 'flex h-16 justify-between items-center',
    brandContainer: 'flex-shrink-0',
  },
} as const