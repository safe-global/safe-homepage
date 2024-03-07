import { Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'
import LinkCard from '@/components/Pressroom/LinkCard'

export const News = ({ news }: { news: Entry<TypeExternalUrlSkeleton, undefined, string>[] }) => {
  return (
    <>
      <Typography variant="h2" textAlign="center" mt={{ xs: '80px', md: '200px' }}>
        <em>Safe</em> in the news
      </Typography>
      <Grid container columnSpacing={2} rowGap="30px" mt="80px">
        {news.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <LinkCard key={index} cta="Read more" {...item.fields} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default News
