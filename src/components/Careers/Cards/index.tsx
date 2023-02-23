import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import type { ReactElement } from 'react'

import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type CardProps = {
  header?: {
    src: string
    alt: string
  }
  title: string
  link: { href: string; title: string }
  highlight?: boolean
  extra?: ReactElement
}

const Card = ({ header, title, link, highlight, extra }: CardProps): ReactElement => {
  return (
    <Grid key={title} item xs={12} md={4}>
      <div className={clsx(css.card, highlight ? css.highlight : css.outline)}>
        {header && (
          <div className={css.header}>
            <img {...header} />
          </div>
        )}

        <div className={css.header}>{extra}</div>

        <Typography variant="h3" className={css.cardTitle}>
          {title}
        </Typography>

        {/* @ts-ignore */}
        <LinkButton underline={false} className={css.link} fullSize href={link.href} target="_blank" rel="noreferrer">
          {link.title}
        </LinkButton>

        <ArrowIcon className={css.arrow} />
      </div>
    </Grid>
  )
}

export const Cards = ({
  items,
  title,
  id,
  highlight,
}: {
  items: CardProps[]
  title: string
  id?: string
  highlight?: boolean
}): ReactElement => {
  return (
    <Container id={id}>
      <Grid container spacing="30px" className={layoutCss.container}>
        <Grid item xs={12}>
          <Typography variant="h1" className={css.title}>
            {title}
          </Typography>
        </Grid>
        {items.map((props, index) => (
          <Card key={index} highlight={highlight} {...props} />
        ))}
      </Grid>
    </Container>
  )
}

export default Cards
