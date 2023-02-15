import TxImage from '@/public/images/Wallet/Parallaxes/Batching/moving-tx.svg'
import FrameImage from '@/public/images/Wallet/Parallaxes/Batching/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxBatchingElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <TxImage className={css.transaction} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxBatchingElement
