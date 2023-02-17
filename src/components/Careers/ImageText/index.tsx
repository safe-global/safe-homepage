import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import type { DetailedHTMLProps, ImgHTMLAttributes, ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const ImageText = ({
  variant,
  image,
  title,
  text,
}: {
  variant?: 'reverse'
  title: string
  text?: string
  image: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}): ReactElement => {
  return (
    <Container>
      <Grid
        container
        direction={variant === 'reverse' ? 'row' : 'row-reverse'}
        spacing={{ xs: '48px', md: '24px' }}
        className={clsx(layoutCss.container, css.container)}
      >
        <Grid item xs={12} md={5} className={css.text}>
          <Typography variant="h2">{title}</Typography>
          {text ? <Typography>{text}</Typography> : null}
        </Grid>
        <Grid item xs={12} md={6} className={css.image}>
          <img {...image} />
        </Grid>
      </Grid>
    </Container>
  )
}
