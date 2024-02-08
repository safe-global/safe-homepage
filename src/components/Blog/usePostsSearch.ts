import { useMemo } from 'react'
import Fuse from 'fuse.js'

const usePostsSearch = (posts: any[], query: string) => {
  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: [
          {
            name: 'fields.title',
            weight: 0.99,
          },
          {
            name: 'fields.excerpt',
            weight: 0.5,
          },
          {
            name: 'fields.category',
            weight: 0.5,
          },
        ],
        threshold: 0.3,
        findAllMatches: true,
      }),
    [posts],
  )

  return useMemo(() => {
    if (!query) {
      return posts
    }

    return fuse.search(query).map((result) => result.item)
  }, [fuse, posts, query])
}

export default usePostsSearch
