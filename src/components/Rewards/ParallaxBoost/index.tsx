import ParallaxBoostElement from '@/components/Rewards/ParallaxBoost/ParallaxBoostElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'

const ParallaxBoost = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props} variant="image-text">
      <ParallaxBoostElement {...props} />
    </ParallaxText>
  )
}

export default ParallaxBoost
