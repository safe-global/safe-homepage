import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import css from './styles.module.css'
import { calculateYPosition } from './utils'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

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

const DIGIT_HEIGHT_SM = 120
const DIGIT_HEIGHT_MD = 215

const Counter = ({ value }: CounterProps) => {
  const integerPart = Math.floor(value)
  const decimalPart = value % 1

  return (
    <div className={css.counter}>
      <Digit place={1} value={integerPart} />
      <span className={css.counterSpan}>.</span>
      <Digit place={0.1} value={decimalPart} />
      <Digit place={0.01} value={decimalPart} />
      <span className={css.counterSpan}>%</span>
    </div>
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
    <div className={css.digit}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  )
}

const Number = ({ mv, number }: NumberProps) => {
  const height = useIsMediumScreen() ? DIGIT_HEIGHT_SM : DIGIT_HEIGHT_MD
  let yPosition = useTransform(mv, (latest: number) => calculateYPosition(latest, number, height))

  return (
    <motion.span style={{ y: yPosition }} className={css.number}>
      {number}
    </motion.span>
  )
}

export default Counter
