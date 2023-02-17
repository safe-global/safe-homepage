import Image from 'next/image'
import FrameImage from '@/public/images/Wallet/Parallaxes/Batching/background.svg'
import PlaceholderImage from '@/public/images/Wallet/Parallaxes/Batching/placeholder.png'
import TransactionImage from '@/public/images/Wallet/Parallaxes/Batching/transaction.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxBatchingElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <Image src={PlaceholderImage} alt="Placeholder to drag a transaction" className={css.placeholder} />
      <ParallaxWrapper translateX={0} translateY={-220} depth={1} direction={-1}>
        <Image src={TransactionImage} alt="dragged transaction" className={css.transaction} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxBatchingElement
