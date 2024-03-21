import BlogPost, { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'
import { client, previewClient } from '@/lib/contentful'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const fetchDraftContent = async (slug: string, isPreview: boolean) => {
  const cfClient = isPreview ? previewClient : client

  const content = await cfClient.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug': slug,
  })

  return content.items[0]
}

const Page = () => {
  const router = useRouter()
  const { slug, secret } = router.query as { slug: string; secret: string }
  const [blogPost, setBlogPost] = useState<BlogPostEntry | null>(null)

  const isPreview = Array.isArray(slug) && slug.includes('preview')
  const postSlug = Array.isArray(slug) ? slug[0] : slug

  useEffect(() => {
    if (postSlug) {
      fetchDraftContent(postSlug, isPreview).then((content) => {
        setBlogPost(content)
      })
    }
  }, [secret, postSlug, isPreview])

  return blogPost ? <BlogPost blogPost={blogPost} isPreview={isPreview} /> : <div>Loading...</div>
}

export default Page
