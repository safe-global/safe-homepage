import { Box, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import MatterCanvas from './MatterCanvas'
import { useEffect, useRef, useState } from 'react'
import LinksWrapper from '../LinksWrapper'
import css from './styles.module.css'

const USDCStorage = ({ title, text, link }: BaseBlock) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [spawnCoins, setCoins] = useState(false)

  // Define Animation Variants For Content
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom },
    }),
  }

  // Initialize Tracking scrollYProgress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  // Map Container Scroll To Sticky Section Scroll
  const MAP_Y_PROGRESS = useTransform(scrollYProgress, [0.25, 0.75], [0, 1])

  // Transform Properties
  const X_TRANSFORM_CONTENT = useTransform(MAP_Y_PROGRESS, [0.8, 1], ['0%', '-100%'])
  const X_TRANSFORM_CANVAS = useTransform(MAP_Y_PROGRESS, [0.8, 1], ['0%', '100%'])

  const COINS_IMG_URL = '/images/Dataroom/USDC.png'

  //Control USDC Coins Spawn With Scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.05) {
        setCoins(true)
      } else if (latest < 0.05) {
        setCoins(false)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <Box ref={targetRef} className={css.sectionContainer}>
      <Box className={css.stickyContainer}>
        <motion.div
          style={{
            translateX: X_TRANSFORM_CONTENT,
          }}
          className={css.content}
        >
          <motion.div
            variants={variants}
            initial="initial"
            custom={0.5}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography variant="h1">{title}</Typography>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            custom={1.5}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography variant="h1">{text}</Typography>
          </motion.div>
          {link && <LinksWrapper {...link} />}
        </motion.div>
        <motion.div
          className={css.canvas}
          style={{
            translateX: X_TRANSFORM_CANVAS,
          }}
        >
          <MatterCanvas spawnCoins={spawnCoins} imgUrl={COINS_IMG_URL} />
        </motion.div>
      </Box>
    </Box>
  )
}

export default USDCStorage
