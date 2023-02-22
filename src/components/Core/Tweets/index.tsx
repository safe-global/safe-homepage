import { Container, Link, Typography } from '@mui/material'
import css from './styles.module.css'

type TweetsSectionProps = {
  caption: string
  title: string
  items: TweetProps[]
}

type TweetProps = {
  id: string
  src: string
  alt: string
  href: string
}

const Tweets = ({ caption, title, items }: TweetsSectionProps) => (
  <>
    <Container>
      <Typography variant="caption" textAlign="center" component="div" mt="100px" mb={3}>
        {caption}
      </Typography>
      <Typography variant="h2" textAlign="center" maxWidth="670px" marginX="auto" mb="100px">
        {title}
      </Typography>
    </Container>

    <div className={css.gradient}>
      <div className={css.tweetsGrid}>
        {items.map(({ src, alt, href }, index) => (
          <Link key={index} href={href} target="_blank" rel="noopener">
            <img src={src} alt={alt} loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  </>
)

export default Tweets
