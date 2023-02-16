import Image from 'next/image'
import FrameImage from '@/public/images/Wallet/Parallaxes/SignerWallets/background.svg'
import PhoneImage from '@/public/images/Wallet/Parallaxes/SignerWallets/phone.png'
import Wallets1Image from '@/public/images/Wallet/Parallaxes/SignerWallets/wallets1.png'
import Wallets2Image from '@/public/images/Wallet/Parallaxes/SignerWallets/wallets2.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxBatchingElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={Wallets2Image} alt="Wallets logos" className={css.wallets2} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={3} direction={-1}>
        <Image src={PhoneImage} alt="Assets view on Safe mobile" className={css.phone} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <Image src={Wallets1Image} alt="Wallets logos" className={css.wallets1} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxBatchingElement
