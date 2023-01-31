import React, { FC, ReactNode } from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type GridItemProps = {
  icon: FC
  title: string
  text: ReactNode
}

const GridItem = ({ icon: Icon, title, text }: GridItemProps) => (
  <Grid item xs={12} md={4} className={css.gridItems}>
    <Icon />
    <Typography variant="h4" mt={3} mb={1}>
      {title}
    </Typography>
    <Typography color="primary.light">{text}</Typography>
  </Grid>
)

export type UspBlockProps = {
  title: string
  items: GridItemProps[]
}

const UspBlock = ({ title, items }: UspBlockProps) => (
  <Container>
    <Divider />
    <Grid container className={layoutCss.containerShort} justifyContent="center">
      <Typography variant="h2" mb={5}>
        {title}
      </Typography>
      <Grid container>
        {items.map((item) => (
          <GridItem key={item.title.toLowerCase()} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default UspBlock
