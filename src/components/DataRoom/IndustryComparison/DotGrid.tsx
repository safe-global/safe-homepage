import { useEffect, useRef, useCallback } from 'react'
import { createDots } from './utils/createDots'
import { drawDots } from './utils/drawDots'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'
import useContainerSize from '@/hooks/useContainerSize'
import { updateCanvas } from './utils/updateCanvas'

export default function DotGrid({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMediumScreen()
  const dimensions = useContainerSize(containerRef)

  const prevRenderStateRef = useRef({ dimensions })
  const dotsRef = useRef<ReturnType<typeof createDots> | null>(null)
  const animationFrameId = useRef<number>()

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || dimensions.width <= 0 || dimensions.height <= 0) return

    const currentRenderState = { dimensions }
    const prevRenderState = prevRenderStateRef.current

    if (!dotsRef.current || currentRenderState.dimensions !== prevRenderState.dimensions) {
      dotsRef.current = createDots(dimensions, isMobile)
      updateCanvas(canvas, ctx, dimensions.width, dimensions.height)
      // Draw dots immediately after creating or updating them
      // This draw call ensure dots are already visible when canvas scrolls into view
      drawDots(ctx, dotsRef.current)
    }

    prevRenderStateRef.current = currentRenderState

    animationFrameId.current = requestAnimationFrame(renderFrame)
  }, [dimensions, isMobile])

  useEffect(() => {
    renderFrame()
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [renderFrame])

  return <canvas ref={canvasRef} className={css.canvasStyles} />
}
