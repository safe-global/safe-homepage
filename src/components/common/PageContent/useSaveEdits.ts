import { useCallback } from 'react'

const GITHUB_URL = 'https://github.com/safe-global/safe-homepage/edit/main/src/content/'

const useSaveEdits = (content: Object, path: string) => {
  return useCallback(() => {
    const data = JSON.stringify(content, null, 2)
    navigator.clipboard.writeText(data)

    setTimeout(() => {
      window.open(`${GITHUB_URL}${path}`, '_blank')
    }, 600)
  }, [content, path])
}

export default useSaveEdits
