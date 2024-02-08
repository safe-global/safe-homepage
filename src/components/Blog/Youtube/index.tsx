import css from './styles.module.css'

const Youtube = ({ embedId }: { embedId: string }) => (
  <div className={css.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

export default Youtube
