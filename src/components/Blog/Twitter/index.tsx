import { extractLastPathname } from '@/lib/urlPatterns'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import css from './styles.module.css'

const Twitter = ({ url }: { url: string }) => {
  const tweetId = extractLastPathname(url)

  return (
    <div className={css.tweetContainer}>
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  )
}

export default Twitter
