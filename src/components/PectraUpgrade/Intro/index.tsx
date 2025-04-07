import { Button, Container, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import Link from 'next/link'
import HeroShape from '@/public/images/PectraUpgrade/hero-shape.svg'
const Intro = ({ text, title, link }: BaseBlock) => {
  return (
    <Container>
      <Grid container className={css.container} rowSpacing={{ xs: 6 }} columnSpacing={{ md: '30px', xl: '50px' }}>
        <Grid item md={6} display="flex" justifyContent="center" className={css.hero}>
          <Grid className={css.greenRadial}></Grid>
          <img src="/images/PectraUpgrade/hero.png" alt="Green Gem" />
          <HeroShape />
        </Grid>

        <Grid item md={6}>
          <Typography variant="h3" mb={2}>
            {text}
          </Typography>

          <Typography variant="h1" mb={4}>
            {title}
          </Typography>

          {link && (
            <Link href={link.href}>
              <Button variant="contained" size="large" color="primary">
                {link.title}
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Intro
