import { ButtonBase, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type CardProps = {
  header: ReactElement
  title: string
  link: { href: string; title: string }
}

const Card = ({ header, title, link }: CardProps): ReactElement => {
  return (
    <Grid key={title} item xs={12} md={4}>
      <ButtonBase
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to open ${title}`}
        className={css.card}
      >
        <div className={css.header}>{header}</div>
        <Typography variant="h3" className={css.title}>
          {title}
        </Typography>
        <LinkButton underline={false} className={css.link}>
          {link.title}
        </LinkButton>
        <ArrowIcon className={css.arrow} />
      </ButtonBase>
    </Grid>
  )
}

export const Cards = ({ items, title }: { items: CardProps[]; title: string }): ReactElement => {
  return (
    <Container>
      <Grid container spacing="30px" className={layoutCss.container}>
        <Grid item xs={12}>
          <Typography variant="h1" className={css.title}>
            {title}
          </Typography>
        </Grid>
        {items.map((props) => (
          <Card {...props} />
        ))}
      </Grid>
    </Container>
  )
}
