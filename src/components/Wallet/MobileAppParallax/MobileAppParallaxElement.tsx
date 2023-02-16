import PhoneImage from '@/public/images/Wallet/Parallaxes/Mobile/phone.svg'
import FrameImage from '@/public/images/Wallet/Parallaxes/Mobile/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const MobileAppParallaxElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <PhoneImage className={css.phone} />
      </ParallaxWrapper>
    </div>
  )
}

export default MobileAppParallaxElement
