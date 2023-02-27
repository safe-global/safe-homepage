import { Container, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import Link from 'next/link'

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
                  <div>
                    <Typography variant="h4" color="text.primary" mb={1}>
                      {title}
                    </Typography>
                    <Typography color="primary.light" component="div">
                      {text}
                    </Typography>
                  </div>
                  {link && (
                    <Link href={link.href} target="_blank" rel="noreferrer" passHref>
                      <LinkButton>{link.title}</LinkButton>
                    </Link>
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
