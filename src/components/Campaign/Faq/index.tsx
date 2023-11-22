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
import BackgroundImage from '@/public/images/Campaigns/faq-bg.png'
import Image from 'next/image'
import { isEntryTypeFaqEntry } from '@/lib/typeGuards'
import { trackEvent } from '@/services/analytics/trackEvent'
import { SOCIAL_LOGIN_EVENTS } from '@/services/analytics/events/socialLogin'

type FaqEntry = Entry<TypeFaqSkeleton, undefined, string>

const Faq = (props: FaqEntry) => {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>()

  const { title, items } = props.fields

  const faqData = items.filter(isEntryTypeFaqEntry).map((item) => ({
    question: item.fields.question,
    answer: item.fields.answer,
    slug: item.fields.slug,
  }))

  return (
    <>
      <Image className={css.bg} src={BackgroundImage} alt="blocks background" />
      <Container className={layoutCss.container}>
        <Grid container className={css.gridContainer}>
          <div className={css.spot} />
          <Grid item md={1} />

          <Grid item md={2} width="100%">
            <Typography variant="h1" className={css.title}>
              {title}
            </Typography>
          </Grid>

          <Grid item md={2} />

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
                  disableGutters
                  square
                >
                  <AccordionSummary
                    expandIcon={openMap?.[index] ? <MinusIcon /> : <PlusIcon />}
                    onClick={() => {
                      // fire event only when accordion is expanded
                      !openMap?.[index] &&
                        trackEvent({
                          ...SOCIAL_LOGIN_EVENTS.FAQ_QUESTION_EXPAND,
                          label: `${item.slug}`,
                        })
                    }}
                  >
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
    </>
  )
}

export default Faq
