import React, { useEffect, useRef, useState } from 'react'
import Counter from './Counter'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import AnimatedWords from '../common/AnimatedWords'

const title: JSX.Element = (
  <AnimatedWords delay={0.5}>
    <b>transactions</b>
    <br />
    <b>on&nbsp;chain</b>&nbsp;originate
    <br />
    from&nbsp;a<b>&nbsp;Safe</b>
  </AnimatedWords>
)

const TransactionsOnChain = () => (
  <Box
    height="100vh"
    display="flex"
    flexDirection="row"
    position="relative"
    alignItems="center"
    justifyContent="space-around"
  >
    <CounterContainer />
    <Box>
      <Typography variant="h1">{title}</Typography>
    </Box>
  </Box>
)

function CounterContainer() {
  const [value, setValue] = useState(0)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 1])
  const yTransform = useTransform(scrollYProgress, [0, 0.5], [300, 0])

  // Add useEffect to watch scrollYProgress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.11) {
        setValue(1.75)
      }
      if (latest <= 0.1) {
        setValue(0)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <motion.div
      style={{
        opacity: opacity,
        y: yTransform,
        color: '#12FF80',
        fontSize: '1.875rem',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={targetRef}
      onClick={() => setValue(1.75)}
    >
      <Box height="100px" overflow="hidden">
        <Counter value={value} />
      </Box>
      <Box height="150px" overflow="hidden">
        <Counter value={value} />
      </Box>
      <div>
        <Counter value={value} />
      </div>
    </motion.div>
  )
}

export default TransactionsOnChain
