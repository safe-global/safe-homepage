import { extractLastPathname, extractVideoId, isTwitterUrl, isYouTubeUrl } from '@/lib/urlPatterns'

describe('urlPatterns', () => {
  describe('isYouTubeUrl', () => {
    it('should return true for valid YouTube URLs', () => {
      expect(isYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true)
      expect(isYouTubeUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true)
    })

    it('should return false for invalid YouTube URLs', () => {
      expect(isYouTubeUrl('https://www.google.com')).toBe(false)
      expect(isYouTubeUrl('https://twitter.com')).toBe(false)
    })
  })

  describe('extractVideoId', () => {
    it('should extract video id from YouTube URLs', () => {
      expect(extractVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ')
      expect(extractVideoId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ')
    })

    it('should return null for non-YouTube URLs', () => {
      expect(extractVideoId('https://www.google.com')).toBe(null)
      expect(extractVideoId('https://twitter.com')).toBe(null)
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
      expect(extractLastPathname('https://example.com/foo/bar/')).toBe('')
      expect(extractLastPathname('https://example.com/')).toBe('')
    })
  })
})
