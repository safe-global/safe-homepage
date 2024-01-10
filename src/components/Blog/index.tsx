import BlogLayout from '@/components/Blog/Layout'
import { Container, Typography } from '@mui/material'
import Link from 'next/link'

const BlogHome = ({ posts }: any) => {
  // console.log('BlogHome props', posts)

  return (
    <BlogLayout>
      <Container>
        <Typography variant="h1">Blog</Typography>

        <ul>
          {posts.map((post: any) => {
            const { title, slug } = post.fields

            return (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </BlogLayout>
  )
}

export default BlogHome
