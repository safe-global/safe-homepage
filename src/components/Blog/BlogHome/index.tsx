import BlogLayout from '@/components/Blog/Layout'
import { Container, Grid, Typography } from '@mui/material'
import Card from '@/components/Blog/Card'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import SearchFilterResults from '@/components/Blog/SearchFilterResults'
import type { TypeBlogHomeSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import { isEntryTypePost } from '@/lib/typeGuards'
import { useLandingPageContent } from '@/hooks/useLandingPageContent'
import type { PostEntryCollection } from '@/config/types'

const categories = ['Announcements', 'Ecosystem', 'Community', 'Insights', 'Build']

const TRENDING_POSTS_COUNT = 3

export type BlogHomeEntry = Entry<TypeBlogHomeSkeleton, undefined, string>

export type BlogHomeProps = {
  blogHome: BlogHomeEntry
  allPosts: PostEntryCollection
}

const BlogHome = ({ blogHome, allPosts }: BlogHomeProps) => {
  const { data: localBlogHome } = useLandingPageContent<TypeBlogHomeSkeleton, BlogHomeEntry>(blogHome.sys.id, blogHome)

  const { featured, metaTags, mostPopular } = localBlogHome.fields

  return (
    <BlogLayout metaTags={metaTags}>
      <Container>
        {/* Hero */}
        <Grid container mt="60px" rowGap={3}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1">Blog</Typography>
          </Grid>
          <Grid item xs={12} md={5} mt="auto">
            <Typography textAlign={{ md: 'end' }}>
              Read the latest from <i>Safe</i> including new releases, use cases and community updates
            </Typography>
          </Grid>
        </Grid>

        {isEntryTypePost(featured) && <FeaturedPost {...featured} />}

        <Typography variant="h2" mt={{ xs: '60px', md: '100px' }}>
          Trending
        </Typography>
        <Grid container columnSpacing={2} rowGap="30px" mt="80px">
          {mostPopular
            .filter(isEntryTypePost)
            .slice(0, TRENDING_POSTS_COUNT)
            .map((post) => (
              <Grid key={post.fields.slug} item xs={12} md={4}>
                <Card {...post} />
              </Grid>
            ))}
        </Grid>

        {/* All posts */}
        <SearchFilterResults allPosts={allPosts} categories={categories} />
      </Container>
    </BlogLayout>
  )
}

export default BlogHome
