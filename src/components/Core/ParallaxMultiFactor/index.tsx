import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'
import ParallaxMultiFactorElement from '@/components/Core/ParallaxMultiFactor/ParallaxMultiFactorElement'

const ParallaxMultiFactor = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxMultiFactorElement />
    </ParallaxText>
  )
}

export default ParallaxMultiFactor
