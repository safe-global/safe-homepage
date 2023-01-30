import React, { FC, ReactNode } from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type GridItemProps = {
  icon: FC
  title: string
  text: ReactNode
}

const GridItem = ({ icon: Icon, title, text }: GridItemProps) => {
  return (
    <Grid item xs={12} md={4} className={css.gridItems}>
      <Icon />
      <Typography variant="h4" mt={3} mb={1}>
        {title}
      </Typography>
      <Typography color="primary.light">{text}</Typography>
    </Grid>
  )
}

export type UspBlockProps = {
  content: GridItemProps[]
}

const UspBlock = ({ content }: UspBlockProps) => {
  return (
    <Container>
      <Divider />
      <Grid container className={layoutCss.container} justifyContent="center">
        <Typography variant="h2" mb={5}>
          Your keys. Your coins.
        </Typography>
        <Grid container>
          {content.map((item) => (
            <GridItem key={item.title.toLowerCase()} {...item} />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default UspBlock
