import type { ReactNode } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import HeaderCTA from '@/components/common/HeaderCTA'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'

const GridItemBigTitle = ({ title, text, children, link }: Partial<BaseBlock> & { children?: ReactNode }) => {
  return (
    <Grid item xs={12} md={4} className={css.card}>
      <a href={link?.href} target="_blank" rel="noreferrer" className={css.cardLink}>
        <div>
          <Typography variant="h4" mb={1} color="text.primary">
            {title}
          </Typography>
          <Typography color="primary.light">{text}</Typography>
        </div>
        <ArrowIcon className={css.icon} />
        {children ? <div className={css.childrenWrapper}>{children}</div> : null}
      </a>
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
