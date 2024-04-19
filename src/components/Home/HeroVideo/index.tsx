import { Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import css from '@/components/Home/HeroVideo/styles.module.css'

const HeroVideo = ({ title, link }: BaseBlock) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <video autoPlay muted playsInline loop className={css.video}>
            <source src={link?.href} type="video/mp4" />
          </video>
          <div className={css.filter} />
        </div>

        <Grid container className={css.content} width="100%" height="100%">
          <Grid item>
            <Typography variant="h1" className={css.title}>
              {title}
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
