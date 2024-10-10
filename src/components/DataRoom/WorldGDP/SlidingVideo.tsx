import MotionTypography from '@/components/common/MotionTypography'
import css from './styles.module.css'

const SlidingVideo = () => (
  <MotionTypography animateYFrom={-30} customDelay={0.2}>
    <video className={css.video} src="/videos/DataRoom/SafeGlobe.mp4" autoPlay playsInline muted loop />
  </MotionTypography>
)

export default SlidingVideo
