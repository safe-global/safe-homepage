import { useState, useEffect } from 'react'
import type { MotionValue } from 'framer-motion'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

/**
 * Custom hook to track mouse position or simulate it based on scroll progress.
 * @param containerRef - Reference to the container element.
 * @param canvasRef - Reference to the canvas element.
 * @param dimensions - Object containing width and height of the container.
 * @param scrollYProgress - MotionValue for scroll progress, used on mobile devices.
 * @returns An object with x and y coordinates representing either:
 *          - Actual mouse position relative to the canvas (on desktop)
 *          - Simulated position based on scroll progress (on mobile)
 */

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
