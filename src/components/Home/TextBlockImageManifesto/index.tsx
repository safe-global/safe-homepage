import ManifestoElement from '@/components/Home/TextBlockImageManifesto/ManifestoElement'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'
import { Box } from '@mui/material'

const TextBlockImageManifesto = (props: TextBlockImageProps) => {
  return (
    <Box mt={{ xs: '-30px', md: 'auto' }}>
      <TextBlockImage {...props}>
        <ManifestoElement />
      </TextBlockImage>
    </Box>
  )
}

export default TextBlockImageManifesto
