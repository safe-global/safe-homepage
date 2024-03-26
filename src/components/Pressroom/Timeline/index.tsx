import { Box, Button, Grid, Step, StepIcon, StepLabel, Stepper, Typography } from '@mui/material'
import MobileStepper from '@mui/material/MobileStepper'
import { useState } from 'react'
import LessThanIcon from '@/public/images/less-than.svg'
import GreatThanIcon from '@/public/images/great-than.svg'
import FullCircleIcon from '@/public/images/circle-full.svg'
import EmptyCircleIcon from '@/public/images/circle-empty.svg'
import css from './styles.module.css'

const steps = [
  {
    label: 'March 2024',
    description: 'Safe hits $100B in TVL',
  },
  {
    label: 'February 2024',
    description: 'Safe Smart Accounts have executed over 30M transactions.',
  },
  {
    label: 'March 2023',
    description:
      'Safe introduces the Safe{Core} modular account abstraction dev stack, alongside a refreshed Safe{Wallet}.',
  },
  {
    label: 'September 2022',
    description: 'SafeDAO is established and the Safe Token launched.',
  },
  {
    label: 'July 2022',
    description:
      'Safe Ecosystem Foundation announces $100M in backing from strategic partners crosses $40 in assets secured.',
  },
  {
    label: 'May 2022',
    description:
      'Independence! Safe Ecosystem Foundation is established as the operations organisation, and Core Contributors GmbH as the development company of Safe.',
  },
  {
    label: 'February 2022',
    description:
      'GnosisDAO proposal to spin out the Safe project (GIP29) is accepted, with the highest voter turnout to label.',
  },
  {
    label: 'May 2021',
    description: 'Vitalik Buterin, founder of Ethereum, moves 1.3B in assets to his personal Safe.',
  },
  {
    label: 'August 2020',
    description: 'Safe hits TVL of more than 1B USD in ETH and ERC20 assets.',
  },
  {
    label: 'July 2018',
    description:
      'Answering to market demand, Gnosis builds and releases a new smart account protocol called “Safe”, with gas-efficiency, modularity, and security at its core.',
  },
  {
    label: 'September 2017',
    description: 'Gnosis open-sources its internal multi-signature wallet called “Gnosis Multi-Sig Wallet”.',
  },
]

const STEPS_PER_DOT = 3

const Card = ({ label, description }: { label: string; description: string }) => (
  <div className={css.card}>
    <Typography variant="h4" mb="16px" color="text.primary">
      {label}
    </Typography>
    <Typography>{description}</Typography>
  </div>
)

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box mt="140px">
      <Typography variant="h2" textAlign="center" mb="80px">
        Key milestones
      </Typography>

      <Grid container ml="-150px">
        <Stepper activeStep={activeStep} alternativeLabel style={{ marginTop: '100px' }} className={css.myStepper}>
          {steps.map(({ label, description }, idx) => (
            <Grid item xs={4} key={`${label}-${idx}`} className={css.gridItem}>
              <Step active={idx < activeStep * STEPS_PER_DOT}>
                <StepLabel
                  color="red"
                  StepIconComponent={() => (
                    <StepIcon icon={idx < activeStep * STEPS_PER_DOT ? <FullCircleIcon /> : <EmptyCircleIcon />} />
                  )}
                />
                <Card label={label} description={description} />
              </Step>
            </Grid>
          ))}
        </Stepper>
      </Grid>
      <MobileStepper
        className={css.mobileStepper}
        variant="dots"
        steps={steps.length}
        position="static"
        activeStep={activeStep - 1}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            <GreatThanIcon />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <LessThanIcon />
          </Button>
        }
      />
    </Box>
  )
}

export default Timeline
