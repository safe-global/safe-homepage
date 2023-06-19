import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { type EcosystemProjectWithCategories } from '@/hooks/useEcosystemData'

const useProjectSearch = (
  projects: EcosystemProjectWithCategories[],
  query: string,
): EcosystemProjectWithCategories[] => {
  const fuse = useMemo(
    () =>
      new Fuse(projects, {
        keys: [
          {
            name: 'project',
            weight: 0.99,
          },
          {
            name: 'description',
            weight: 0.5,
          },
          {
            name: 'categories_list',
            weight: 0.5,
          },
        ],
        // https://fusejs.io/api/options.html#threshold
        // Very naive explanation: threshold represents how accurate the search results should be. The default is 0.6
        // I tested it and found it to make the search results more accurate when the threshold is 0.3
        // 0 - 1, where 0 is the exact match and 1 matches anything
        threshold: 0.3,
        findAllMatches: true,
      }),
    [projects],
  )

  return useMemo(() => {
    if (!query) {
      return projects
    }

    return fuse.search(query).map((result) => result.item)
  }, [fuse, projects, query])
}

export { useProjectSearch }
