import css from './Ticker.module.css'
import { useEffect, useState, type CSSProperties } from 'react'
import { isNumber } from 'lodash'

type Ticker = {
  run: boolean
  toValue: string | number
  rollDurationSecs?: number
  delayTimeMs?: number
  staggerMs?: number
  className?: string
}

type Digit = {
  value: number
  index: number
  rollDurationSecs: number
  delay: number
}

const Digit = ({ value, index, rollDurationSecs, delay }: Digit) => {
  return (
    <span
      className={css.digit}
      data-value={value}
      style={{ '--i': index, '--roll-duration': `${rollDurationSecs}s`, '--roll-delay': `${delay}ms` } as CSSProperties}
    >
      <span className={css.scale} aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <span key={i} style={{ '--dist': Math.abs(i - value) / 9 } as CSSProperties}>
            {i}
          </span>
        ))}
        <span>-</span>
      </span>
      <span className={css.value}>{value}</span>
    </span>
  )
}

const TickerElement = ({
  run = false,
  toValue,
  rollDurationSecs = 1,
  delayTimeMs = 0,
  staggerMs = 80,
  className,
}: Ticker) => {
  const [chars, setChars] = useState<(string | number)[]>([])

  useEffect(() => {
    const toChars = toValue
      .toString()
      .split('')
      .map((c) => (isNaN(Number(c)) ? c : Number(c)))

    let timeoutId: NodeJS.Timeout
    if (run) {
      timeoutId = setTimeout(() => {
        setChars(toChars)
      }, delayTimeMs)
    } else {
      const fromChars = toChars.map((c) => (isNumber(c) ? (c === 0 ? Math.floor(Math.random() * 10) : 0) : c))
      setChars(fromChars)
    }

    return () => clearTimeout(timeoutId)
  }, [run, toValue, delayTimeMs])

  return (
    <span
      className={`${className} ${css.wrapper} ${run ? css.run : ''}`}
      style={{ '--len': chars.length } as CSSProperties}
    >
      {chars.map((c, i) => {
        if (isNumber(c)) {
          return (
            <Digit
              value={c}
              index={i / chars.length}
              key={i}
              rollDurationSecs={rollDurationSecs}
              delay={staggerMs * i}
            />
          )
        } else {
          return (
            <span className={css.char} key={`${i}-${c}`} style={{ '--i': i / chars.length } as CSSProperties}>
              {c}
            </span>
          )
        }
      })}
    </span>
  )
}

export default TickerElement
