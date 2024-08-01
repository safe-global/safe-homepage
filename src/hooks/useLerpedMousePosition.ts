import { lerp } from '@/components/DataRoom/IndustryComparison/utils/lerp'
import { useState, useCallback, useEffect } from 'react'

export const useLerpedMousePosition = (mousePosition: { x: number; y: number }) => {
  const [lerpedMousePosition, setLerpedMousePosition] = useState({ x: 0, y: 0 })

  const lerpMousePosition = useCallback(() => {
    setLerpedMousePosition((prev) => ({
      x: lerp(prev.x, mousePosition.x),
      y: lerp(prev.y, mousePosition.y),
    }))
  }, [mousePosition.x, mousePosition.y])

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(function animate() {
      lerpMousePosition()
      requestAnimationFrame(animate)
    })

    return () => cancelAnimationFrame(animationFrameId)
  }, [lerpMousePosition])

  return lerpedMousePosition
}
