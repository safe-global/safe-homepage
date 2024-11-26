import { Container, Grid, Typography } from '@mui/material'
import { type ReactElement } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const Stats = ({ title, items }: BaseBlock): ReactElement => (
  <Container className={layoutCss.container}>
    <Typography variant="h2" mb={3} textAlign="center">
      {title}
    </Typography>

    <Grid container spacing={{ xs: '30px', xl: '50px' }} justifyContent="space-between">
      {items?.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <a href={item.link?.href} target="_blank" rel="noreferrer" className={css.metric}>
            {/* TODO: Fetch these values from a Dune query */}
            <p className={css.value}>{item.title}</p>

            <Typography variant="caption">{item.text}</Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Stats
