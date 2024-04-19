import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import css from './styles.module.css'

interface CircleProps {
  angle: number
  radius: number
  size: number
}

export default function PulsingCircles() {
  // Define the number of circles to render
  const numberOfCircles = 120
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
        {/* Generate an array of circles with random properties */}
        {Array.from({ length: numberOfCircles }, (_, i) => {
          // Determine the radius for each circle with a conditional random range
          // If a random number between 0 and 1 is less than 0.5, assign a radius between 0 and 220
          // Otherwise, assign a radius between 220 and 250
          // This generates around 50% of total circles near the edge
          const radius = Math.random() < 0.5 ? Math.random() * 220 : Math.random() * 30 + 220
          // Random angle between 0 and 360 for circle placement
          const angle = Math.random() * 360
          // Random size for each circle between 2 and 12
          const size = Math.random() * 10 + 2
          // Render the Circle component with the generated properties
          return <Circle key={i} angle={angle} radius={radius} size={size} />
        })}
      </div>
    </motion.div>
  )
}

// The Circle component represents an individual circle in the PulsingCircles component
const Circle = ({ angle, radius, size }: CircleProps) => {
  // The diameter of the circle is determined by the size property
  const circleDiameter = size
  // State to control the animation of the circle
  const [isAnimating, setIsAnimating] = useState(false)

  // Effect to trigger the pulsing animation at random intervals
  useEffect(() => {
    // Function to start the pulsing animation
    function triggerAnimation() {
      setIsAnimating(true)
      // Reset the animation state after a delay
      setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
    }
    // Define the minimum and maximum delay for the animation trigger
    const minDelay = 4000
    const maxDelay = 10000
    // Calculate a random delay within the defined range
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
    // Set a timeout to trigger the animation after the random delay
    const timeoutId = setTimeout(triggerAnimation, randomDelay)
    // Cleanup function to clear the timeout when the component unmounts or the delay changes
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isAnimating])

  // Convert the angle from degrees to radians for positioning calculations
  const angleInRadians = (angle * Math.PI) / 180
  // Calculate the x and y positions of the circle based on the angle and radius
  const x = radius * Math.cos(angleInRadians)
  const y = radius * Math.sin(angleInRadians)

  // Render the circle with a pulsing animation when isAnimating is true
  return (
    <motion.div
      style={{
        zIndex: 20,
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        borderRadius: '50%',
        position: 'absolute',
        // Position the circle by calculating its left and top properties.
        // The circle is initially positioned at the center (50% of the container's width and height),
        // then moved by its x and y coordinates, and finally adjusted by half of its diameter to center it.
        left: `calc(50% + ${x}px - ${circleDiameter / 2}px)`,
        top: `calc(50% + ${y}px - ${circleDiameter / 2}px)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        style={{
          zIndex: 20,
          width: `${circleDiameter}px`,
          height: `${circleDiameter}px`,
          borderRadius: '50%',
          backgroundColor: '#12FF80',
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
