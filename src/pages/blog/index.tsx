import client from '@/lib/contentfulLocal'
import BlogHome from '@/components/Blog'

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

  const posts = postsEntries.items

  const blogHome = blogHomeEntries.items[0]

  if (!blogHome || !posts) {
    return {
      notFound: true,
    }
  }

  delete blogHome.fields.featured?.fields.relatedPosts
  blogHome.fields.mostPopular?.forEach((item: any) => delete item.fields.relatedPosts)
  posts.forEach((item: any) => delete item.fields.relatedPosts)

  return {
    props: {
      featuredPost: blogHome.fields.featured,
      mostPopular: blogHome.fields.mostPopular,
      posts: posts,
    },
  }
}

export default Blog
