import ParallaxUseCasesElement from '@/components/Core/ParallaxCaseStudies/ParallaxUseCasesElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxTextOld'

const ParallaxCaseStudies = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props} variant="image-text">
      <ParallaxUseCasesElement items={props.items ?? []} />
    </ParallaxText>
  )
}

export default ParallaxCaseStudies
