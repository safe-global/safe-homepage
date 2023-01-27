import { Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'

const Community = (): ReactElement => {
  return (
    <Container>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item md={1} />
        <Grid item md={5}>
          <Typography variant="caption" component="div" mb={2}>
            Safe at Scale
          </Typography>
          <Typography variant="h2" mb={4}>
            <i>Safe</i> secures one of the largest $ values in web3. Since 2018.
          </Typography>
          <Typography variant="body2" color="primary.light">
            Previously called Gnosis Safe, Safe spun out of GnosisDAO with a mission to build a better standard for
            ownership with smart contract account based account abstraction.
          </Typography>
        </Grid>
        <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
        <Grid item md={5}>
          <div className={css.metricWrapper}>
            <div>
              <p className={css.metric}>14M+</p>
              <Typography variant="caption">Total transactions</Typography>
            </div>
            <div>
              <p className={css.metric}>$30B+</p>
              <Typography variant="caption">Total assets stored</Typography>
            </div>
            <div>
              <p className={css.metric}>11</p>
              <Typography variant="caption">Networks supported</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Community
