import BlogLayout from '@/components/Blog/Layout'
import { Container, Grid, Typography } from '@mui/material'
import Card from '@/components/Blog/Card'
import FeaturedPost from '@/components/Blog/FeaturedPost'

const BlogHome = (props: any) => {
  console.log('BlogHome props', props)
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
