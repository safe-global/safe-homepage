import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  type AccordionProps,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import PlusIcon from '@/public/images/plus-sign-icon.svg'
import MinusIcon from '@/public/images/minus-sign-icon.svg'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const FAQ = ({ title, items = [] }: BaseBlock) => {
  // Tracks which accordion is open
  const [openMap, setOpenMap] = useState<Record<number, boolean>>()

  return (
    <Container className={layoutCss.containerShort}>
      <Grid container className={css.gridContainer}>
        <div className={css.spot} />

        <Grid item md={5} width="100%">
          <Typography variant="h1">{title}</Typography>
        </Grid>

        <Grid item md={7}>
          {items.map(({ title, text }, index) => {
            const handleChange: AccordionProps['onChange'] = (_, expanded) => {
              setOpenMap((prev) => ({
                ...prev,
                [index]: expanded,
              }))
            }
            const expanded = openMap?.[index] ?? false

            return (
              <Accordion
                className={css.accordion}
                expanded={expanded}
                onChange={handleChange}
                key={index}
                disableGutters
                square
              >
                <AccordionSummary
                  expandIcon={expanded ? <MinusIcon /> : <PlusIcon />}
                  onClick={() => {
                    !expanded
                  }}
                >
                  <Typography variant="h5">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={css.details}>{text && <Typography>{text}</Typography>}</AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default FAQ
