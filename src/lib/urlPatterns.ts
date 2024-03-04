export function isYouTubeUrl(url: string) {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|playlist\?)|youtu\.be\/)([\w-]{11})?(&?list=[\w]{34})?/

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

export const extractURLSearchParams = (url: string) => Object.fromEntries(new URL(url).searchParams.entries())

export const getYoutubeVideoSrc = (url: string) => {
  const videoId = extractYouTubeVideoId(url)
  const { list, index } = extractURLSearchParams(url)

  const urlObj = new URL(`https://www.youtube-nocookie.com/embed/${videoId ? videoId : 'videoseries'}`)

  if (list) {
    urlObj.searchParams.set('list', list)
  }

  if (!videoId) {
    urlObj.searchParams.set('index', index ?? 1)
  }

  return urlObj.toString()
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
