import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import { Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import clsx from 'clsx'

const Cards = ({ items, stacked = false }: Pick<BaseBlock, 'items'> & { stacked?: boolean }) => {
  return (
    <Container>
      <Grid container>
        {items?.map(({ title, text, link, image }, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={stacked ? 12 : 12 / items.length}
            className={clsx(css.card, stacked && css.stacked)}
          >
            <div className={css.cardContent}>
              <Typography variant="h4" component="div" color="text.primary">
                {title}
              </Typography>
              {image && <img src={image.src} alt={image.alt} className={css.cardImage} />}
            </div>
            {text && (
              <Typography color="primary.light" mt={1}>
                {text}
              </Typography>
            )}
            {link && (
              <Link href={link.href} target="_blank" rel="noreferrer" className={css.cardLink}>
                {link.title}
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Cards
