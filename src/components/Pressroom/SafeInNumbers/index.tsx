import { Box, Typography } from '@mui/material'
import css from './styles.module.css'

const numbers = [
  { label: 'Partners', value: '200+' },
  { label: 'Total Transactions', value: '4M+' },
  { label: 'Safe Accounts Deployed', value: '1.5M+' },
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
  <Box mt="120px" overflow={{ xs: 'hidden', md: 'visible' }}>
    <div className={css.animation}>
      <div className={css.slider}>
        <StatsRow />
        <StatsRow />
      </div>
    </div>
  </Box>
)

export default SafeInNumbers
