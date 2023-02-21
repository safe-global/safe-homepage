import { useState } from 'react'
import { Container, Typography } from '@mui/material'
import { TwitterTweetEmbed } from 'react-twitter-embed'
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

const Tweets = ({ caption, title, items }: TweetsSectionProps) => {
  const [failedToLoad, setFailedToLoad] = useState<number[]>([])

  return (
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
          {items.map(({ src, alt, href, id }, index) => {
            if (failedToLoad.includes(index)) {
              return (
                <a key={id} href={href}>
                  <img src={src} alt={alt} />
                </a>
              )
            }

            return (
              <TwitterTweetEmbed
                key={id}
                tweetId={id}
                options={{ conversation: 'none' }}
                onLoad={(element) => {
                  // if the element is undefined, it means that the tweet failed to load
                  if (element === undefined) {
                    setFailedToLoad((prev) => [...prev, index])
                  }
                }}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Tweets
