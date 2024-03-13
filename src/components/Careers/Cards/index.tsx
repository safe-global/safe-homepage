import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { BaseBlock } from '@/components/Home/types'
import LinkCard from '@/components/common/LinkCard'
import layoutCss from '@/components/common/styles.module.css'

export type CardsProps = { items: BaseBlock[]; title: string; id?: string }

export const Cards = ({ items, title, id }: CardsProps) => (
  <Container id={id} sx={{ marginBottom: '80px' }} className={layoutCss.containerMedium}>
    <Grid container spacing={{ xs: 2, md: '30px', xl: '50px' }}>
      <Grid item xs={12}>
        <Typography variant="h1" textAlign="center" mb={{ xs: 3, md: '50px' }}>
          {title}
        </Typography>
      </Grid>
      {items.map(({ image, title, link }, index) => (
        <Grid key={index} item xs={12} md={4}>
          {link ? <LinkCard cta="Read more" image={image} url={link.href} title={title} /> : undefined}
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Cards
