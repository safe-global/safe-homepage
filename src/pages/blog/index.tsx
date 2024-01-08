import client from '@/lib/contentfulLocal'
import BlogHome from '@/components/Blog'

const Blog = ({ posts }: any) => {
  // console.log('Blog props', posts)

  return <BlogHome posts={posts} />
}

export const getStaticProps = async () => {
  const content = await client.getEntries({
    content_type: 'post',
    include: 3,
  })

  return {
    props: {
      posts: content.items,
    },
  }
}

export default Blog
