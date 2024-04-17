import { useRef, useState, useEffect, useCallback } from 'react'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { motion } from 'framer-motion'
import { palette } from '@/styles/palette'

export type AnimationDirection = 'normal' | 'reverse'

interface FloaterProps {
  radius: number
  angle: number
  size: number
  direction: AnimationDirection
  duration: number
  speed: number
}

const Floater = ({ radius, angle, size, speed, direction }: FloaterProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [currentAngle, setCurrentAngle] = useState(angle)
  const requestRef = useRef<number>()
  const speedMultiplierRef = useRef<number>(prefersReducedMotion ? 0.5 : 2)

  // Use a ref to store the last timestamp when the animation frame was called
  const lastFrameTime = useRef<number>(0)

  // TODO: move to a separate hook
  const animate = useCallback(
    (time: number) => {
      if (!lastFrameTime.current) {
        lastFrameTime.current = time
      }
      const deltaTime = time - lastFrameTime.current
      lastFrameTime.current = time
      setCurrentAngle((prevAngle) => {
        const adjustedSpeed = direction === 'reverse' ? -speed : speed
        return (prevAngle + (adjustedSpeed * speedMultiplierRef.current * deltaTime) / 1000) % 360
      })
      requestRef.current = requestAnimationFrame(animate)
    },
    [speed, direction, speedMultiplierRef],
  )

  useEffect(() => {
    speedMultiplierRef.current = prefersReducedMotion ? 0.5 : 2
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [speed, prefersReducedMotion, animate])

  const angleInRadians = (currentAngle * Math.PI) / 180
  const x = radius * Math.cos(angleInRadians)
  const y = radius * Math.sin(angleInRadians)

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

export default Floater
