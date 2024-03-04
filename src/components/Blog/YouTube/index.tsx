import { getYoutubeVideoSrc } from '@/lib/urlPatterns'
import css from './styles.module.css'

const YouTube = ({ url }: { url: string }) => {
  const videoSrc = getYoutubeVideoSrc(url)

  if (!videoSrc) return null

  return (
    <div className={css.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        title="Embedded YouTube"
      />
    </div>
  )
}

export default YouTube
