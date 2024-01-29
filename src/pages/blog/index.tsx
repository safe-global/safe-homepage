import client from '@/lib/contentful'
import BlogHome, { type BlogHomeProps } from '@/components/Blog/BlogHome'
import jsonStringifySafe from 'json-stringify-safe'

const Blog = (props: BlogHomeProps) => {
  return <BlogHome {...props} />
}

export const getStaticProps = async () => {
  const postsEntries = await client.getEntries({
    content_type: 'post',
    include: 3,
  })

  const blogHomeEntries = await client.getEntries({
    content_type: 'blogHome',
    include: 3,
  })

  const blogHome = blogHomeEntries.items[0]

  if (!blogHome || !postsEntries) {
    return {
      notFound: true,
    }
  }

  // replaces circular dependencies allowing safe conversion to JSON
  const featuredPost = JSON.parse(jsonStringifySafe(blogHome.fields.featured))
  const mostPopular = JSON.parse(jsonStringifySafe(blogHome.fields.mostPopular))
  const allPosts = JSON.parse(jsonStringifySafe(postsEntries.items))

  return {
    props: {
      metaTags: blogHome.fields.metaTags,
      featuredPost,
      mostPopular,
      allPosts,
    },
  }
}

export default Blog
