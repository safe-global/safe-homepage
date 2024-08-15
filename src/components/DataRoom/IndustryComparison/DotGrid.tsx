import type { MotionValue } from 'framer-motion'
import { useEffect, useRef, useCallback } from 'react'
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

  const prevRenderStateRef = useRef({ dimensions, mousePosition, isMobile })
  const dotsRef = useRef<ReturnType<typeof createDots> | null>(null)
  const animationFrameId = useRef<number>()

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || dimensions.width <= 0 || dimensions.height <= 0) return

    const currentRenderState = { dimensions, mousePosition, isMobile }
    const prevRenderState = prevRenderStateRef.current

    if (
      !dotsRef.current ||
      currentRenderState.dimensions !== prevRenderState.dimensions ||
      currentRenderState.isMobile !== prevRenderState.isMobile
    ) {
      dotsRef.current = createDots(dimensions, isMobile)
      updateCanvas(canvas, ctx, dimensions.width, dimensions.height)
    }

    const isAnimationComplete = drawDots(ctx, dotsRef.current, dimensions, mousePosition, isMobile)
    prevRenderStateRef.current = currentRenderState

    if (!isAnimationComplete) {
      animationFrameId.current = requestAnimationFrame(renderFrame)
    }
  }, [dimensions, mousePosition, isMobile])

  useEffect(() => {
    renderFrame()
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [renderFrame])

  return <canvas ref={canvasRef} className={css.canvasStyles} />
}
