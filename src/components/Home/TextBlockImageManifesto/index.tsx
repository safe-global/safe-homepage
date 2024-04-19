import ManifestoElement from '@/components/Home/TextBlockImageManifesto/ManifestoElement'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'

const TextBlockImageManifesto = (props: TextBlockImageProps) => {
  return (
    <TextBlockImage {...props}>
      <ManifestoElement />
    </TextBlockImage>
  )
}

export default TextBlockImageManifesto
