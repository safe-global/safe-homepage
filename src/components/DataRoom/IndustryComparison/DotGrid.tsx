import type { MotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { createDots } from './utils/createDots'
import { updateCanvasDimensions } from './utils/updateCanvasDimensions'
import { drawDots } from './utils/drawDots'
import { lerp } from './utils/lerp'

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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [lerpedMousePosition, setLerpedMousePosition] = useState({ x: 0, y: 0 })

  const dots = useMemo(() => createDots(dimensions, isMobile), [dimensions, isMobile])

  useEffect(() => {
    const updateDimensions = () => {
      const newDimensions = updateCanvasDimensions(canvasRef, containerRef)
      setDimensions(newDimensions)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }
    }

    const updateMobileMousePosition = () => {
      if (scrollYProgress && isMobile && containerRef.current) {
        const progress = scrollYProgress.get()
        const { height } = containerRef.current.getBoundingClientRect()
        setMousePosition({ x: dimensions.width - dimensions.width / 8, y: progress * height })
      }
    }

    const lerpMousePosition = () => {
      setLerpedMousePosition((prev) => ({
        x: lerp(prev.x, mousePosition.x),
        y: lerp(prev.y, mousePosition.y),
      }))
      requestAnimationFrame(lerpMousePosition)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    const container = containerRef.current
    if (isMobile && scrollYProgress) {
      scrollYProgress.onChange(updateMobileMousePosition)
    } else {
      container?.addEventListener('mousemove', handleMouseMove)
    }
    lerpMousePosition()

    return () => {
      window.removeEventListener('resize', updateDimensions)
      if (isMobile && scrollYProgress) {
        scrollYProgress.clearListeners()
      } else {
        container?.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [mousePosition.x, mousePosition.y, containerRef, isMobile, scrollYProgress, dimensions.width])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const animate = () => {
      drawDots(ctx, dots, dimensions, lerpedMousePosition, isMobile)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dots, dimensions, lerpedMousePosition, isMobile])

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
