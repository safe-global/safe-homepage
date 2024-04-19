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
