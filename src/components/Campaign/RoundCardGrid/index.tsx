import HeaderCTA from '@/components/common/HeaderCTA'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import css from './styles.module.css'
import type { Entry } from 'contentful'
import type { TypeRoundCardGridSkeleton } from '@/contentful/types'
import { isEntryTypeButton } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import { createImageData } from '@/lib/createImageData'

type RoundCardType = {
  image: {
    src: string
    alt: string
  }
  title: string
  text: string
}

const RoundCard = (props: RoundCardType) => {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={props.image.src} alt={props.image.alt} />
      </div>
      <div className={css.text}>
        <Typography variant="h4" mb={1}>
          {props.title}
        </Typography>
        <Typography color="primary.light">{props.text}</Typography>
      </div>
    </div>
  )
}

type RoundCardGridEntry = Entry<TypeRoundCardGridSkeleton, undefined, string>

const RoundCardGrid = (props: RoundCardGridEntry) => {
  const { title, text, link, items, cardImages } = props.fields
  const headerLink = isEntryTypeButton(link) ? { href: link.fields.btnHref, title: link.fields.btnCopy } : undefined

  const images = createImageData(cardImages)

  return (
    <Container className={layoutCss.containerMedium}>
      <HeaderCTA title={title} text={text} link={headerLink} />

      {images ? (
        <Grid container className={css.gridContainer} spacing={4}>
          <div className={css.spot} />
          {Array.isArray(items) &&
            items.map((item, index: number) => (
              <Grid item xs={12} md={6} key={index}>
                <RoundCard {...item} image={images[index]} />
              </Grid>
            ))}
        </Grid>
      ) : undefined}
    </Container>
  )
}

export default RoundCardGrid