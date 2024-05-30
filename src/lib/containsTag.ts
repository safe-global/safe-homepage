import { type BlogPostEntry } from '@/components/Blog/Post'
import { type TagsType } from '@/components/Blog/Tags'
import { isEntryTypeTag } from '@/lib/typeGuards'

export const PRESS_RELEASE_TAG = 'Press'

export const containsTag = (tags: TagsType, targetTag: string) => {
  return !!tags?.filter(isEntryTypeTag)?.some((item) => item.fields.name === targetTag)
}

export const isPressReleasePost = (post: BlogPostEntry) => containsTag(post.fields.tags, PRESS_RELEASE_TAG)
