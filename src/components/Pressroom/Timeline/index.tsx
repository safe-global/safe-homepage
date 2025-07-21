import { Box, Button, Step, StepIcon, StepLabel, Stepper, Typography } from '@mui/material'
import MobileStepper from '@mui/material/MobileStepper'
import { useState } from 'react'
import LessThanIcon from '@/public/images/less-than.svg'
import GreatThanIcon from '@/public/images/great-than.svg'
import FullCircleIcon from '@/public/images/circle-full.svg'
import EmptyCircleIcon from '@/public/images/circle-empty.svg'
import { type Entry } from 'contentful'
import { type TypeSimpleBaseBlockSkeleton } from '@/contentful/types'
import { useIsSmallScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'

const STEPS_PER_DOT_SM = 1
const STEPS_PER_DOT_LG = 3

const StepCard = ({ title, text }: { title: string; text: string }) => (
  <div className={css.card}>
    <Typography variant="h4" mb="16px">
      {title}
    </Typography>
    <Typography>{text}</Typography>
  </div>
)

type TimelineProps = { items: Entry<TypeSimpleBaseBlockSkeleton, undefined, string>[] }

const Timeline = ({ items }: TimelineProps) => {
  const [activeStep, setActiveStep] = useState(0)
  const isSmallScreen = useIsSmallScreen()

  const stepsPerDot = isSmallScreen ? STEPS_PER_DOT_SM : STEPS_PER_DOT_LG
  const stepsNumber = Math.ceil(items.length / stepsPerDot)

  const timelineItems = items.map(({ fields }) => fields)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box component="div" mt="140px">
      <Typography variant="h2" textAlign="center">
        Key milestones
      </Typography>

      <Box component="div" className={css.stepperWrapper}>
        <Stepper activeStep={activeStep} alternativeLabel style={{ transform: `translate(-${activeStep * 75}vw)` }}>
          {timelineItems.map(({ title, text }, idx) => (
            <Step key={`${title}-${idx}`}>
              <StepLabel
                color="red"
                StepIconComponent={() => (
                  <StepIcon icon={idx < (activeStep + 1) * stepsPerDot ? <FullCircleIcon /> : <EmptyCircleIcon />} />
                )}
              />
              <StepCard title={title} text={text} />
            </Step>
          ))}
        </Stepper>
      </Box>
      <MobileStepper
        className={css.mobileStepper}
        variant="dots"
        steps={stepsNumber}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === stepsNumber - 1}>
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
