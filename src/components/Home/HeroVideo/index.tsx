import { Grid, Typography } from '@mui/material'
import css from '@/components/Home/HeroVideo/styles.module.css'
import type { HeroVideoBlock } from '@/components/Home/types'

const HeroVideo = ({ titleLines: title }: HeroVideoBlock) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <video autoPlay muted playsInline loop className={css.video}>
            <source src="/videos/Home/safe-2024-hero.mp4" type="video/mp4" />
          </video>
          <div className={css.filter} />
        </div>

        <Grid container className={css.content} width="100%" height="100%">
          <Grid item>
            <Typography variant="h1" className={css.title}>
              {title[0]}
              <span className={css.hl}>{title[1]}</span>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="caption" className={css.scroll}>
          Scroll
        </Typography>
      </div>
    </div>
  )
}

export default HeroVideo
