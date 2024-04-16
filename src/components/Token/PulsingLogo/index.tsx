import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PulsingLogoProps {
  angle: number
  radius: number
  imgUrl: string
}

const PulsingLogo = ({ angle, radius, imgUrl }: PulsingLogoProps) => {
  const circleDiameter = 55
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: Math.random() * 2,
        ease: 'easeInOut',
        duration: 1,
      }}
      style={{
        zIndex: 20,
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        borderRadius: '50%',
        position: 'absolute',
        left: `calc(50% + ${x}px - ${circleDiameter / 2}px)`,
        top: `calc(250px + ${y}px - ${circleDiameter / 2}px)`,
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
          backgroundColor: '#1E3B2B',
          position: 'absolute',
        }}
        initial={{
          opacity: 0.5,
        }}
        animate={
          isAnimating
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }
            : {}
        }
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        animate={
          isAnimating
            ? {
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
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
