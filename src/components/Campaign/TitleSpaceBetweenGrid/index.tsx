import { Container, Typography } from '@mui/material'
import React from 'react'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTitleSpaceBetweenGridSkeleton } from '@/contentful/types'
import { isEntryTypeCardGridItem } from '@/lib/typeGuards'

type TitleSpaceBetweenGridEntry = Entry<TypeTitleSpaceBetweenGridSkeleton, undefined, string>

const TitleSpaceBetweenGrid = (props: TitleSpaceBetweenGridEntry) => {
  const { title, items } = props.fields

  const stats = items.filter(isEntryTypeCardGridItem).map((item) => ({
    title: item.fields.title,
    text: item.fields.text,
  }))

  return (
    <Container className={layoutCss.containerShort}>
      <Typography variant="h2" textAlign="center" mb="60px">
        {title}
      </Typography>

      {Array.isArray(stats) ? (
        <div className={css.wrapper}>
          <div className={css.spot} />
          {stats.map((item) => (
            <div className={css.item} key={item.title}>
              <Typography variant="h4" color="text.secondary" textAlign="center" mb="20px">
                {item.title}
              </Typography>
              <Typography variant="h1" className={css.value}>
                {item.text}
              </Typography>
            </div>
          ))}
        </div>
      ) : undefined}
    </Container>
  )
}

export default TitleSpaceBetweenGrid
