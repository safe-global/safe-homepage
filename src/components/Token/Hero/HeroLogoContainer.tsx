import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeroLogoContainerProps {
  angle: number
  radius: number
  imgUrl: string
}

export default function HeroLogoContainer({ angle, radius, imgUrl }: HeroLogoContainerProps) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const circleDiameter = 55
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize() // Set initial size
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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

  const leftPosition = screenSize.width / 2 + x - circleDiameter / 2
  const topPosition = screenSize.height * 0.35 + y - circleDiameter / 2

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        zIndex: 20,
        width: `${circleDiameter}px`,
        height: `${circleDiameter}px`,
        borderRadius: '50%',
        position: 'absolute',
        left: `${leftPosition}px`,
        top: `${topPosition}px`,
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
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        src={imgUrl}
        width={35}
        style={{
          zIndex: 30,
        }}
      />
    </motion.div>
  )
}
