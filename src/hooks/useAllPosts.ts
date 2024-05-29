import { type TypePostSkeleton } from '@/contentful/types'
import client from '@/lib/contentful'
import { type EntryCollection } from 'contentful'
import { useEffect, useState } from 'react'

// FIXME: This hook should make use of useSWR instead of useState but encountered issues with comparing the fallback data and fetched data
export const useAllPosts = (fallbackData: EntryCollection<TypePostSkeleton, undefined, string>) => {
  const [localAllPosts, setLocalAllPosts] = useState<EntryCollection<TypePostSkeleton, undefined, string>>(fallbackData)

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
