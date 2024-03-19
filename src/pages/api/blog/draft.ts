import { type TypePostSkeleton } from '@/contentful/types'
import { previewClient } from '@/lib/contentful'

export default async function handler(req: any, res: any) {
  console.log('#1 - Blog post draft handler', req.query)
  const { slug } = req.query

  if (req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const blogPostEntries = await previewClient.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug': slug,
    include: 3,
  })

  const blogPost = blogPostEntries.items[0]

  if (!blogPost) {
    return res.status(401).json({ message: 'Invalid request' })
  }

  res.setDraftMode({ enable: true })
  res.redirect(`/blog/${blogPost.fields.slug}`)
}
