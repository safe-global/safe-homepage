import { Step, StepConnector, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import CircleIcon from '@/public/images/Wallet/circle.svg'
import css from './styles.module.css'

export type StepsType = {
  label: string
  description?: string
  state: 'active' | 'completed' | 'disabled'
}[]

const CustomStepper = ({ steps }: { steps: StepsType }) => (
  <Stepper activeStep={1} orientation="vertical" className={css.stepper}>
    {steps.map((step) => {
      console.log(step.state === 'active')
      return (
        <Step key={step.label} active={step.state === 'active'}>
          <StepLabel
            sx={{ paddingTop: 0, paddingBottom: 0 }}
            icon={
              <CircleIcon className={`${css.icon} ${['active', 'completed'].includes(step.state) ? css.active : ''}`} />
            }
          >
            <Typography variant="h4" color="white">
              {step.label}
            </Typography>
          </StepLabel>
          <StepContent className={`${css.stepContent}  ${step.state === 'active' ? css.activeBorder : ''}`}>
            <Typography variant="body1" color="#A1A3A7" className={css.description}>
              {step.description}
            </Typography>
          </StepContent>
        </Step>
      )
    })}
  </Stepper>
)

export default CustomStepper
