import { Container, Grid, Typography } from '@mui/material'
import css from '@/components/Core/TextGrid/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'

const ItemGrid = ({ title, items }: BaseBlock) => {
  return (
    <Container className={css.wrapper}>
      <Grid container mt={{ xs: 5, md: 10 }}>
        <Typography variant="caption" component="div" mb={3}>
          {title}
        </Typography>
        <Grid container>
          {items
            ? items.map(({ title, text, link }, index) => (
                <Grid key={index} item xs={12} md={12 / items.length} className={css.card}>
                  <Typography variant="h4" color="text.primary" mb={1}>
                    {title}
                  </Typography>
                  <Typography color="primary.light">{text}</Typography>
                  {link && (
                    <LinkButton href={link.href} sx={{ mt: '32px' }}>
                      {link.title}
                    </LinkButton>
                  )}
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ItemGrid
