import { motion, type MotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

function Counter({ value }: { value: number }) {
  return (
    <div
      style={{
        display: 'flex',
        overflow: 'hidden',
        lineHeight: 1,
        color: 'white',
      }}
    >
      <Digit place={1} value={value} />
      <div style={{ position: 'relative', width: '0.5ch', fontVariantNumeric: 'tabular-nums', height: '1.25ch' }}>
        <div
          style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          .
        </div>
      </div>
      <Digit place={0.1} value={value} />
      <Digit place={0.01} value={value} />
      <div style={{ position: 'relative', width: '1.3ch', fontVariantNumeric: 'tabular-nums', height: '1.25ch' }}>
        <div
          style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          %
        </div>
      </div>
    </div>
  )
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place) % 10
  let animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 50,
    damping: 15,
  })

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace)
  }, [animatedValue, valueRoundedToPlace])

  return (
    <div style={{ position: 'relative', width: '0.8ch', fontVariantNumeric: 'tabular-nums', height: '1.25ch' }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  )
}

function Number({ mv, number }: { mv: MotionValue<number>; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10
    let offset = (10 + number - placeValue) % 10

    let memo = offset * 1.5 // Use 1.5em instead of fixed height

    if (offset > 5) {
      memo -= 10 * 1.5
    }

    return `${memo}em`
  })

  return (
    <motion.span
      style={{ y, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {number}
    </motion.span>
  )
}

export default Counter
