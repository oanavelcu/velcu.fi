'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { navigationConfig, brandConfig } from '@/config/navigation'
import { headerStyles } from '@/styles/header-styles'
import { cn } from '@/styles/design-tokens'
import Icon from '@/components/ui/Icon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrollPosition({ throttleMs: 16 })

  const headerClasses = cn(
    headerStyles.base,
    isScrolled ? headerStyles.background.scrolled : headerStyles.background.transparent
  )

  const brandClasses = cn(
    headerStyles.brand.base,
    isScrolled ? headerStyles.brand.scrolled : headerStyles.brand.transparent
  )

  return (
    <header className={headerClasses}>
      <nav className={headerStyles.layout.nav}>
        <div className={headerStyles.layout.container}>
          <div className={headerStyles.layout.brandContainer}>
            <Link href="/" className={brandClasses}>
              {brandConfig.name}
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className={headerStyles.navigation.desktop.container}>
            {navigationConfig.map((item) => {
              const linkClasses = cn(
                headerStyles.navigation.desktop.link.base,
                isScrolled 
                  ? headerStyles.navigation.desktop.link.scrolled
                  : headerStyles.navigation.desktop.link.transparent
              )
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClasses}
                  title={item.description}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className={headerStyles.navigation.mobile.button.container}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                headerStyles.navigation.mobile.button.base,
                isScrolled 
                  ? headerStyles.navigation.mobile.button.scrolled
                  : headerStyles.navigation.mobile.button.transparent
              )}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <Icon name={isMenuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className={headerStyles.navigation.mobile.menu.container}>
            <div className={headerStyles.navigation.mobile.menu.content}>
              {navigationConfig.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={headerStyles.navigation.mobile.menu.link}
                  onClick={() => setIsMenuOpen(false)}
                  title={item.description}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}