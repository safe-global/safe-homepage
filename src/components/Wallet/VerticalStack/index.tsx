import type { DetailedHTMLProps, ReactElement, SourceHTMLAttributes } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type VideoEmbed = {
  sources: Array<DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>>
}

export const GridItem = ({ image, title, text }: Partial<BaseBlock>): ReactElement => (
  <Grid item xs={12} className={css.card}>
    {image ? <img {...image} /> : null}

    <Typography variant="h5">{title}</Typography>

    {text && (
      <Typography color="primary.light" component="div">
        {text}
      </Typography>
    )}
  </Grid>
)

const VerticalStack = ({ title, video, items = [] }: BaseBlock & { video: VideoEmbed }) => (
  <Container className={layoutCss.containerShort}>
    <Grid container spacing="40px" justifyContent="space-between">
      <Grid item md={6} className={css.titleWrapper}>
        {video && (
          <video autoPlay muted playsInline loop className={css.video}>
            {video.sources.map((s, i) => (
              <source key={i} {...s} />
            ))}
          </video>
        )}

        <Typography variant="h2">{title}</Typography>
      </Grid>

      <Grid item xs={12} md={5}>
        <div className={css.cardWrapper}>
          {items.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
      </Grid>
    </Grid>
  </Container>
)

export default VerticalStack