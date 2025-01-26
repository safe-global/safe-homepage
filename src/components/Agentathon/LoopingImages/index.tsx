import React, { useEffect, useRef } from 'react'
import { motion, useAnimate } from 'framer-motion'
import css from './style.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { Typography } from '@mui/material'

const LoopingImages = ({ items }: Partial<BaseBlock>) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [scope, animate] = useAnimate()
  const [scopeLeft, animateLeft] = useAnimate()
  const [scopeRight, animateRight] = useAnimate()
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameIdRef = useRef<number>()
  const isMobile = useIsMediumScreen()
  const IMAGE_WIDTH = isMobile ? 50 : 100
  const IMAGE_GAP = isMobile ? 60 : 100
  const MAX_WIDTH = isMobile ? 710 : 1300
  const VISIBLE_COUNT = isMobile ? 7 : 7

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    if (!items?.length) return

    const totalItems = items.length

    const animateItems = async () => {
      if (!scopeLeft.current || !scopeRight.current || !scope.current) {
        return
      }

      await Promise.all([
        animate(scope.current, { x: -IMAGE_WIDTH - IMAGE_GAP }, { duration: 0.4, ease: 'easeInOut' }),
        animateLeft(
          scopeLeft.current,
          { rotate: 0, scale: 1, opacity: 1 },
          { duration: 0.4, delay: 0.15, ease: 'easeOut' },
        ),
        animateRight(
          scopeRight.current,
          { rotate: 0, scale: 1, opacity: 1 },
          { duration: 0.4, delay: 0.15, ease: 'easeOut' },
        ),
      ])

      setCurrentIndex((prev) => (prev + 1) % totalItems)

      if (scope.current) {
        await animate(scope.current, { x: 0 }, { duration: 0 })
      }

      await sleep(2000)

      if (scopeLeft.current && scopeRight.current) {
        await Promise.all([
          animateLeft(scopeLeft.current, { scale: 0, opacity: 0 }, { duration: 0.2, ease: 'easeIn' }),
          animateRight(scopeRight.current, { scale: 0, opacity: 0 }, { duration: 0.2, ease: 'easeIn' }),
        ])

        animateLeft(scopeLeft.current, { rotate: -45 }, { duration: 0 })
        animateRight(scopeRight.current, { rotate: 45 }, { duration: 0 })
      }

      await sleep(700)
      animationFrameIdRef.current = requestAnimationFrame(animateItems)
    }

    setTimeout(() => {
      animationFrameIdRef.current = requestAnimationFrame(animateItems)
    }, 2000)

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [IMAGE_GAP, IMAGE_WIDTH, animate, animateLeft, animateRight, items, scope, scopeLeft, scopeRight])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MAX_WIDTH && containerRef.current) {
        const targetIndex = 3

        const targetPosition = targetIndex * (IMAGE_WIDTH + IMAGE_GAP)
        const centerOfScreen = window.innerWidth / 2
        const transformValue = targetPosition - centerOfScreen + IMAGE_WIDTH / 2

        containerRef.current.style.transform = `translateX(-${transformValue}px)`
      } else if (containerRef.current) {
        containerRef.current.style.transform = ''
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [IMAGE_GAP, IMAGE_WIDTH, MAX_WIDTH])

  if (!items?.length) return null

  const displayIndices = Array.from({ length: VISIBLE_COUNT + 1 }, (_, i) => (currentIndex + i) % items.length)

  return (
    <div
      ref={containerRef}
      style={{
        width: MAX_WIDTH,
      }}
      className={css.container}
    >
      <div className={css.titleContainer}>
        <Typography variant="caption" className={css.caption}>
          {items[displayIndices[3]]?.title}
        </Typography>
      </div>

      <motion.img
        src="/images/Agentathon/possibilities/bracket-left.png"
        initial={{ rotate: -45, scale: 0, opacity: 0 }}
        ref={scopeLeft}
        className={css.bracketLeft}
      />
      <motion.img
        src="/images/Agentathon/possibilities/bracket-right.png"
        initial={{ rotate: 45, scale: 0, opacity: 0 }}
        ref={scopeRight}
        className={css.bracketRight}
      />

      <img src="/images/Agentathon/possibilities/glow.png" alt="glow" className={css.glowImage} />

      <motion.div ref={scope} className={css.imagesContainer} style={{ gap: IMAGE_GAP }}>
        {displayIndices.map((itemIndex, i) => (
          <motion.img
            key={`img-${itemIndex}`}
            src={items[itemIndex]?.image?.src}
            alt={`img-${itemIndex}`}
            className={css.image}
            style={{
              width: IMAGE_WIDTH,
              opacity: i === 3 ? 1 : 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default LoopingImages
