import { Container, Typography } from '@mui/material'
import React from 'react'
import css from './styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTitleTweetsSkeleton } from '@/contentful/types'
import layoutCss from '@/components/common/styles.module.css'

type TitleTweetsEntry = Entry<TypeTitleTweetsSkeleton, undefined, string>

const TitleTweets = (props: TitleTweetsEntry) => {
  const { title, cta, tweets } = props.fields

  const tweetsData = Array.isArray(tweets)
    ? tweets.map((tweet: any) => ({
        src: tweet.fields.file.url,
        alt: tweet.fields.file.description,
      }))
    : undefined

  return (
    <>
      <Container className={layoutCss.containerMedium}>
        <Typography className={css.cta}>{cta}</Typography>
        <Typography variant="h1" textAlign="center" mb="60px">
          {title}
        </Typography>
      </Container>

      <div className={css.tweetsGrid}>
        {tweetsData?.map((tweet) => (
          <img src={tweet.src} alt={tweet.alt} key={tweet.alt} />
        ))}
      </div>
    </>
  )
}

export default TitleTweets
