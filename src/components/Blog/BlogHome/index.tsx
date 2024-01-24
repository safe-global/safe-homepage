import BlogLayout, { type MetaTagsEntry } from '@/components/Blog/Layout'
import { Container, Grid, Typography } from '@mui/material'
import Card from '@/components/Blog/Card'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import { type BlogPostEntry } from '@/components/Blog/Post'
import SearchFilterResults from '@/components/Blog/SearchFilterResults'

const categories = ['Announcements', 'Ecosystem', 'Community', 'Insights', 'Build']

export type BlogHomeProps = {
  metaTags: MetaTagsEntry
  featuredPost: BlogPostEntry
  mostPopular: BlogPostEntry[]
  allPosts: BlogPostEntry[]
}

const BlogHome = (props: BlogHomeProps) => {
  const { featuredPost, mostPopular, allPosts, metaTags } = props

  return (
    <BlogLayout metaTags={metaTags}>
      <Container>
        <Grid container mt="60px" rowGap={3}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1">Blog</Typography>
          </Grid>
          <Grid item xs={12} md={5} mt="auto">
            <Typography textAlign={{ md: 'end' }}>
              Read the latest from Safe including new releases, use cases and community updates
            </Typography>
          </Grid>
        </Grid>

        <FeaturedPost {...featuredPost} />

        <Typography variant="h2" mt={{ xs: '60px', md: '100px' }} mb={4}>
          Trending
        </Typography>
        <Grid container spacing={{ xs: '30px', md: 2 }}>
          {mostPopular.slice(0, 3).map((post, index) => (
            // TODO: remove index from key when we have enough posts
            <Grid key={`${post.fields.slug}-${index}`} item xs={12} md={4}>
              <Card {...post} />
            </Grid>
          ))}
        </Grid>

        <SearchFilterResults allPosts={allPosts} categories={categories} />
      </Container>
    </BlogLayout>
  )
}

export default BlogHome
