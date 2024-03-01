export function isYouTubeUrl(url: string) {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&list=\w+)?$/
  return youtubeRegex.test(url)
}

export function extractYouTubeVideoId(url: string) {
  // short form
  if (url.includes('youtu.be')) return url.split('/').pop()

  // long form
  const urlObj = new URL(url)
  const searchParams = new URLSearchParams(urlObj.search)
  return searchParams.get('v')
}

export function isTwitterUrl(url: string) {
  const tweeterRegex = /^(https?:\/\/)?(?:www\.)?(twitter\.com\/|x\.com\/)[a-zA-Z0-9_]+\/status\/\d+(\?s=\d+)?$/
  return tweeterRegex.test(url)
}

export function extractLastPathname(url: string) {
  const urlObj = new URL(url)
  const pathnameParts = urlObj.pathname.split('/').filter((part) => part !== '')
  return pathnameParts[pathnameParts.length - 1] || ''
}
