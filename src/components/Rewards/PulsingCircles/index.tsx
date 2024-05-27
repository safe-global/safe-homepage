import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import css from './styles.module.css'
import { palette } from '@/styles/palette'

interface CircleProps {
  angle: number
  radius: number
  size: number
}

const NUMBER_OF_CIRCLES = 120

export default function PulsingCircles() {
  return (
    // Container for the pulsing circles with a continuous rotation animation
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 359 }}
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: 'linear',
      }}
      className={css.container}
    >
      <div>
        {/* Generate an array of circles with random properties
        This generates around 50% of total circles near the edge */}
        {Array.from({ length: NUMBER_OF_CIRCLES }, (_, i) => {
          const radius = Math.random() < 0.5 ? Math.random() * 220 : Math.random() * 30 + 220
          const angle = Math.random() * 360
          const size = Math.random() * 10 + 2
          return <Circle key={i} angle={angle} radius={radius} size={size} />
        })}
      </div>
    </motion.div>
  )
}

const Circle = ({ angle, radius, size }: CircleProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  // Trigger the pulsing animation at random intervals
  useEffect(() => {
    function triggerAnimation() {
      setIsAnimating(true)

      setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
    }

    // Define the minimum and maximum delay for the animation trigger
    const minDelay = 4000
    const maxDelay = 10000
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay

    const timeoutId = setTimeout(triggerAnimation, randomDelay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isAnimating])

  // x and y positions of the circle
  const angleInRadians = (angle * Math.PI) / 180
  const x = radius * Math.cos(angleInRadians)
  const y = radius * Math.sin(angleInRadians)

  return (
    <motion.div
      style={{
        zIndex: 20,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        position: 'absolute',
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        style={{
          zIndex: 20,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: `${palette.primary.main}`,
          position: 'absolute',
        }}
        initial={{
          opacity: 0.1,
        }}
        // If isAnimating is true, the circle will scale up and down and fade in and out.
        animate={
          isAnimating
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.1, 1, 0.1],
              }
            : {}
        }
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
