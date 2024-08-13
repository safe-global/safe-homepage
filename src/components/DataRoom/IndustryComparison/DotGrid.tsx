import type { MotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { createDots } from './utils/createDots'
import { drawDots } from './utils/drawDots'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'
import useContainerSize from '@/hooks/useContainerSize'
import { updateCanvas } from './utils/updateCanvas'
import useMousePosition from './utils/useMousePosition'

export default function DotGrid({
  containerRef,
  scrollYProgress,
}: {
  containerRef: React.RefObject<HTMLDivElement>
  scrollYProgress?: MotionValue<number>
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMediumScreen()
  const dimensions = useContainerSize(containerRef)
  const mousePosition = useMousePosition(canvasRef, dimensions, scrollYProgress)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dots = createDots(dimensions, isMobile)
    updateCanvas(canvas, ctx, dimensions.width, dimensions.height)

    let animationFrameId: number

    const animate = () => {
      if (dimensions.width > 0 && dimensions.height > 0) {
        drawDots(ctx, dots, dimensions, mousePosition, isMobile)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions, mousePosition, isMobile])

  return <canvas ref={canvasRef} className={css.canvasStyles} />
}
