import clsx from 'clsx'
import { Chip, Container, Grid, Typography } from '@mui/material'
import type { GridProps } from '@mui/material'
import type { ReactElement } from 'react'

import type { BaseBlock } from '@/components/Home/types'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const GridItem = ({ image, title, text, caption, width = 4 }: BaseBlock & { width: GridProps['md'] }): ReactElement => {
  return (
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
        {image ? <img {...image} /> : null}
        <Typography variant="h4" className={css.title}>
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
}

export type UspBlockProps = {
  variant: '3-columns' | '4-columns'
  title: string
  text?: string
  items: BaseBlock[]
}

const UspBlock = ({ variant, title, text, items }: UspBlockProps): ReactElement => (
  <Container>
    <Grid
      container
      className={clsx(layoutCss.containerShort, css.container)}
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h2">{title}</Typography>
      <Typography mb="80px">{text}</Typography>
      <Grid container className={css.roundCorners}>
        {items.map((item, index) => (
          <GridItem key={index} width={variant === '3-columns' ? 4 : 3} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default UspBlock
