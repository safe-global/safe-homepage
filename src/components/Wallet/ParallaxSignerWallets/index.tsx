import ParallaxSignerWalletsElement from '@/components/Wallet/ParallaxSignerWallets/ParallaxSignerWalletsElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxTextOld'

const ParallaxSignerWallets = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxSignerWalletsElement />
    </ParallaxText>
  )
}

export default ParallaxSignerWallets
