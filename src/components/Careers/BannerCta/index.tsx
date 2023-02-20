import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
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
    <Container className={layoutCss.container}>
      <div className={css.container}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Typography variant="h2" className={css.title}>
                {title}
              </Typography>
            </Grid>
            <Grid item md={2} />
            <Grid item xs={12} md={5}>
              <Typography variant="h4" mb={2}>
                {text}
              </Typography>
              <Button
                target="_top"
                variant="contained"
                size="large"
                rel="noopener noreferrer"
                href={link.href}
                className={css.button}
                color="background"
              >
                {link.title}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  )
}

export default BannerCta
