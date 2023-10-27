import type { ReactNode } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import HeaderCTA from '@/components/common/HeaderCTA'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const GridItemBigTitle = ({ title, text, children }: Partial<BaseBlock> & { children?: ReactNode }) => {
  return (
    <Grid item xs={12} md={4} className={css.card}>
      <div>
        <Typography variant="h4" mb={1}>
          {title}
        </Typography>
        <Typography color="primary.light">{text}</Typography>
      </div>
      {children ? <div className={css.childrenWrapper}>{children}</div> : null}
    </Grid>
  )
}

const OurMission = (props: BaseBlock) => {
  return (
    <Container className={`${layoutCss.containerShort} ${css.gradientEmphasis}`}>
      <HeaderCTA {...props} bigTitle />

      <Grid container className={css.gridContainer}>
        {props.items?.map((item, index) => (
          <GridItemBigTitle key={index} {...item}>
            {item.image ? <img src={item.image.src} alt={item.image.alt} /> : null}
            {item.link ? (
              <a href={item.link.href} target="_blank" rel="noreferrer">
                <Typography variant="caption" className={css.tagline}>
                  {item.link.title}
                </Typography>
              </a>
            ) : null}
          </GridItemBigTitle>
        ))}
      </Grid>
    </Container>
  )
}

export default OurMission
