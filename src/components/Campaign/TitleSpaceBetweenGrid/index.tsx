import { Container, Typography } from '@mui/material'
import React from 'react'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTitleSpaceBetweenGridSkeleton } from '@/contentful/types'

type TitleSpaceBetweenGridEntry = Entry<TypeTitleSpaceBetweenGridSkeleton, undefined, string>

const TitleSpaceBetweenGrid = (props: TitleSpaceBetweenGridEntry) => {
  const { title, stats } = props.fields

  return (
    <Container className={layoutCss.containerShort}>
      <Typography variant="h1" textAlign="center" mb="60px">
        {title}
      </Typography>

      {Array.isArray(stats) ? (
        <div className={css.wrapper}>
          <div className={css.spot} />
          {stats.map((item) => (
            <div className={css.item} key={item.text}>
              <Typography variant="h4" color="text.secondary" textAlign="center" mb="20px">
                {item.text}
              </Typography>
              <Typography variant="h1" className={css.value}>
                {item.value}
              </Typography>
            </div>
          ))}
        </div>
      ) : undefined}
    </Container>
  )
}

export default TitleSpaceBetweenGrid
