import { Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import CircleIcon from '@/public/images/Wallet/circle.svg'
import css from './styles.module.css'

export type StepsType = {
  label: string
  description?: string
  state?: 'active' | 'completed'
}[]

const CustomStepper = ({ steps }: { steps: StepsType }) => (
  <Stepper
    activeStep={steps.findIndex((step) => step.state === 'active') || 0}
    orientation="vertical"
    className={css.stepper}
  >
    {steps.map((step) => (
      <Step key={step.label}>
        <StepLabel
          sx={{ paddingTop: 0, paddingBottom: 0 }}
          icon={<CircleIcon className={`${css.icon} ${step.state ? css.iconActive : ''}`} />}
        >
          <Typography variant="h4" color="white">
            {step.label}
          </Typography>
        </StepLabel>
        <StepContent className={`${css.stepContent} ${step.state === 'active' ? css.activeBorder : ''}`}>
          <Typography variant="body1" color="primary.light" marginTop="18px">
            {step.description}
          </Typography>
        </StepContent>
      </Step>
    ))}
  </Stepper>
)

export default CustomStepper
