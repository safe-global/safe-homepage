import { Box } from '@mui/material'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import css from './styles.module.css'

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
    <Box fontSize={FONT_SIZE} className={css.Counter}>
      <Digit place={1} value={integerPart} />
      <span className={css.CounterSpan}>.</span>
      <Digit place={0.1} value={decimalPart} />
      <Digit place={0.01} value={decimalPart} />
      <span className={css.CounterSpan}>%</span>
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
    <Box height={HEIGHT} className={css.Digit}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </Box>
  )
}

const Number = ({ mv, number }: NumberProps) => {
  let Y_POSITION = useTransform(mv, (latest: number) => {
    let placeValue = latest % 10
    let offset = (10 + number - placeValue) % 10
    let memo = offset * HEIGHT
    if (offset > 5) {
      memo -= 10 * HEIGHT
    }
    return memo
  })

  return (
    <motion.span style={{ y: Y_POSITION }} className={css.Number}>
      {number}
    </motion.span>
  )
}

export default Counter
