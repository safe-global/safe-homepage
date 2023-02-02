import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import GreenCheck from '@/public/images/green-check.svg'
import RuntimeVerificationImage from '@/public/images/runtime-verification.png'
import ContractsImage from '@/public/images/contract.png'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { MetricsCard } from './MetricsCard'
import css from './styles.module.css'

const Security = ({ title, text, caption, link }: BaseBlock): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item md={6}>
          <MetricsCard className={css.card0} translateY="280px" translateX="94px">
            <>
              <Typography className={css.cardHeader} color="primary.light">
                Total audits
              </Typography>
              <Typography mt={2} variant="h2">
                11+
              </Typography>
            </>
          </MetricsCard>
          <MetricsCard className={css.card1} translateY="0px" translateX="0px">
            <>
              <Typography className={css.cardHeader} color="primary.light">
                Avg. reward per bug in bug bounty
              </Typography>
              <Typography mt={1} variant="h2">
                ~ 1M
              </Typography>
            </>
          </MetricsCard>
          <MetricsCard className={css.card2} translateY="216px" translateX="340px">
            <Typography mt={2} variant="h4" fontWeight={500}>
              G0 Group
            </Typography>
          </MetricsCard>
          <MetricsCard className={css.card3} translateY="0px" translateX="300px">
            <GreenCheck />
          </MetricsCard>
          <MetricsCard className={css.card4} translateY="56px" translateX="156px">
            <Image src={RuntimeVerificationImage} alt="Runtime verification" />
          </MetricsCard>
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption" component="div" mb={3}>
            {caption}
          </Typography>
          <Typography variant="h2" mb={4}>
            {title}
          </Typography>
          <Typography mb={5}>{text}</Typography>
          <Box display="flex" gap={3}>
            <Button href={link?.href} variant="contained" size="large">
              {link?.title}
            </Button>
            <LinkButton href="#">Start bug hunting</LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Security
