import PhoneImage from '@/public/images/Wallet/Parallaxes/Mobile/phone.png'
import FrameImage from '@/public/images/Wallet/Parallaxes/Mobile/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'
import Image from 'next/image'

const MobileAppParallaxElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image className={css.phone} src={PhoneImage} alt="A phone showing the mobile app" />
      </ParallaxWrapper>
    </div>
  )
}

export default MobileAppParallaxElement
