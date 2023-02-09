import { Button, Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import clsx from 'clsx'
import type { ReactElement } from 'react'

import { useOpenPositions } from '@/hooks/useOpenPositions'
import { FloatingTiles } from '@/components/Careers/FloatingTiles'
import { palette } from '@/styles/palette'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const Intro = ({
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
  const { data: positions = [] } = useOpenPositions()

  return (
    <Container>
      <div className={css.orbit}>
        <FloatingTiles tiles={40} color={palette.primary.main} />
      </div>
      <Grid container className={clsx(layoutCss.container, css.container)}>
        <Grid item>
          <Chip
            label={`${positions.length} open position${positions.length === 1 ? '' : 's'}`}
            variant="outlined"
            color="primary"
            className={css.chip}
            sx={({ typography }) => typography.caption}
          />
        </Grid>

        <Typography variant="h1" className={css.title}>
          {title}
        </Typography>

        <Typography className={css.text}>{text}</Typography>

        <Button variant="contained" size="large" LinkComponent={Link} href={link.href}>
          {link.title}
        </Button>
      </Grid>
    </Container>
  )
}
