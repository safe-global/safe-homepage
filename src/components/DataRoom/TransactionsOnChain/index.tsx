import { Box, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import Counter from './Counter'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import css from './styles.module.css'

const TransactionsOnChain = ({ title, text }: BaseBlock) => {
  const TRANSACTIONS_AMOUNT = 1.75
  return (
    <Box className={css.sectionContainer}>
      <Box className={css.stickyContainer}>
        <CounterContainer percentage={TRANSACTIONS_AMOUNT} />
        <Typography variant="h1">{text}</Typography>
      </Box>
    </Box>
  )
}

const CounterContainer = ({ percentage }: { percentage: number }) => {
  const [value, setValue] = useState(0)
  const targetScrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetScrollRef,
    offset: ['start end', 'end start'],
  })

  const OPACITY = useTransform(scrollYProgress, [0, 0.5], [0.1, 1])
  const Y_TRANSFORM = useTransform(scrollYProgress, [0, 0.5], [600, 0])

  //useEffect To Update Counter Value Based On Scroll Position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.11) {
        setValue(percentage)
      }
      if (latest <= 0.1) {
        setValue(0)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, percentage])

  return (
    <motion.div
      style={{
        opacity: OPACITY,
        y: Y_TRANSFORM,
      }}
      className={css.counterContainer}
      ref={targetScrollRef}
    >
      <Box className={css.Box1}>
        <Counter value={value} />
      </Box>
      <Box className={css.Box2}>
        <Counter value={value} />
      </Box>
      <div>
        <Counter value={value} />
      </div>
    </motion.div>
  )
}

export default TransactionsOnChain
