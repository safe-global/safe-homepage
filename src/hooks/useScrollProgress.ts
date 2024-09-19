import type { RefObject } from 'react'
import { useScroll } from 'framer-motion'

const useScrollProgress = (containerRef: RefObject<HTMLElement>) =>
  useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

export default useScrollProgress
