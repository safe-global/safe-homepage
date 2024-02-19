import { extractYouTubeVideoId } from '@/lib/urlPatterns'
import css from './styles.module.css'

const YouTube = ({ url }: { url: string }) => {
  const videoId = extractYouTubeVideoId(url)

  if (!videoId) return null

  return (
    <div className={css.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        title="Embedded YouTube"
      />
    </div>
  )
}

export default YouTube
