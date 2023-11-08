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
import React, { useState } from 'react'
import type { TypeFaqSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type FaqEntry = Entry<TypeFaqSkeleton, undefined, string>

const Faq = (props: FaqEntry) => {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>()

  const faqData = props.fields.list
  if (!Array.isArray(faqData)) return null

  return (
    <Container className={layoutCss.containerMedium}>
      <Grid container position="relative">
        <div className={css.spot} />
        <Grid item md={1} />
        <Grid item md={4}>
          <Typography variant="h1">{props.fields.title}</Typography>
        </Grid>
        <Grid item md={7}>
          {faqData.map((item, index) => {
            const handleChange: AccordionProps['onChange'] = (_, expanded) => {
              setOpenMap((prev) => ({
                ...prev,
                [index]: expanded,
              }))
            }

            return (
              <Accordion
                className={css.accordion}
                expanded={openMap?.[index] ?? false}
                onChange={handleChange}
                key={item.question}
              >
                <AccordionSummary expandIcon={openMap?.[index] ? <MinusIcon /> : <PlusIcon />}>
                  <Typography variant="h4">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Faq
