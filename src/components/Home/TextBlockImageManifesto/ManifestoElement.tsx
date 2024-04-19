import css from './styles.module.css'

const ManifestoElement = () => {
  return (
    <div className={css.imageWrapper}>
      <img src="/images/Home/manifesto-bg.png" alt="Particles background" className={css.bgImage} />
      <video autoPlay muted playsInline loop className={css.video}>
        <source src="/videos/Home/ownership-hevc.mov" type="video/quicktime; codecs=hvc1" />
        <source src="/videos/Home/ownership-vp9.webm" type="video/webm" />
      </video>
    </div>
  )
}

export default ManifestoElement
