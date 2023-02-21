import { Chip, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import css from './styles.module.css'

export type TextGridProps = {
  image?: {
    src: string
    alt: string
  }
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
      title: string
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
        <Grid container className={`${image ? css.wrapper : ''}`} justifyContent="space-between">
          <Grid
            item
            md={!image ? 8 : 6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={{ xs: 3, md: 4 }}
          >
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
            {text && <Typography>{text}</Typography>}
            <LinkButton href={link.href} sx={{ width: 'fit-content' }}>
              {link.text}
            </LinkButton>
          </Grid>
          {image ? (
            <Grid item md={6} mt="54px">
              <img src={image.src} alt={image.alt} />
            </Grid>
          ) : null}
        </Grid>
        <Grid container mt={{ xs: 5, md: 10 }}>
          <Typography variant="caption" component="div" mb={3}>
            {gridTitle}
          </Typography>
          <Grid container>
            {items.map(({ title, text }, index) => (
              <Grid key={index} item xs={12} md={12 / items.length} className={css.card}>
                <Typography variant="h4" color="text.primary" mb={1}>
                  {title}
                </Typography>
                <Typography color="primary.light">{text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextGrid
