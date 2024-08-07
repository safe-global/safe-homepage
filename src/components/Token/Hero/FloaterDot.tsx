import { useRef, useState, useEffect, useCallback } from 'react'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { motion } from 'framer-motion'
import { palette } from '@/styles/palette'

export type AnimationDirection = 'normal' | 'reverse'

interface FloaterDotProps {
  radius: number
  angle: number
  size: number
  direction: AnimationDirection
  duration: number
  speed: number
}

const FloaterDot = ({ radius, angle, size, speed, direction }: FloaterDotProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const speedMultiplier = prefersReducedMotion ? 0.5 : 2
  const adjustedSpeed = direction === 'reverse' ? -speed : speed
  const [currentAngle, setCurrentAngle] = useState(angle)
  const requestRef = useRef<number>()

  // Use a ref to store the last timestamp when the animation frame was called
  const lastFrameTime = useRef<number>(0)

  // TODO: move to a separate hook
  const animate = useCallback(
    (time: number) => {
      // If it's the first frame, initialize lastFrameTime to the current time
      if (lastFrameTime.current === 0) lastFrameTime.current = time

      // Time since the last frame
      const deltaTime = time - lastFrameTime.current

      // Update the lastFrameTime
      lastFrameTime.current = time

      setCurrentAngle((prevAngle) => {
        const angleChange = (adjustedSpeed * speedMultiplier * deltaTime) / 1000

        // Add the angle change to the previous angle and ensure the result stays within the range of 0 to 359 degrees
        const newAngle = (prevAngle + angleChange) % 360

        return newAngle
      })

      requestRef.current = requestAnimationFrame(animate)
    },
    [adjustedSpeed, speedMultiplier],
  )

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [speed, prefersReducedMotion, animate])

  const angleInRadians = (currentAngle * Math.PI) / 180
  const x = (radius * Math.cos(angleInRadians)).toFixed(1)
  const y = (radius * Math.sin(angleInRadians)).toFixed(1)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: Math.random() * 2,
        ease: 'easeInOut',
        duration: Math.random() * 0.5,
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        position: 'absolute',
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(250px + ${y}px - ${size / 2}px)`,
        background: `${palette.primary.main}`,
      }}
    />
  )
}

export default FloaterDot
