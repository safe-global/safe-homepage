import ParallaxText, { type ParallaxTextProps } from '@/components/Wallet/ParallaxText'
import OwnershipParallaxElement from '@/components/Wallet/OwnershipParallax/OwnershipParallaxElement'

const OwnershipParallax = (props: ParallaxTextProps) => (
  <ParallaxText {...props}>
    <OwnershipParallaxElement />
  </ParallaxText>
)

export default OwnershipParallax
