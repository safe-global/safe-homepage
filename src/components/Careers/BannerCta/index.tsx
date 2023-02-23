import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import clsx from 'clsx'
import type { BaseBlock } from '@/components/Home/types'

export const BannerCta = ({ title, text, link }: BaseBlock): ReactElement => {
  return (
    <Container className={clsx(layoutCss.containerShort, css.wrapper)}>
      <div className={css.container}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Typography variant="h2" mb={{ xs: 3, md: 0 }}>
                {title}
              </Typography>
            </Grid>
            <Grid item md={2} />
            <Grid item xs={12} md={5}>
              <Typography variant="h4" mb={2}>
                {text}
              </Typography>
              {link && (
                <Button
                  target="_top"
                  variant="contained"
                  size="large"
                  rel="noopener noreferrer"
                  href={link.href}
                  color="secondary"
                >
                  {link.title}
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  )
}

export default BannerCta
