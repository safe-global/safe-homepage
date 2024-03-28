import { Box, Button, Step, StepIcon, StepLabel, Stepper, type Theme, Typography, useMediaQuery } from '@mui/material'
import MobileStepper from '@mui/material/MobileStepper'
import { useMemo, useState } from 'react'
import LessThanIcon from '@/public/images/less-than.svg'
import GreatThanIcon from '@/public/images/great-than.svg'
import FullCircleIcon from '@/public/images/circle-full.svg'
import EmptyCircleIcon from '@/public/images/circle-empty.svg'
import { type Entry } from 'contentful'
import { type TypeSimpleBaseBlockSkeleton } from '@/contentful/types'
import css from './styles.module.css'

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
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const STEPS_PER_DOT = useMemo(() => (isSmallScreen ? 1 : 3), [isSmallScreen])
  const stepsNumber = Math.ceil(items.length / STEPS_PER_DOT)

  const timelineItems = items.map(({ fields }) => fields)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box mt="140px">
      <Typography variant="h2" textAlign="center">
        Key milestones
      </Typography>

      <Box className={css.stepperWrapper}>
        <Stepper activeStep={activeStep} alternativeLabel style={{ transform: `translate(-${activeStep * 75}vw)` }}>
          {timelineItems.map(({ title, text }, idx) => (
            <Step key={`${title}-${idx}`}>
              <StepLabel
                color="red"
                StepIconComponent={() => (
                  <StepIcon icon={idx < (activeStep + 1) * STEPS_PER_DOT ? <FullCircleIcon /> : <EmptyCircleIcon />} />
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
