import { useState, useEffect } from 'react'

interface UseScrollPositionOptions {
  threshold?: number
  throttleMs?: number
}

export function useScrollPosition({ 
  threshold = 0, 
  throttleMs = 16 
}: UseScrollPositionOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const scrollTop = window.scrollY
        setIsScrolled(scrollTop > threshold)
      }, throttleMs)
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [threshold, throttleMs])

  return isScrolled
}