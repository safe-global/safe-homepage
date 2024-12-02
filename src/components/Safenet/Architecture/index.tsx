import { useState } from 'react'
import { Button, Container, Grid, MobileStepper, Step, Stepper, Typography } from '@mui/material'
import GradientChip from '@/components/Safenet/GradientChip'
import LinkButton from '@/components/common/LinkButton'
import BackButton from '@/public/images/Safenet/Architecture/back-button.svg'
import NextButton from '@/public/images/Safenet/Architecture/next-button.svg'
import css from './styles.module.css'
import { SAFENET_DOCS_LINK } from '@/config/constants'

const userSteps: Array<{ step: number; text: string; icon?: { src: string; alt: string } }> = [
  {
    step: 1,
    text: 'Checks policies and issues resource-lock',
  },
  {
    step: 2,
    text: 'Gets liquidity',
    icon: {
      src: '/images/Safenet/Architecture/arrow-back-gradient.svg',
      alt: 'Arrow back gradient',
    },
  },
  {
    step: 3,
    text: 'Executes transaction intent',
    icon: {
      src: '/images/Safenet/Architecture/check-gradient.svg',
      alt: 'Checkmark gradient',
    },
  },
  {
    step: 4,
    text: 'Settles on user Account with execution proof',
  },
  {
    step: 5,
    text: 'Returns liquidity',
    icon: {
      src: '/images/Safenet/Architecture/arrow-next-gradient.svg',
      alt: 'Arrow next gradient',
    },
  },
]

const ProcessorFeatures = () => (
  <>
    <img src="/images/Safenet/Architecture/processor.png" alt="Safe processor" className={css.blockImage} />
    <Typography className={css.blockTitle}>Processors</Typography>
    <ul>
      <li>Connect to user Accounts and orchestrate optimal execution of transaction intents.</li>
      <li>Provide execution guarantees like security checks and custom policies.</li>
      <li>
        Execute transactions instantly by locking user assets (resource-lock) and providing liquidity optimistically.
      </li>
    </ul>
  </>
)

const MidItemHeader = () => (
  <div className={css.midItemHeader}>
    <Typography className={css.midItemTitle}>USER</Typography>
    <Typography className={css.midItemText}>Initiates transaction intent</Typography>
  </div>
)

const NetworkFeatures = () => (
  <>
    <img src="/images/Safenet/Architecture/mesh.png" alt="Safe net" className={css.blockImage} />

    <Typography className={css.blockTitle}>Liquid Network</Typography>

    <ul>
      <li>Provides Safenet Processors with liquidity to execute transaction intents</li>
      <li>Aggregates existing DeFi primitives</li>
    </ul>

    <div className={css.chipsContainer}>
      <GradientChip caption="Bridges" />
      <GradientChip caption="Clearing Layer" />
      <GradientChip caption="Proprietary Liquidity (Solver)" />
      <GradientChip caption="AMM" />
      <GradientChip caption="Lending Markets" />
    </div>
  </>
)

const GradientStep = ({ stepNumber }: { stepNumber: number }) => {
  return <div className={css.stepCircle}>{stepNumber}</div>
}

const STEPS_NUMBER = 3
const TRANSLATION_VALUES = [400, 0, -400]

const Architecture = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className={css.anchor}>
      <div className={css.arc} />

      <Container className={css.container}>
        <div className={css.contentWrapper}>
          <GradientChip caption="Safenet Architecture" />

          <Typography className={css.title}>
            <span className={css.titleGradient}>Reimagining</span> onchain transactions
          </Typography>
        </div>

        {/* Mobile Stepper */}
        <div className={css.stepperWrapper}>
          <Stepper activeStep={activeStep} style={{ transform: `translateX(${TRANSLATION_VALUES[activeStep]}px)` }}>
            <Step className={css.borderedDescription}>
              <ProcessorFeatures />
            </Step>

            <Step sx={{ marginTop: '-208px' }}>
              <MidItemHeader />

              <Grid container className={css.midItemContainer}>
                {userSteps.map(({ step, text, icon }) => (
                  <Grid item md={12} className={css.step} key={text}>
                    <div className={css.stepContent}>
                      <GradientStep stepNumber={step} />
                      <Typography className={css.stepText}>{text}</Typography>
                    </div>

                    {icon ? <img src={icon.src} alt={icon.alt} /> : null}
                  </Grid>
                ))}
              </Grid>
            </Step>

            <Step className={css.borderedDescription}>
              <NetworkFeatures />
            </Step>
          </Stepper>
          <MobileStepper
            className={css.mobileStepper}
            variant="progress"
            steps={STEPS_NUMBER}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === STEPS_NUMBER - 1}>
                <NextButton />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <BackButton />
              </Button>
            }
          />
        </div>

        <Grid container justifyContent="space-between" className={css.gridContainer}>
          <img src="/images/Safenet/Architecture/shapes-md.png" alt="Block shapes" className={css.shapes} />

          <Grid item md={4} className={css.blockItem}>
            <ProcessorFeatures />
          </Grid>

          <Grid item md={4} className={css.midItem}>
            <MidItemHeader />

            <Grid container className={css.midItemContainer}>
              {userSteps.map(({ step, text, icon }) => (
                <Grid item md={12} className={css.step} key={text}>
                  <div className={css.stepContent}>
                    <GradientStep stepNumber={step} />
                    <Typography className={css.stepText}>{text}</Typography>
                  </div>

                  {icon ? <img src={icon.src} alt={icon.alt} /> : null}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item md={4} className={css.blockItem}>
            <NetworkFeatures />
          </Grid>
        </Grid>

        <div className={css.buttonWrapper}>
          <a href={SAFENET_DOCS_LINK} target="_blank" rel="noreferrer">
            <LinkButton>Read docs</LinkButton>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default Architecture
