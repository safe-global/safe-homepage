import ParallaxAppStoreElement from '@/components/Wallet/ParallaxAppStore/ParallaxAppStoreElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxTextOld'

const ParallaxAppStore = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxAppStoreElement />
    </ParallaxText>
  )
}

export default ParallaxAppStore
