import Image from 'next/image'
import Address1Image from '@/public/images/Wallet/Parallaxes/Ownership/address1.png'
import Address2Image from '@/public/images/Wallet/Parallaxes/Ownership/address2.png'
import FrameImage from '@/public/images/Wallet/Parallaxes/Ownership/frame.svg'
import ThresholdImage from '@/public/images/Wallet/Parallaxes/Ownership/threshold-text.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const OwnershipParallaxElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <Image src={ThresholdImage} alt="Any transaction requires 2 out of 3 owners" className={css.threshold} />
      <ParallaxWrapper translateX={0} translateY={-220} depth={2} direction={-1}>
        <Image src={Address1Image} alt="mainnet address 1" className={css.address1} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={-120} depth={0} direction={-1}>
        <Image src={Address2Image} alt="mainnet address 2" className={css.address2} />
      </ParallaxWrapper>
    </div>
  )
}

export default OwnershipParallaxElement
