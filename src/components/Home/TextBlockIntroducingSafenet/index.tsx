import { Box } from '@mui/material'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'

const TextBlockIntroducingSafenet = (props: TextBlockImageProps) => (
  <Box mt={{ xs: '-30px', md: 'auto' }}>
    <TextBlockImage {...props}>
      <video autoPlay muted playsInline loop width="100%" poster="/images/Safenet/globe-poster.png">
        <source src="/videos/Safenet/Globe.webm" type="video/webm" />
        <img src="/images/Safenet/globe-poster.png" alt="Safenet globe" />
      </video>
    </TextBlockImage>
  </Box>
)

export default TextBlockIntroducingSafenet
