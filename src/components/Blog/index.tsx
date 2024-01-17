import BlogLayout from '@/components/Blog/Layout'
import { Container, Grid, Typography } from '@mui/material'
import Card from '@/components/Blog/Card'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import { type BlogPostEntry } from '@/components/Blog/Post'

type BlogHomeProps = {
  featured: BlogPostEntry
  mostPopular: BlogPostEntry[]
  allPosts: BlogPostEntry[]
}

const BlogHome = (props: BlogHomeProps) => {
  const { featured, mostPopular, allPosts } = props

  return (
    <BlogLayout>
      <Container>
        <Typography variant="h1" mt="100px" mb="108px">
          Blog
        </Typography>

        <FeaturedPost {...featured} />

        <Typography variant="h3" mt={15} mb={4}>
          Most Popular
        </Typography>
        <Grid container spacing={2}>
          {mostPopular.slice(0, 3).map((post: any) => (
            <Grid key={post.fields.slug} item xs={12} md={4}>
              <Card {...post} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" mt={15} mb={4}>
          All Posts
        </Typography>
        <Grid container spacing={2}>
          {allPosts.map((post: any) => (
            <Grid key={post.fields.slug} item xs={12} md={4}>
              <Card {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </BlogLayout>
  )
}

export default BlogHome
