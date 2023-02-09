import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import clsx from 'clsx'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const BannerCta = ({
  title,
  text,
  link,
}: {
  title: string
  text: string
  link: {
    title: string
    href: string
  }
}): ReactElement => {
  return (
    <Container>
      <Grid container className={clsx(layoutCss.container, css.container)}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className={css.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography className={css.text}>{text}</Typography>
          <Button
            target="_top"
            variant="contained"
            size="large"
            rel="noopener noreferrer"
            href={link.href}
            className={css.button}
          >
            {link.title}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
