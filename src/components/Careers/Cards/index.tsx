import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import type { ReactElement } from 'react'

import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import Link from 'next/link'

export type CardProps = BaseBlock & {
  highlight?: boolean
  extra?: ReactElement
}

const Card = ({ image, title, link, highlight, extra }: CardProps): ReactElement => {
  return (
    <Grid item xs={12} md={4}>
      <div className={clsx(css.card, highlight ? css.highlight : css.outline)}>
        {image && (
          <div className={css.header}>
            <img {...image} />
          </div>
        )}

        <div className={css.header}>{extra}</div>

        <Typography variant="h3" className={css.cardTitle}>
          {title}
        </Typography>

        {link && (
          <Link href={link.href} target="_blank" rel="noreferrer" passHref>
            <LinkButton underline={false} className={css.link} fullSize>
              {link.title}
            </LinkButton>
          </Link>
        )}

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
    <Container id={id} sx={{ marginBottom: '80px' }} className={layoutCss.containerMedium}>
      <Grid container spacing={{ xs: 2, md: '30px', xl: '50px' }}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign="center" mb={{ xs: 3, md: '50px' }}>
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
