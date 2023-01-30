import React, { FC, ReactNode } from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'
import ShieldIcon from '@/public/images/Wallet/shield.svg'
import CheckIcon from '@/public/images/Wallet/check.svg'
import SettingsIcon from '@/public/images/Wallet/settings.svg'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const GridItem = ({ icon: Icon, title, children }: { icon: FC; title: string; children: ReactNode }) => {
  return (
    <Grid item xs={12} md={4} className={css.gridItems}>
      <Icon />
      <Typography variant="h4" mt={3} mb={1}>
        {title}
      </Typography>
      <Typography color="primary.light">{children}</Typography>
    </Grid>
  )
}

const UspBlock = () => {
  return (
    <Container>
      <Divider />
      <Grid container className={layoutCss.container} justifyContent="center">
        <Typography variant="h2" mb={5}>
          Your keys. Your coins.
        </Typography>
        <Grid container>
          <GridItem icon={ShieldIcon} title="Battle Tested Security">
            Top notch security and custom access control for you and for your users.
          </GridItem>
          <GridItem icon={CheckIcon} title="Co-ownership">
            Multi-sig based trustless group ownership ownership and asset co-ordination.
          </GridItem>
          <GridItem icon={SettingsIcon} title="Self-custody">
            We never own any of the assets stored in user accounts. We never will.
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UspBlock
