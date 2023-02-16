import Image from 'next/image'
import Logos1Image from '@/public/images/Wallet/Parallaxes/AppStore/logos1.png'
import Logos2Image from '@/public/images/Wallet/Parallaxes/AppStore/logos2.png'
import FrameImage from '@/public/images/Wallet/Parallaxes/AppStore/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxAppStoreElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <Image src={Logos1Image} alt="Safe apps logos" className={css.logos1} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={Logos2Image} alt="Safe apps logos" className={css.logos2} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxAppStoreElement
