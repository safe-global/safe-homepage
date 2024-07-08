import type { MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

// Thresholds for scroll progress
const SCROLL_THRESHOLD_UPPER = 0.21
const SCROLL_THRESHOLD_LOWER = 0.2
const INITIAL_VALUE = 0

// Custom hook for managing counter based on scroll
export function useCounterScroll(scrollYProgress: MotionValue<number>, percentage: number): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const checkScrollProgress = () => {
      const latest = scrollYProgress.get()
      if (latest >= SCROLL_THRESHOLD_UPPER) {
        setValue(percentage)
      } else if (latest <= SCROLL_THRESHOLD_LOWER) {
        setValue(INITIAL_VALUE)
      }
    }

    const unsubscribe = scrollYProgress.on('change', checkScrollProgress)

    // Initial check
    checkScrollProgress()

    return () => unsubscribe()
  }, [scrollYProgress, percentage])

  return value
}
