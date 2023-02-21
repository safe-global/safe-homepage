import type { BaseBlock } from '@/components/Home/types'
import { Chip, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from '@/components/Core/TextGrid/styles.module.css'
import LinkButton from '@/components/common/LinkButton'

const AASdk = ({ title, caption, text, link }: BaseBlock) => {
  return (
    <Container>
      <Grid container className={layoutCss.containerShort}>
        <Grid item md={8} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }} mb={5}>
          <Chip
            label={
              <Typography variant="caption" color="primary.main">
                {caption}
              </Typography>
            }
            className={css.chip}
            variant="outlined"
          />
          <Typography variant="h2">{title}</Typography>
          {text && <Typography>{text}</Typography>}
          <LinkButton href={link?.href} sx={{ width: 'fit-content' }}>
            {link?.title}
          </LinkButton>
        </Grid>
        <div className={css.videoWrapper}>
          <video autoPlay muted loop className={css.video}>
            <source src="/videos/aa-sdk.mp4" type="video/mp4" />
          </video>
          <img src="/images/pixel.png" className={css.imageMap} useMap="#workmap" alt="" />
          <map name="workmap">
            <area shape="rect" coords="265,167,453,245" alt="Protocol Kit" href="/" />
            <area shape="rect" coords="490,145,675,220" alt="Onboarding Kit" href="/" />
            <area shape="rect" coords="260,322,453,394" alt="API Kit" href="/" />
            <area shape="rect" coords="525,300,706,374" alt="Connection Kit" href="/" />
          </map>
        </div>
      </Grid>
    </Container>
  )
}

export default AASdk
