import type { MotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { createDots } from './utils/createDots'
import { updateCanvasDimensions } from './utils/updateCanvasDimensions'
import { drawDots } from './utils/drawDots'
import { lerp } from './utils/lerp'
import { getContainerDimensions } from './utils/getContainerDimensions'

export default function DotGrid({
  containerRef,
  isMobile,
  scrollYProgress,
}: {
  containerRef: React.RefObject<HTMLDivElement>
  isMobile: boolean
  scrollYProgress?: MotionValue<number>
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dimensions = getContainerDimensions(containerRef)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [lerpedMousePosition, setLerpedMousePosition] = useState({ x: 0, y: 0 })

  const dots = useMemo(() => createDots(dimensions, isMobile), [dimensions, isMobile])

  const updateDimensions = useCallback(() => {
    updateCanvasDimensions(canvasRef, dimensions.width, dimensions.height)
  }, [dimensions.width, dimensions.height])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (canvasRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }
    },
    [containerRef],
  )

  const updateMobileMousePosition = useCallback(() => {
    if (scrollYProgress && isMobile && containerRef.current) {
      const progress = scrollYProgress.get()
      const { height } = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: dimensions.width - dimensions.width / 8, y: progress * height })
    }
  }, [scrollYProgress, isMobile, containerRef, dimensions.width])

  const lerpMousePosition = useCallback(() => {
    setLerpedMousePosition((prev) => ({
      x: lerp(prev.x, mousePosition.x),
      y: lerp(prev.y, mousePosition.y),
    }))
    return requestAnimationFrame(lerpMousePosition)
  }, [mousePosition.x, mousePosition.y])

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    const container = containerRef.current

    if (isMobile && scrollYProgress) {
      scrollYProgress.onChange(updateMobileMousePosition)
    } else {
      container?.addEventListener('mousemove', handleMouseMove)
    }

    const animationFrameId = lerpMousePosition()

    return () => {
      window.removeEventListener('resize', updateDimensions)
      if (isMobile && scrollYProgress) {
        scrollYProgress.clearListeners()
      } else {
        container?.removeEventListener('mousemove', handleMouseMove)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [
    updateDimensions,
    handleMouseMove,
    updateMobileMousePosition,
    lerpMousePosition,
    containerRef,
    isMobile,
    scrollYProgress,
  ])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const animate = () => {
      drawDots(ctx, dots, dimensions, mousePosition, lerpedMousePosition, isMobile)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dots, dimensions, mousePosition, lerpedMousePosition, isMobile])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
