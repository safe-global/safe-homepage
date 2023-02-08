import React from 'react'
import { Chip, Container, Divider, Grid, type GridProps, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const GridItem = ({ icon, title, text, caption, width = 4 }: BaseBlock & { width: GridProps['md'] }) => (
  <Grid
    item
    xs={12}
    md={width}
    className={css.gridItems}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <div>
      {icon}
      <Typography variant="h4" mt={3} mb={1}>
        {title}
      </Typography>
      <Typography color="primary.light">{text}</Typography>
    </div>
    {caption ? (
      <Chip
        label={
          <Typography variant="caption" color="primary.main">
            {caption}
          </Typography>
        }
        className={css.comingSoonChip}
        variant="outlined"
      />
    ) : null}
  </Grid>
)

export type UspBlockProps = {
  variant: '3-columns' | '4-columns'
  title: string
  items: BaseBlock[]
}

const UspBlock = ({ variant, title, items }: UspBlockProps) => (
  <Container>
    <Divider />
    <Grid container className={layoutCss.containerShort} justifyContent="center">
      <Typography variant="h2" mb={5} align="center">
        {title}
      </Typography>
      <Grid container className={css.roundCorners}>
        {items.map((item, index) => (
          <GridItem key={index} width={variant === '3-columns' ? 4 : 3} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default UspBlock
