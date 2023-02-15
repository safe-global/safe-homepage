import Address1Image from '@/public/images/Wallet/Parallaxes/Ownership/address1.svg'
import Address2Image from '@/public/images/Wallet/Parallaxes/Ownership/address2.svg'
import FrameImage from '@/public/images/Wallet/Parallaxes/Ownership/frame.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const OwnershipParallaxElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={-220} depth={2} direction={-1}>
        <Address1Image className={css.address1} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={-120} depth={0} direction={-1}>
        <Address2Image className={css.address2} />
      </ParallaxWrapper>
    </div>
  )
}

export default OwnershipParallaxElement
