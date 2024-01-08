import { Container } from '@mui/material'
import Link from 'next/link'

const BlogHome = ({ posts }: any) => {
  // console.log('BlogHome props', posts)

  return (
    <Container>
      <h1>Blog Home</h1>

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
  )
}

export default BlogHome
