import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const CoreIntro = ({ title, text, image, link, titlePrefix }: BaseBlock) => {
  return (
    <Container>
      <Grid container className={css.container} spacing={{ xs: 6, md: '30px' }} justifyContent="space-between">
        <Grid item md={6}>
          <img {...image} />
        </Grid>
        <Grid item md={6}>
          <Typography className={css.title} variant="h1" mb={4}>
            <>
              {titlePrefix && <img {...titlePrefix} />} {title}
            </>
          </Typography>
          <Typography variant="h4" component="div" mb={5}>
            {text}
          </Typography>
          <Button key={link?.href} href={link?.href} variant="contained" size="large">
            {link?.title}
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  )
}

export default CoreIntro
