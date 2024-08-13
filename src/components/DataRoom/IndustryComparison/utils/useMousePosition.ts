import { useState, useEffect } from 'react'
import type { MotionValue } from 'framer-motion'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

export default function useMousePosition(
  containerRef: React.RefObject<HTMLDivElement>,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  dimensions: { width: number; height: number },
  scrollYProgress?: MotionValue<number>,
) {
  const isMobile = useIsMediumScreen()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current

    if (isMobile && scrollYProgress) {
      const updatePositionMobile = () => {
        const progress = scrollYProgress.get()
        const height = container?.getBoundingClientRect().height || 0
        setMousePosition({ x: dimensions.width - dimensions.width / 8, y: progress * height })
      }
      return scrollYProgress.on('change', updatePositionMobile)
    } else {
      const updatePositionDesktop = (e: MouseEvent) => {
        const rect = canvasRef.current?.getBoundingClientRect()
        if (rect) {
          setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }
      }
      container?.addEventListener('mousemove', updatePositionDesktop)
      return () => container?.removeEventListener('mousemove', updatePositionDesktop)
    }
  }, [containerRef, canvasRef, isMobile, scrollYProgress, dimensions.width])

  return mousePosition
}
