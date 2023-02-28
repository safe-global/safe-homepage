import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

export const ImageText = ({ variant, image, title, text }: BaseBlock & { variant?: 'reverse' }): ReactElement => {
  return (
    <Container>
      <Grid
        container
        direction={variant === 'reverse' ? 'row' : 'row-reverse'}
        spacing={{ xs: '48px', md: '24px' }}
        className={clsx(layoutCss.containerMedium, css.container)}
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

export default ImageText
