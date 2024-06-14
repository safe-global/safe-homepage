import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import LinkCard, { type CardProps } from '@/components/common/LinkCard'
import layoutCss from '@/components/common/styles.module.css'

export type CardsProps = { items: CardProps[]; title: string; id?: string; highlight?: boolean }

export const Cards = ({ items, title, id }: CardsProps) => (
  <Container id={id} sx={{ marginBottom: '80px' }} className={layoutCss.containerMedium}>
    <Grid container spacing={{ xs: 2, md: '30px', xl: '50px' }}>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center" mb={{ xs: 3, md: '50px' }}>
          {title}
        </Typography>
      </Grid>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} md={4}>
          <LinkCard {...item} />
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Cards
