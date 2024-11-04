import ParallaxUseCasesElement from '@/components/Token/ParallaxToken/ParallaxUseCasesElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/commonCMS/ParallaxText'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'

const ParallaxToken = (props: ParallaxTextProps) => {
  const itemsList = props.fields.items?.filter(isEntryTypeBaseBlock) || []

  return (
    <ParallaxText {...props} variant="image-text">
      <ParallaxUseCasesElement items={itemsList} />
    </ParallaxText>
  )
}

export default ParallaxToken
