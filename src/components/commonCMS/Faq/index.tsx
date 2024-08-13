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
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import RichText from '@/components/common/RichText'
import { type BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const Faq = (props: BaseBlockEntry) => {
  const { title, items } = props.fields

  // Tracks which accordion is open
  const [openMap, setOpenMap] = useState<Record<number, boolean>>()

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <Container className={layoutCss.container}>
      <Grid container className={css.gridContainer}>
        <div className={css.spot} />

        <Grid item md={5} width="100%">
          <RichText {...title} />
        </Grid>

        <Grid item md={7}>
          {itemsList.map((item, index) => {
            const { title, text } = item.fields

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
                key={index}
                disableGutters
                square
              >
                <AccordionSummary
                  expandIcon={openMap?.[index] ? <MinusIcon /> : <PlusIcon />}
                  onClick={() => {
                    !openMap?.[index]
                  }}
                >
                  <Typography variant="h4">
                    <RichText {...title} />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={css.details}>{text && <RichText {...text} />}</AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Faq
