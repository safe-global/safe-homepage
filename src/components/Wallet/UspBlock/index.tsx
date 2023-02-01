import React, { FC, ReactNode } from 'react'
import { Chip, Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type GridItemProps = {
  icon?: FC
  title: string
  text: ReactNode
  comingSoon?: boolean
}

const GridItem = ({ icon: Icon, title, text, comingSoon, width = 4 }: GridItemProps & { width: 3 | 4 }) => (
  <Grid
    item
    xs={12}
    md={width}
    className={`${css.gridItems} ${width === 3 ? css.fourCols : css.threeCols}`}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <div>
      {Icon ? <Icon /> : null}
      <Typography variant="h4" mt={3} mb={1}>
        {title}
      </Typography>
      <Typography color="primary.light">{text}</Typography>
    </div>
    {comingSoon ? (
      <Chip
        label={
          <Typography variant="caption" color="primary.main">
            Coming soon
          </Typography>
        }
        className={css.comingSoonChip}
        variant="outlined"
      />
    ) : null}
  </Grid>
)

export type UspBlockProps = {
  width: 3 | 4
  title: string
  items: GridItemProps[]
}

const UspBlock = ({ width, title, items }: UspBlockProps) => (
  <Container>
    <Divider />
    <Grid container className={layoutCss.containerShort} justifyContent="center">
      <Typography variant="h2" mb={5} align="center">
        {title}
      </Typography>
      <Grid container className={css.roundCorners}>
        {items.map((item) => (
          <GridItem key={item.title.toLowerCase()} width={width} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default UspBlock
