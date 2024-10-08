import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import RadialAnimation from './RadialAnimation'
import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'

const TextRadialAnimation = ({ title, text, link }: BaseBlock) => {
  return (
    <Container>
      <Grid
        container
        className={layoutCss.containerShort}
        spacing={{ xs: 6, md: '30px', xl: '50px' }}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Grid item md={6}>
          <RadialAnimation />
        </Grid>
        <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
        <Grid item md={5}>
          <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
            {title}
          </Typography>
          <Typography mb={{ xs: 3, md: 5 }}>{text}</Typography>
          {link && (
            <SafeLink href={link.href}>
              <LinkButton>{link.title}</LinkButton>
            </SafeLink>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextRadialAnimation
