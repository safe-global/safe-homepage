import React from 'react'
import { Chip, Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { BaseBlock } from '@/components/Home/types'
import { ColumnWidths } from '@/components/Wallet/content'

const GridItem = ({ icon, title, text, caption, width = 4 }: BaseBlock & { width: ColumnWidths }) => (
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
  width: ColumnWidths
  title: string
  items: BaseBlock[]
}

const UspBlock = ({ width, title, items }: UspBlockProps) => (
  <Container>
    <Divider />
    <Grid container className={layoutCss.containerShort} justifyContent="center">
      <Typography variant="h2" mb={5} align="center">
        {title}
      </Typography>
      <Grid container className={css.roundCorners}>
        {items.map((item, index) => (
          <GridItem key={index} width={width} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default UspBlock
