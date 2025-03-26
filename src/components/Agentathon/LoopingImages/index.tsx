import React, { useEffect, useRef } from 'react'
import { motion, useAnimate, useInView } from 'framer-motion'
import css from './style.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { Typography } from '@mui/material'

const LoopingImages = ({ items }: Partial<BaseBlock>) => {
  const [currentItems, setCurrentItems] = React.useState(items ?? [])

  const [scope] = useAnimate()
  const [scopeLeftBracket, animateLeftBracket] = useAnimate()
  const [scopeRightBracket, animateRightBracket] = useAnimate()

  const inView = useInView(scope)
  const isMobile = useIsMediumScreen()

  const containerRef = useRef<HTMLDivElement>(null)

  const IMAGE_WIDTH = isMobile ? 50 : 100
  const IMAGE_GAP = isMobile ? 60 : 100
  const MAX_WIDTH = isMobile ? 710 : 1300

  const animationTimeoutRef = useRef<NodeJS.Timeout>()
  const sleepTimeoutRef = useRef<NodeJS.Timeout>()

  const sleep = (ms: number) => {
    return new Promise<void>((resolve) => {
      sleepTimeoutRef.current = setTimeout(resolve, ms)
    })
  }

  useEffect(() => {
    const animateItems = async () => {
      if (!scopeLeftBracket.current || !scopeRightBracket.current || !inView) {
        return
      }

      let shiftedItem: Partial<BaseBlock> | undefined

      setCurrentItems((prev) => {
        const newItems = [...prev]
        shiftedItem = newItems.shift()
        return newItems
      })

      if (scopeLeftBracket.current) {
        animateLeftBracket(
          scopeLeftBracket.current,
          { rotate: 0, scale: 1, opacity: 1 },
          { duration: 0.3, delay: 0.15, ease: 'easeOut' },
        )
      }

      if (scopeRightBracket.current) {
        animateRightBracket(
          scopeRightBracket.current,
          { rotate: 0, scale: 1, opacity: 1 },
          { duration: 0.3, delay: 0.15, ease: 'easeOut' },
        )
      }

      await sleep(200)

      setCurrentItems((prev) => {
        if (!shiftedItem) return prev
        const newItems = [...prev]
        newItems.push(shiftedItem)
        return newItems
      })

      await sleep(1000)

      if (scopeLeftBracket.current && scopeRightBracket.current) {
        await Promise.all([
          animateLeftBracket(
            scopeLeftBracket.current,
            { scale: 0, opacity: 0 },
            { duration: 0.2, delay: 0.7, ease: 'easeIn' },
          ),
          animateRightBracket(
            scopeRightBracket.current,
            { scale: 0, opacity: 0 },
            { duration: 0.2, delay: 0.7, ease: 'easeIn' },
          ),
        ])
      }
      if (scopeLeftBracket.current && scopeRightBracket.current) {
        animateLeftBracket(scopeLeftBracket.current, { rotate: -45 }, { duration: 0 })
        animateRightBracket(scopeRightBracket.current, { rotate: 45 }, { duration: 0 })
      }

      await sleep(500)
      animateItems()
    }

    animationTimeoutRef.current = setTimeout(animateItems, 500)

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
      if (sleepTimeoutRef.current) {
        clearTimeout(sleepTimeoutRef.current)
      }
    }
  }, [animateLeftBracket, animateRightBracket, inView, scopeLeftBracket, scopeRightBracket])

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
          {currentItems[3].title}
        </Typography>
      </div>

      <motion.img
        src="/images/Agentathon/possibilities/bracket-left.png"
        initial={{ rotate: -45, scale: 0, opacity: 0 }}
        ref={scopeLeftBracket}
        className={css.bracketLeft}
      />
      <motion.img
        src="/images/Agentathon/possibilities/bracket-right.png"
        initial={{ rotate: 45, scale: 0, opacity: 0 }}
        ref={scopeRightBracket}
        className={css.bracketRight}
      />

      <img src="/images/Agentathon/possibilities/glow.png" alt="glow" className={css.glowImage} />

      <motion.div ref={scope} className={css.imagesContainer} style={{ gap: IMAGE_GAP }}>
        {currentItems.map((item, i) => (
          <motion.img
            key={item.image?.src}
            layout
            src={item.image?.src}
            alt={item.title}
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
