import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

interface FloaterProps {
  radius: number
  angle: number
  size: number
  direction: 'normal' | 'reverse'
  duration: number
  speed: number
}

const Floater: React.FC<FloaterProps> = ({ radius, angle, size, speed, direction }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [currentAngle, setCurrentAngle] = useState(angle)
  const requestRef = useRef<number>()
  const speedMultiplierRef = useRef<number>(prefersReducedMotion ? 0.5 : 2)

  // Use a ref to store the last timestamp when the animation frame was called
  const lastFrameTime = useRef<number>(0)

  const animate = (time: number) => {
    if (!lastFrameTime.current) {
      lastFrameTime.current = time
    }
    const deltaTime = time - lastFrameTime.current
    lastFrameTime.current = time
    setCurrentAngle((prevAngle) => (prevAngle + (speed * speedMultiplierRef.current * deltaTime) / 1000) % 360)
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    speedMultiplierRef.current = prefersReducedMotion ? 0.5 : 2
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [speed, prefersReducedMotion])

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
        background: '#12FF80',
      }}
    />
  )
}

export default Floater
