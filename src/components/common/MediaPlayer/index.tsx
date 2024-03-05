import { getYoutubeVideoSrc, isYouTubeUrl } from '@/lib/urlPatterns'
import css from './styles.module.css'

const MediaPlayer = ({ url }: { url: string }) => {
  const videoSrc = isYouTubeUrl(url) ? getYoutubeVideoSrc(url) : url

  return (
    <div className={css.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        title="Embedded Video"
      />
    </div>
  )
}

export default MediaPlayer
