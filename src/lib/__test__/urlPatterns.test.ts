import {
  extractLastPathname,
  extractURLSearchParams,
  extractYouTubeVideoId,
  getYoutubeVideoSrc,
  isTwitterUrl,
  isYouTubeUrl,
} from '@/lib/urlPatterns'

describe('urlPatterns', () => {
  describe('isYouTubeUrl', () => {
    it('should return true for valid YouTube URLs', () => {
      expect(isYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true)
      expect(isYouTubeUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true)
    })

    it('should return true for valid videos from YouTube playlists', () => {
      expect(isYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PL0knnt70iEZpZ_40NHziZ4u7u9f_OW9p6')).toBe(
        true,
      )
      expect(
        isYouTubeUrl('https://www.youtube.com/watch?v=VbYPL4SVXZw&list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd&index=1'),
      ).toBe(true)
    })

    it('should return true for valid YouTube playlist URLs', () => {
      expect(isYouTubeUrl('https://www.youtube.com/playlist?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd')).toBe(true)
    })

    it('should return false for invalid YouTube URLs', () => {
      expect(isYouTubeUrl('https://www.google.com')).toBe(false)
      expect(isYouTubeUrl('https://twitter.com')).toBe(false)
    })
  })

  describe('extractYouTubeVideoId', () => {
    it('should extract video id from YouTube URLs', () => {
      expect(extractYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ')
      expect(extractYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ')
    })

    it('should return null for non-YouTube URLs', () => {
      expect(extractYouTubeVideoId('https://www.google.com')).toBe(null)
      expect(extractYouTubeVideoId('https://twitter.com')).toBe(null)
    })
  })

  describe('extractURLSearchParams', () => {
    it('should extract search parameters from URL', () => {
      const url = 'https://www.youtube.com/playlist?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd&index=3'
      const params = extractURLSearchParams(url)
      expect(params.list).toBe('PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd')
      expect(params.index).toBe('3')
    })

    it('should return null for parameters not present in URL', () => {
      const url = 'https://www.youtube.com/playlist?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd'
      const params = extractURLSearchParams(url)
      expect(params.list).toBe('PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd')
      expect(params.index).toBe(undefined)
    })
  })

  describe('getYoutubeVideoSrc', () => {
    test('should return correct video src for a video URL', () => {
      const url = 'https://www.youtube.com/watch?v=Xe5FcBK9vFw'
      const src = getYoutubeVideoSrc(url)
      expect(src).toBe('https://www.youtube-nocookie.com/embed/Xe5FcBK9vFw')
    })

    test('should return correct video src for a playlist URL with index', () => {
      const url = 'https://www.youtube.com/playlist?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd&index=0'
      const src = getYoutubeVideoSrc(url)
      expect(src).toBe(
        'https://www.youtube-nocookie.com/embed/videoseries?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd&index=0',
      )
    })

    test('should return correct video src for a playlist URL without index', () => {
      const url = 'https://www.youtube.com/playlist?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd'
      const src = getYoutubeVideoSrc(url)
      expect(src).toBe(
        'https://www.youtube-nocookie.com/embed/videoseries?list=PL0knnt70iEZry_pACXB4sKGSuZz5XNoOd&index=1',
      )
    })
  })

  describe('isTwitterUrl', () => {
    it('should return true for valid Twitter URLs', () => {
      expect(isTwitterUrl('https://twitter.com/safe/status/1754882331871944935')).toBe(true)
      expect(isTwitterUrl('https://x.com/safe/status/1754882331871944935?s=20')).toBe(true)
    })

    it('should return false for invalid Twitter URLs', () => {
      expect(isTwitterUrl('https://www.google.com')).toBe(false)
      expect(isTwitterUrl('https://www.youtube.com')).toBe(false)
    })
  })

  describe('extractLastPathname', () => {
    it('should extract last pathname component from URL', () => {
      expect(extractLastPathname('https://example.com/foo/bar')).toBe('bar')
      expect(extractLastPathname('https://example.com/foo/bar/')).toBe('bar')
      expect(extractLastPathname('https://example.com/')).toBe('')
    })
  })
})
