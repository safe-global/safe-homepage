import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import { Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const Cards = ({ items }: BaseBlock) => {
  return (
    <Container>
      <Grid container>
        {items
          ? items.map(({ title, text, link, image }, index) => (
              <Grid key={index} item xs={12} md={12 / items.length} className={css.card}>
                <div className={css.cardContent}>
                  <Typography variant="h4" component="div" color="text.primary">
                    {title}
                  </Typography>
                  {image && <img src={image.src} alt={image.alt} className={css.cardImage} />}
                </div>
                {link && (
                  <Link href={link.href} target="_blank" rel="noreferrer" className={css.cardLink}>
                    {link.title}
                  </Link>
                )}
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  )
}

export default Cards
