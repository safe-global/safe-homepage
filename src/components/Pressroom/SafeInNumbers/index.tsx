import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'

const numbers = [
  { label: 'Partners', value: '200+' },
  { label: 'Total Transactions', value: '40M+' },
  { label: 'Safe Accounts Deployed', value: '7M+' },
  { label: 'Owners', value: '3M+' },
]

const numbersRow = numbers.concat(numbers)

const StatsRow = () => (
  <div className={css.metricWrapper}>
    {numbersRow.map(({ label, value }, i) => (
      <div key={`${label}_${i}`}>
        <p className={css.value}>{value}</p>
        <Typography variant="caption">{label}</Typography>
      </div>
    ))}
  </div>
)

const SafeInNumbers = () => (
  <Box mt="120px" overflow="hidden" position="relative">
    <div className={css.gradientBase} />
    <div className={css.animation}>
      <div className={css.slider}>
        <StatsRow />
        <StatsRow />
      </div>
    </div>
    <div className={clsx(css.gradientBase, css.gradientFlipped)} />
  </Box>
)

export default SafeInNumbers
