import { Box } from '@mui/material'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import css from './styles.module.css'
import { calculateYPosition } from './utils'

type CounterProps = {
  value: number
}

type DigitProps = {
  place: number
  value: number
}

type NumberProps = {
  mv: any
  number: number
}

const FONT_SIZE = 200
const PADDING = 15
const HEIGHT = FONT_SIZE + PADDING

const Counter = ({ value }: CounterProps) => {
  const integerPart = Math.floor(value)
  const decimalPart = value % 1

  return (
    <Box fontSize={FONT_SIZE} className={css.counter}>
      <Digit place={1} value={integerPart} />
      <span className={css.counterSpan}>.</span>
      <Digit place={0.1} value={decimalPart} />
      <Digit place={0.01} value={decimalPart} />
      <span className={css.counterSpan}>%</span>
    </Box>
  )
}

const Digit = ({ place, value }: DigitProps) => {
  let valueRoundedToPlace = Math.floor(value / place) % 10
  let animatedValue = useSpring(valueRoundedToPlace, {
    damping: 5,
    stiffness: 15,
  })

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace)
  }, [animatedValue, valueRoundedToPlace])

  return (
    <Box height={HEIGHT} className={css.digit}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </Box>
  )
}

const Number = ({ mv, number }: NumberProps) => {
  let yPosition = useTransform(mv, (latest: number) => calculateYPosition(latest, number, HEIGHT))

  return (
    <motion.span style={{ y: yPosition }} className={css.number}>
      {number}
    </motion.span>
  )
}

export default Counter
