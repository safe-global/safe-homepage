import { Container, Divider, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import { scrollToElement } from '@/lib/scrollSmooth'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const CoreIntro = ({ title, text, buttons, scroll }: BaseBlock & { scroll?: { title: string; target: string } }) => {
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
          <video autoPlay muted playsInline loop poster="/images/Core/intro-chip.png" className={css.video}>
            <source src="/videos/Core/intro-chip.webm" type="video/webm" />
            <source src="/videos/Core/intro-chip.hevc.mp4" type="video/mp4" />
            <img src="/images/Core/intro-chip.png" alt="Core Chip" />
          </video>
        </Grid>

        <Grid item md={6}>
          <Typography variant="h1" mb={4}>
            {title}
          </Typography>

          <Typography variant="h5" component="div" mb={5}>
            {text}
          </Typography>

          <ButtonsWrapper buttons={buttons} />
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
