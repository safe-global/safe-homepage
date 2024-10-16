import { containsTag, PRESS_RELEASE_TAG } from '@/lib/containsTag'
import { isDraft } from '@/lib/contentful/isDraft'
import type { BlogPostEntry } from '@/config/types'

export const isPressReleasePost = (post: BlogPostEntry) => containsTag(post.fields.tags, PRESS_RELEASE_TAG)

export const isPublishedPressRelease = (post: BlogPostEntry) => isPressReleasePost(post) && !isDraft(post)
