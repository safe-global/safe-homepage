import MultiFactorElement from '@/components/Core/TextBlockImageMultiFactor/MultiFactorElement'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'

const TextBlockImageEcosystem = (props: TextBlockImageProps) => {
  return (
    <TextBlockImage {...props}>
      <MultiFactorElement image={props.image} />
    </TextBlockImage>
  )
}

export default TextBlockImageEcosystem
