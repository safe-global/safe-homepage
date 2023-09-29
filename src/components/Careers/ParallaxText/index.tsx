import type { ReactElement, ReactNode } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import clsx from 'clsx'

export type ParallaxTextCenteredProps = {
  title: string
  text: string
  children: ReactNode
}

const ParallaxTextCentered = ({ title, text, children }: ParallaxTextCenteredProps): ReactElement => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        spacing={{ xs: '48px', md: '24px' }}
        className={clsx(layoutCss.containerMedium, css.container)}
      >
        <Grid item className={css.text} mb={{ md: 10 }}>
          <Typography variant="h2" textAlign="center">
            {title}
          </Typography>
          <Typography textAlign="center">{text}</Typography>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default ParallaxTextCentered
