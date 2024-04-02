import BlogPost, { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'
import { client, previewClient } from '@/lib/contentful'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const fetchContent = async (slug: string, isPreview: boolean) => {
  const cfClient = isPreview ? previewClient : client

  const content = await cfClient.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug': slug,
  })

  return content.items[0]
}

const Page = () => {
  const router = useRouter()

  const { slug, secret } = router.query as { slug: any; secret: string }
  console.log('slug & secret', slug, secret)
  const [blogPost, setBlogPost] = useState<BlogPostEntry | null>(null)

  useEffect(() => {
    if (slug) {
      router.push(`/blog/${slug}`)

      fetchContent(slug, !!secret).then((content) => {
        setBlogPost(content)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secret, slug])

  return blogPost ? <BlogPost blogPost={blogPost} isPreview={!!secret} /> : <div>Loading...</div>
}

export default Page
