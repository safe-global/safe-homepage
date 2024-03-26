import { Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'
import LinkCard from '@/components/common/LinkCard'
import { extractContentfulImageProps } from '@/lib/contentful/extractContentfulImageProps'
import { PressroomAnchors } from '@/components/Pressroom/ContentsNavigation'

type NewsProps = { news: Entry<TypeExternalUrlSkeleton, undefined, string>[] }

export const News = ({ news }: NewsProps) => (
  <div id={PressroomAnchors.SAFE_IN_THE_NEWS.slice(1)}>
    <Typography variant="h2" textAlign="center" mt={{ xs: '80px', md: '200px' }}>
      <em>Safe</em> in the news
    </Typography>
    <Grid container columnSpacing={2} rowGap="30px" mt="80px">
      {news.map((item, index) => {
        const imageProps = extractContentfulImageProps(item.fields.image)

        return (
          <Grid key={index} item xs={12} md={4}>
            <LinkCard
              title={item.fields.title || ''}
              image={imageProps}
              link={{ href: item.fields.url, title: 'Read more' }}
            />
          </Grid>
        )
      })}
    </Grid>
  </div>
)

export default News
