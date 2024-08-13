import useContainerSize from '@/hooks/useContainerSize'
import React, { useEffect, useRef } from 'react'

type WaveProps = {
  height?: number
  color?: string
  amplitude?: number
  frequency?: number
  speed?: number
}

const DEFAULT_HEIGHT = 600
const DEFAULT_COLOR = '#12FF80'
const DEFAULT_AMPLITUDE = 100
const DEFAULT_FREQUENCY = 1
const DEFAULT_SPEED = 3
const STROKE_WIDTH = 4

const Wave = ({
  height = DEFAULT_HEIGHT,
  color = DEFAULT_COLOR,
  amplitude = DEFAULT_AMPLITUDE,
  frequency = DEFAULT_FREQUENCY,
  speed = DEFAULT_SPEED,
}: WaveProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(containerRef)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const elapsed = time - startTime

      // Only create the path if width is valid
      if (width > 0) {
        const path = Array.from({ length: width + 1 }, (_, i) => {
          const y = height / 2 + amplitude * Math.sin((i / width) * 2 * Math.PI * frequency + (elapsed * speed) / 1000)
          return `${i},${y}`
        }).join(' L')

        const pathElement = containerRef.current?.querySelector('path')
        if (pathElement) {
          pathElement.setAttribute('d', `M${path}`)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [width, height, amplitude, frequency, speed])

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      {width > 0 && (
        <svg width={width} height={height}>
          <path fill="none" stroke={color} strokeWidth={STROKE_WIDTH} />
        </svg>
      )}
    </div>
  )
}

export default Wave
