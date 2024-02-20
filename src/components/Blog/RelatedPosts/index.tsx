import Card from '@/components/Blog/Card'
import { type TypePostSkeleton } from '@/contentful/types'
import { Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'

const RELATED_POSTS_COUNT = 3

const RelatedPosts = ({ relatedPosts }: { relatedPosts: Entry<TypePostSkeleton, undefined, string>[] | undefined }) => {
  if (!relatedPosts || !relatedPosts.length) return null

  return (
    <>
      <Typography variant="h3" mt="60px">
        Read more
      </Typography>
      <Grid container columnSpacing={2} rowGap={2} mt={{ xs: '30px', md: 5 }}>
        {relatedPosts.slice(0, RELATED_POSTS_COUNT).map((post) => (
          <Grid key={post.fields.slug} item xs={12} md={4}>
            <Card {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default RelatedPosts
