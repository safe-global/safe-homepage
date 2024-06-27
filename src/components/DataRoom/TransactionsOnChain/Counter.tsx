import { Box } from '@mui/material'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const fontSize = 200
const padding = 15
const height = fontSize + padding

interface CounterProps {
  value: number
}

export default function Counter({ value }: CounterProps) {
  const integerPart = Math.floor(value)
  const decimalPart = value % 1

  return (
    <Box display="flex" overflow="hidden" fontSize={fontSize}>
      <Digit place={1} value={integerPart} />
      <span style={{ marginTop: '96px' }}>.</span>
      <Digit place={0.1} value={decimalPart} />
      <Digit place={0.01} value={decimalPart} />
      <span style={{ marginTop: '96px' }}>%</span>
    </Box>
  )
}

interface DigitProps {
  place: number
  value: number
}

function Digit({ place, value }: DigitProps) {
  let valueRoundedToPlace = Math.floor(value / place) % 10
  let animatedValue = useSpring(valueRoundedToPlace, {
    damping: 20, // Lower damping for slower animation
    stiffness: 50, // Lower stiffness for slower animation
  })

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace)
  }, [animatedValue, valueRoundedToPlace])

  return (
    <Box position="relative" width="1ch" height={height} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </Box>
  )
}

interface NumberProps {
  mv: any
  number: number
}

function Number({ mv, number }: NumberProps) {
  let yPosition = useTransform(mv, (latest: number) => {
    let placeValue = latest % 10
    let offset = (10 + number - placeValue) % 10

    let memo = offset * height

    if (offset > 5) {
      memo -= 10 * height
    }

    return memo
  })

  return (
    <motion.span
      style={{
        y: yPosition,
        position: 'absolute',
        inset: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {number}
    </motion.span>
  )
}
