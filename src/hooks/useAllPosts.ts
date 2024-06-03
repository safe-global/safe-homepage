import type { PostEntryCollection } from '@/config/types'
import { type TypePostSkeleton } from '@/contentful/types'
import client from '@/lib/contentful'
import { useEffect, useState } from 'react'

// FIXME: This hook should make use of useSWR instead of useState but encountered issues with comparing the fallback data and fetched data
export const useAllPosts = (fallbackData: PostEntryCollection) => {
  const [localAllPosts, setLocalAllPosts] = useState<PostEntryCollection>(fallbackData)

  useEffect(() => {
    client
      .getEntries<TypePostSkeleton>({
        content_type: 'post',
        order: ['-fields.date'],
      })
      .then((entry) => {
        setLocalAllPosts(entry)
      })
  }, [])

  return { localAllPosts }
}
