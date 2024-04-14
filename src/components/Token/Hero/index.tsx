import React, { useRef, useState, useEffect } from 'react'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import OrbitRingsList from '@/content/token-hero-rings.json'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { Button, Typography } from '@mui/material'
interface OrbitRingProps {
  diameter: number
  duration: number
  direction: 'normal' | 'reverse'
  children?: React.ReactNode
}
interface FloaterProps {
  radius: number
  angle: number
  size: number
  direction: 'normal' | 'reverse'
  duration: number
  speed: number
}

interface LogoProps {
  angle: number
  radius: number
  imgUrl: string
}

export default function Hero() {
  return (
    <div className={css.heroSpacer}>
      {/* Token Backgroud Gradients */}
      <div className={css.tokenCircle1}></div>
      <div className={css.tokenCircle2}></div>
      <div className={css.tokenCircle3}></div>

      <div className={css.tokenContainer}>
        {/*SAFE Token Logo */}
        <motion.div
          animate={{ y: ['0%', '-5%', '0%'], rotateY: [0, -35, 0] }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className={css.tokenImage}
        >
          <img width={180} src="/images/Token/token.png" alt="Safe Token" />
        </motion.div>

        {/* Token Hero Content */}
        <div
          className={css.container}
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            top: '220px',
          }}
        >
          <Typography className={css.label} variant="h4">
            SAFE Token
          </Typography>
          <Typography variant="h2" className={css.title}>
            Participate in the
            <span> Ownership Revolution</span>
          </Typography>
          <Button className={css.button} variant="contained" size="large">
            Go to acitivity app
          </Button>
          <Typography variant="caption" className={css.scroll}>
            Scroll
          </Typography>
        </div>
      </div>

      {OrbitRingsList.map((orbitRing, orbitIndex) => (
        <div key={orbitRing.id} className={css[orbitRing.id]}>
          {/* Display All Logos */}
          {orbitRing.logos.map((logo, logoIndex) => (
            <Logo key={logoIndex} angle={logo.angle} radius={orbitRing.diameter / 2} imgUrl={logo.imgUrl} />
          ))}

          {/* Display All Floaters */}
          {orbitRing.floaters.map((floater, floaterIndex) => (
            <Floater
              key={floaterIndex}
              radius={orbitRing.diameter / 2}
              angle={floater.angle}
              size={floater.size}
              direction={orbitRing.direction as 'normal' | 'reverse'}
              duration={orbitRing.duration}
              speed={360 / orbitRing.duration + floater.speed / 70}
            />
          ))}

          {/* Display Orbit Path */}
          <OrbitPath
            duration={orbitRing.duration}
            diameter={orbitRing.diameter}
            direction={orbitRing.direction as 'normal' | 'reverse'}
          >
            <img src={orbitRing.src} alt={`Orbit Ring ${orbitIndex + 1}`} />
          </OrbitPath>
        </div>
      ))}
    </div>
  )
}

const OrbitPath: React.FC<OrbitRingProps> = ({ diameter, duration, direction, children }) => {
  const rotateValue = direction === 'normal' ? 360 : [0, -360]

  return (
    <motion.div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        position: 'absolute',
        overflow: 'hidden',
        top: '250px',
        left: '50%',
        borderRadius: '100%',
      }}
      initial={{
        rotate: 0,
        translateX: '-50%',
        translateY: '-50%',
        transformOrigin: 'center',
      }}
      animate={{ rotate: rotateValue, translateX: '-50%', translateY: '-50%', transformOrigin: 'center' }}
      transition={{
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      {children}
    </motion.div>
  )
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

const Logo: React.FC<LogoProps> = ({ angle, radius, imgUrl }) => {
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
