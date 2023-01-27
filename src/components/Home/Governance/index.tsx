import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import css from './styles.module.css'
import clsx from 'clsx'
import layoutCss from '@/components/common/styles.module.css'

const Governance = (): ReactElement => {
  return (
    <Container>
      <div className={layoutCss.container}>
        <Typography variant="caption" component="div" mb={3}>
          Protocol governance
        </Typography>
        <Grid container mb="135px" spacing="30px">
          <Grid item md={6}>
            <Typography variant="h2">
              Safe DAO{' '}
              <Typography variant="inherit" component="span" color="primary">
                community-governed
              </Typography>{' '}
              account abstraction ecosystem
            </Typography>
          </Grid>
          <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
          <Grid item md={5} mt={1}>
            <Typography mb={2}>Safe is governed by SafeDAO, a decentralized collective.</Typography>
            <Typography>
              The collective entails core contributors, backers, GnosisDAO, users and Safe Guardians committed to making
              web3 more secure, collaborative and accessible.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} mb={{ xs: 8, md: '235px' }}>
          <Grid item xs={12} md={4}>
            <div className={css.card}>
              <a href="#" className={css.cardLink}>
                <Typography variant="caption" component="div" pb="77px">
                  Be part of a community
                </Typography>
                <Typography variant="h3" color="text.primary">
                  Forum
                </Typography>
                <ArrowIcon className={css.icon} />
              </a>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={css.card}>
              <a href="#" className={css.cardLink}>
                <Typography variant="caption" component="div" pb="77px">
                  Follow DAO decisions
                </Typography>
                <Typography variant="h3" color="text.primary">
                  Latest
                  <br />
                  Proposals
                </Typography>
                <ArrowIcon className={css.icon} />
              </a>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={clsx(css.card, css.gradient)}>
              <a href="#" className={css.cardLink}>
                <Typography variant="caption" component="div" pb="77px" color="text.primary">
                  Shape our future
                </Typography>
                <Typography variant="h3" color="text.primary">
                  Safe
                  <br />
                  Guardians
                </Typography>
                <ArrowIcon className={css.icon} />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Governance
