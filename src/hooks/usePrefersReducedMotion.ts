import { useState, useEffect } from 'react'

const REDUCED_MOTION_MEDIA_QUERY = '(prefers-reduced-motion: reduce)'

const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(REDUCED_MOTION_MEDIA_QUERY)
    setPrefersReducedMotion(mediaQueryList.matches)

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}

export default usePrefersReducedMotion
