import ParallaxEcosystemElement from '@/components/Rewards/ParallaxEcosystem/ParallaxEcosystemElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/commonCMS/ParallaxText'

const ParallaxEcosystem = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props} variant="image-text">
      <ParallaxEcosystemElement {...props} />
    </ParallaxText>
  )
}

export default ParallaxEcosystem
