import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { getImageSource, type ImageObj } from '@/lib/getImageSource'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const ImageTextTop = ({
  title,
  backgroundImage,
}: BaseBlock & {
  backgroundImage: ImageObj
}) => {
  const isMediumScreen = useIsMediumScreen()

  const bgImage = getImageSource(isMediumScreen, backgroundImage)

  return (
    <Container className={layoutCss.containerShort}>
      <div className={css.bg} style={{ backgroundImage: `url(${bgImage})` }}>
        <Typography variant="h2">{title}</Typography>
      </div>
    </Container>
  )
}

export default ImageTextTop
