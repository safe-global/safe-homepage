import { Box } from '@mui/material'
import TextBlockImage, { type TextBlockImageProps } from '@/components/common/TextBlockImage'
import css from './styles.module.css'

const TextBlockImageYourStation = (props: TextBlockImageProps) => {
  const { image } = props

  return (
    <Box mt={{ md: '-30px' }}>
      <TextBlockImage {...props}>
        {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
      </TextBlockImage>
    </Box>
  )
}

export default TextBlockImageYourStation
