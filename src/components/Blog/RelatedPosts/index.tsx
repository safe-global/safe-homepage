import Card from '@/components/Blog/Card'
import { type TypePostSkeleton } from '@/contentful/types'
import { Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'

const RelatedPosts = ({ relatedPosts }: { relatedPosts: Entry<TypePostSkeleton, undefined, string>[] | undefined }) => {
  if (!relatedPosts || !relatedPosts.length) return null

  return (
    <>
      <Typography variant="h3" mt="60px" mb={{ xs: 4, md: 5 }}>
        Read more
      </Typography>
      <Grid container spacing={2}>
        {relatedPosts.slice(0, 3).map((post) => (
          <Grid key={post.fields.slug} item xs={12} md={4}>
            <Card {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default RelatedPosts
