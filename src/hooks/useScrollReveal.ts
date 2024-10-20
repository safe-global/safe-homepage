import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

const useScrollReveal = (elementRef: RefObject<HTMLElement>, percentVisible: number, once: boolean = false) => {
  const [isVisible, setIsVisible] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (completed) return

      const windowHeight = window.innerHeight

      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()

        const visible = !(
          Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) < percentVisible ||
          Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
        setIsVisible(visible)
        if (visible && once) setCompleted(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [elementRef, percentVisible, once, isVisible, completed])

  return isVisible
}

export default useScrollReveal
