import type { ReactNode } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import HeaderCTA from '@/components/common/HeaderCTA'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const GridItemBigTitle = ({ title, text, children, link }: Partial<BaseBlock> & { children?: ReactNode }) => {
  return (
    <Grid item xs={12} md={4} className={css.card}>
      <div>
        <Typography variant="h4" mb={1} color="text.primary">
          {title}
        </Typography>
        <Typography color="primary.light">{text}</Typography>
      </div>
      {children ? <div className={css.childrenWrapper}>{children}</div> : null}
    </Grid>
  )
}

const OurMission = (props: Omit<BaseBlock, 'items'> & { items?: Partial<BaseBlock & { tagline: string }>[] }) => {
  return (
    <Container className={`${layoutCss.containerShort} ${css.gradientEmphasis}`}>
      <HeaderCTA {...props} bigTitle />

      <Grid container className={css.gridContainer}>
        {props.items?.map((item, index) => (
          <GridItemBigTitle key={index} {...item}>
            {item.image ? <img src={item.image.src} alt={item.image.alt} /> : null}
            {item.tagline ? (
              <Typography variant="caption" className={css.tagline}>
                {item.tagline}
              </Typography>
            ) : null}
          </GridItemBigTitle>
        ))}
      </Grid>
    </Container>
  )
}

export default OurMission
