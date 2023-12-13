import HeaderCTA from '@/components/common/HeaderCTA'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import css from './styles.module.css'
import type { Entry } from 'contentful'
import type { TypeRoundCardGridSkeleton } from '@/contentful/types'
import { isAsset, isEntryTypeButton, isEntryTypeCardGridItem } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import { trackEvent } from '@/services/analytics/trackEvent'
import { SOCIAL_LOGIN_EVENTS } from '@/services/analytics/events/socialLogin'

type RoundCardType = {
  title: string
  text: string
  image?: {
    src: string
    alt: string
  }
}

const RoundCard = ({ title, text, image }: RoundCardType) => {
  return (
    <div className={css.card}>
      <div className={css.image}>{image ? <img src={image.src} alt={image.alt} /> : undefined}</div>
      <div className={css.text}>
        <Typography variant="h4" mb={1}>
          {title}
        </Typography>
        <Typography color="primary.light">{text}</Typography>
      </div>
    </div>
  )
}

type RoundCardGridEntry = Entry<TypeRoundCardGridSkeleton, undefined, string>

const RoundCardGrid = (props: RoundCardGridEntry) => {
  const { title, text, link, gridItems } = props.fields
  const headerLink = isEntryTypeButton(link) ? { href: link.fields.btnHref, title: link.fields.btnCopy } : undefined

  const gridItemsData = gridItems.filter(isEntryTypeCardGridItem).map((item) => ({
    title: item.fields.title,
    text: item.fields.text,
    image: isAsset(item.fields.image)
      ? { src: item.fields.image.fields.file?.url || '', alt: item.fields.image.fields.description || '' }
      : undefined,
  }))

  const handleCtaClick = () => {
    trackEvent({
      ...SOCIAL_LOGIN_EVENTS.START_NOW_CLICK,
      label: 'round-card-grid',
    })
  }

  return (
    <Container className={layoutCss.containerMedium}>
      <HeaderCTA title={title} text={text} link={headerLink} onClick={handleCtaClick} />

      <Grid container className={css.gridContainer} spacing={4}>
        <div className={css.spot} />
        {gridItemsData.map((item, index: number) => (
          <Grid item xs={12} md={6} key={index}>
            <RoundCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default RoundCardGrid
