import Logos1Image from '@/public/images/Wallet/Parallaxes/AppStore/logos1.svg'
import Logos2Image from '@/public/images/Wallet/Parallaxes/AppStore/logos2.svg'
import FrameImage from '@/public/images/Wallet/Parallaxes/AppStore/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const OwnershipParallaxElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={4} direction={-1}>
        <Logos1Image className={css.logos1} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Logos2Image className={css.logos2} />
      </ParallaxWrapper>
    </div>
  )
}

export default OwnershipParallaxElement
