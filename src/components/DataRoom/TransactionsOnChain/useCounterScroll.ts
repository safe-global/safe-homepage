import type { MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

// Custom hook for managing counter based on scroll
export function useCounterScroll(scrollYProgress: MotionValue<number>, percentage: number): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const checkScrollProgress = () => {
      const latest = scrollYProgress.get()
      if (latest >= 0.11) {
        setValue(percentage)
      } else if (latest <= 0.1) {
        setValue(0)
      }
    }

    const unsubscribe = scrollYProgress.on('change', checkScrollProgress)

    // Initial check
    checkScrollProgress()

    return () => unsubscribe()
  }, [scrollYProgress, percentage])

  return value
}
