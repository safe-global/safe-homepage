import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { previewClient } from '@/lib/contentful'
import { type TypePostSkeleton } from '@/contentful/types'
import BlogPost, { type BlogPostEntry } from '@/components/Blog/Post'
import { type NextPage } from 'next'

const fetchDraftContent = async (slug: string) => {
  const content = await previewClient.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug': slug,
  })

  return content.items[0]
}

const Preview: NextPage = () => {
  const router = useRouter()
  const { slug, secret } = router.query as { slug: string; secret: string }
  const [blogPost, setBlogPost] = useState<BlogPostEntry | null>(null)

  useEffect(() => {
    if (slug) {
      fetchDraftContent(slug).then((content) => {
        setBlogPost(content)
      })
    }
  }, [secret, slug])

  return blogPost ? <BlogPost blogPost={blogPost} isPreview={!!blogPost} /> : <div>Loading...</div>
}

export default Preview