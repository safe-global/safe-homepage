import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PulsingLogoProps {
  angle: number
  radius: number
  imgUrl: string
}

// Pulsing animation with random delay
const pulsingAnimationTransition = {
  delay: Math.random() * 2,
  ease: 'easeInOut',
  duration: 1,
}

const imageScaleAnimationKeyframes = [1, 1.2, 1]

const CIRCLE_DIAMETER = 50

const PulsingLogo = ({ angle, radius, imgUrl }: PulsingLogoProps) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    function triggerAnimation() {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
    }
    const minDelay = 4000
    const maxDelay = 10000
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
    const timeoutId = setTimeout(triggerAnimation, randomDelay)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isAnimating])

  const angleInRadians = (angle * Math.PI) / 180
  const x = radius * Math.cos(angleInRadians)
  const y = radius * Math.sin(angleInRadians)

  const circleDiameterString = `${CIRCLE_DIAMETER}px`

  // Calculate the position of the circle
  const circleHorizontalPosition = `calc(50% + ${x}px - ${CIRCLE_DIAMETER / 2}px)`
  const circleVerticalPosition = `calc(250px + ${y}px - ${CIRCLE_DIAMETER / 2}px)`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} // initial state
      animate={{ opacity: 1, scale: 1 }} // Target animation state
      transition={pulsingAnimationTransition}
      // Position the ecosystme logos on the orbit path
      style={{
        zIndex: 20,
        width: circleDiameterString,
        height: circleDiameterString,
        borderRadius: '50%',
        position: 'absolute',
        left: circleHorizontalPosition,
        top: circleVerticalPosition,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Wrapper div around the ecosystem logos with pulsing animation */}
      <motion.div
        style={{
          zIndex: 20,
          width: circleDiameterString,
          height: circleDiameterString,
          borderRadius: '50%',
          backgroundColor: '#1E3B2B',
          position: 'absolute',
        }}
        // Logos seem to pop into view
        initial={{
          opacity: 0.5,
        }}
        animate={
          isAnimating
            ? {
                scale: imageScaleAnimationKeyframes,
                opacity: [0.5, 1, 0.5],
              }
            : {}
        }
        transition={pulsingAnimationTransition}
      />
      {/* Ecosystem logos */}
      <motion.img
        animate={
          isAnimating
            ? {
                scale: imageScaleAnimationKeyframes,
              }
            : {}
        }
        transition={pulsingAnimationTransition}
        src={`/images/Token/Hero/Logos/${imgUrl}`}
        width={35}
        style={{
          zIndex: 30,
        }}
      />
    </motion.div>
  )
}

export default PulsingLogo
