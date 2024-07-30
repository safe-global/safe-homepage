import React, { useEffect, useRef, useState } from 'react'

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
  const pathRef = useRef<SVGPathElement>(null)
  const requestRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const [width, setWidth] = useState(0)
  const pointsRef = useRef<string[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const updateWidth = (entries: ResizeObserverEntry[]) => {
      setWidth(entries[0].contentRect.width)
    }

    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time
      const elapsed = time - startTimeRef.current

      const path = Array.from({ length: width + 1 }, (_, i) => {
        const y = height / 2 + amplitude * Math.sin((i / width) * 2 * Math.PI * frequency + (elapsed * speed) / 1000)
        return `${i},${y}`
      }).join(' L')

      pathRef.current?.setAttribute('d', `M${path}`)

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [width, height, amplitude, frequency, speed])

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg width={width} height={height}>
        <path ref={pathRef} fill="none" stroke={color} strokeWidth={STROKE_WIDTH} />
      </svg>
    </div>
  )
}

export default Wave
