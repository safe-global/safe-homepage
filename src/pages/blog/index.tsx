import client from '@/lib/contentful'
import BlogHome from '@/components/Blog'
import jsonStringifySafe from 'json-stringify-safe'

const Blog = ({ featuredPost, mostPopular, posts }: any) => {
  return <BlogHome featured={featuredPost} mostPopular={mostPopular} allPosts={posts} />
}

export const getStaticProps = async () => {
  const postsEntries = await client.getEntries({
    content_type: 'post',
    include: 3,
  })

  const blogHomeEntries = await client.getEntries({
    content_type: 'blogHome',
    include: 3,
    limit: 6,
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
  const posts = JSON.parse(jsonStringifySafe(postsEntries.items))

  return {
    props: {
      featuredPost,
      mostPopular,
      posts,
    },
  }
}

export default Blog
