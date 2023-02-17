import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import GreenCheck from '@/public/images/green-check.svg'
import RuntimeVerificationImage from '@/public/images/runtime-verification.png'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { MetricsCard } from './MetricsCard'
import css from './styles.module.css'
import Link from 'next/link'

const ImageParallaxText = ({ title, text, caption, buttons }: BaseBlock): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid
          item
          sx={{
            minHeight: '420px',
          }}
          md={6}
        >
          <MetricsCard className={css.card0} translateY={280} translateX={94} depth={2}>
            <>
              <Typography className={css.cardHeader} color="primary.light">
                Total audits
              </Typography>
              <Typography mt={2} variant="h2">
                11+
              </Typography>
            </>
          </MetricsCard>
          <MetricsCard className={css.card1} translateY={0} translateX={0} depth={3}>
            <>
              <Typography className={css.cardHeader} color="primary.light">
                Avg. reward per bug in bug bounty
              </Typography>
              <Typography mt={1} variant="h2">
                ~ 1M
              </Typography>
            </>
          </MetricsCard>
          <MetricsCard className={css.card2} translateY={232} translateX={340} depth={4}>
            <Typography mt={2} variant="h4" fontWeight={500}>
              G0 Group
            </Typography>
          </MetricsCard>
          <MetricsCard className={css.card3} translateY={0} translateX={300} depth={0}>
            <GreenCheck />
          </MetricsCard>
          <MetricsCard className={css.card4} translateY={56} translateX={156} depth={3}>
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
            {buttons ? (
              <Box display="flex" gap={3}>
                {buttons.map((button) => {
                  const { text, variant, href } = button
                  const isButton = variant === 'button'
                  if (isButton) {
                    return (
                      <Button key={text} href={href} target="_blank" rel="noreferrer" variant="contained" size="large">
                        {text}
                      </Button>
                    )
                  }
                  return (
                    <Link key={text} href={href} target="_blank" rel="noreferrer" passHref>
                      <LinkButton>{text}</LinkButton>
                    </Link>
                  )
                })}
              </Box>
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ImageParallaxText
