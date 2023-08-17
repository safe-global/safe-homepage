import { Container, Grid, Typography } from '@mui/material'
import { type ReactElement } from 'react'

import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { useSafeStats } from '@/hooks/useSafeStats'

const Stats = ({ caption, title, text, items }: BaseBlock): ReactElement => {
  const safeStats = useSafeStats()

  return (
    <Container>
      <Grid container className={layoutCss.containerShort} spacing={{ xs: '30px', xl: '50px' }}>
        <Grid item md={1} />
        <Grid item md={5}>
          <Typography variant="caption" component="div" mb={2}>
            {caption}
          </Typography>
          <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="primary.light">
            {text}
          </Typography>
        </Grid>
        <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
        <Grid item md={5}>
          <div className={css.metricWrapper}>
            {items?.map((item, index) => (
              <a href={item.link?.href} target="_blank" rel="noreferrer" className={css.metric} key={'metric-' + index}>
                <p className={css.value}>{safeStats[index] ?? item.title}</p>
                <Typography variant="caption">{item.text}</Typography>
              </a>
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Stats
