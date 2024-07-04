import YourStationElement from '@/components/GasStation/TextBlockImageYourStation/YourStationElement'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'
import { Box } from '@mui/material'

const TextBlockImageYourStation = (props: TextBlockImageProps) => {
  return (
    <Box mt={{ md: '-30px' }}>
      <TextBlockImage {...props}>
        <YourStationElement image={props.image} />
      </TextBlockImage>
    </Box>
  )
}

export default TextBlockImageYourStation
