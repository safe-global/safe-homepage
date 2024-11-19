import dynamic from 'next/dynamic'
import { useRef, type DetailedHTMLProps, type SourceHTMLAttributes } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const Table = dynamic(() => import('./Table'))

type VideoEmbed = {
  sources: Array<DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>>
}

const VerticalStack = ({ title, video, items = [] }: BaseBlock & { video: VideoEmbed }) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <Container className={`${layoutCss.containerShort} ${css.sectionContainer}`} ref={sectionRef}>
      <div className={css.stickyContainer}>
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

          <Grid item xs={12} md={6}>
            <Table items={items} sectionRef={sectionRef} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default VerticalStack
