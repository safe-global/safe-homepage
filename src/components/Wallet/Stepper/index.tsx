import { Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import CircleIcon from '@/public/images/Wallet/circle.svg'
import css from './styles.module.css'
import clsx from 'clsx'

enum StepState {
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export type StepsType = {
  label: string
  description?: string
  state?: 'active' | 'completed'
}[]

const CustomStepper = ({ steps }: { steps: StepsType }) => (
  <Stepper
    activeStep={steps.findIndex(({ state }) => state === StepState.ACTIVE) || 0}
    orientation="vertical"
    className={css.stepper}
  >
    {steps.map(({ label, description, state }) => (
      <Step key={label}>
        <StepLabel sx={{ py: 0 }} icon={<CircleIcon className={clsx(css.icon, state && css.iconActive)} />}>
          <Typography variant="h4" color="white">
            {label}
          </Typography>
        </StepLabel>
        <StepContent className={clsx(css.stepContent, state === StepState.ACTIVE && css.activeBorder)}>
          <Typography variant="body1" color="primary.light" marginTop="18px">
            {description}
          </Typography>
        </StepContent>
      </Step>
    ))}
  </Stepper>
)

export default CustomStepper
