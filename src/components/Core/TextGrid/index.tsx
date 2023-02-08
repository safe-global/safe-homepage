import { Chip, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import css from './styles.module.css'

export type TextGridProps = {
  image: JSX.Element
  textBlock: {
    caption: string
    title: JSX.Element
    text: string
    link: {
      text: string
      href: string
    }
  }
  grid: {
    title: string
    items: {
      text: string
    }[]
  }
}

const TextGrid = ({ image, textBlock, grid }: TextGridProps) => {
  const { caption, title, text, link } = textBlock
  const { title: gridTitle, items } = grid

  return (
    <Container>
      <Grid container className={layoutCss.containerShort}>
        <Grid container className={css.wrapper} justifyContent="space-between">
          <Grid item md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
            <Chip
              label={
                <Typography variant="caption" color="primary.main">
                  {caption}
                </Typography>
              }
              className={css.chip}
              variant="outlined"
            />
            <Typography variant="h2">{title}</Typography>
            <Typography>{text}</Typography>
            <LinkButton href={link.href} sx={{ width: 'fit-content' }}>
              {link.text}
            </LinkButton>
          </Grid>
          <Grid item md={6}>
            {image}
          </Grid>
        </Grid>
        <Grid container mt={{ xs: 5, md: 10 }}>
          <Typography variant="caption" component="div" mb={3}>
            {gridTitle}
          </Typography>
          <Grid container>
            {items.map(({ text }, index) => (
              <Grid key={index} item xs={12} md={12 / items.length} className={css.card}>
                <Typography variant="h4" color="text.primary">
                  {text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextGrid
