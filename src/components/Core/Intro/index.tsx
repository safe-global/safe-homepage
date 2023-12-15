import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { scrollToElement } from '@/lib/scrollSmooth'

const CoreIntro = ({ title, text, link, scroll }: BaseBlock & { scroll?: { title: string; target: string } }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()

    // TODO: move offset to CSS
    scrollToElement(target, 200)
  }

  return (
    <Container>
      <Grid
        container
        className={css.container}
        rowSpacing={{ xs: 6 }}
        columnSpacing={{ md: '30px', xl: '50px' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={6} display="flex" justifyContent="center">
          <video autoPlay muted playsInline loop className={css.video}>
            <source src="/videos/Core/intro-chip.webm" type="video/webm" />
            <source src="/videos/Core/intro-chip.hevc.mp4" type="video/mp4" />
            <img src="/images/Core/intro-chip.png" alt="Core Chip" />
          </video>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h1" mb={4}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" mb={5}>
            {text}
          </Typography>
          {link && (
            <Button key={link.href} href={link.href} target="_blank" rel="noreferrer" variant="contained" size="large">
              {link.title}
            </Button>
          )}
        </Grid>
        {scroll && (
          <a onClick={(e) => handleClick(e, scroll.target)} className={css.scroll}>
            <Typography variant="caption">{scroll.title}</Typography>
          </a>
        )}
      </Grid>
      <Divider />
    </Container>
  )
}

export default CoreIntro
