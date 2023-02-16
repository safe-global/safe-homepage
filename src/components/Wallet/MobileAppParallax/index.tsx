import ParallaxText, { type ParallaxTextProps } from '@/components/Wallet/ParallaxText'
import MobileAppParallaxElement from '@/components/Wallet/MobileAppParallax/MobileAppParallaxElement'

const MobileAppParallax = (props: ParallaxTextProps) => (
  <ParallaxText {...props}>
    <MobileAppParallaxElement />
  </ParallaxText>
)

export default MobileAppParallax
