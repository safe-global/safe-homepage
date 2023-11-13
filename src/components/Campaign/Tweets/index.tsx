import { Container, Typography } from '@mui/material'
import React from 'react'
import css from './styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTweetsSkeleton } from '@/contentful/types'
import layoutCss from '@/components/common/styles.module.css'
import { createImageData } from '@/lib/createImageData'

type TweetsEntry = Entry<TypeTweetsSkeleton, undefined, string>

const Tweets = (props: TweetsEntry) => {
  const { title, cta, tweets } = props.fields

  const tweetsData = createImageData(tweets)

  return (
    <>
      <Container className={layoutCss.container}>
        <div className={css.titleWrapper}>
          <div className={css.spot} />
          <Typography variant="h4" className={css.cta}>
            {cta}
          </Typography>
          <Typography variant="h2">{title}</Typography>
        </div>
      </Container>

      <div className={css.tweetsGrid}>
        {tweetsData?.map((tweet) => (
          <img src={tweet.src} alt={tweet.alt} key={tweet.alt} />
        ))}
      </div>
    </>
  )
}

export default Tweets
