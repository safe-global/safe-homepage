import EcosystemElement from '@/components/Home/TextBlockImageEcosystem/EcosystemElement'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'

const TextBlockImageEcosystem = (props: TextBlockImageProps) => {
  return (
    <TextBlockImage {...props}>
      <EcosystemElement image={props.image} />
    </TextBlockImage>
  )
}

export default TextBlockImageEcosystem
