import ParallaxUseCasesElement from '@/components/Token/ParallaxToken/ParallaxUseCasesElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/Token/ParallaxText'

const ParallaxToken = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props} variant="image-text">
      <ParallaxUseCasesElement />
    </ParallaxText>
  )
}

export default ParallaxToken
