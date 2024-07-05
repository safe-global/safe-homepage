import type { BaseBlock } from '@/components/Home/types'
import type { ImageObj } from '@/lib/getImageSource'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import useResponsiveImages from '@/hooks/useResponsiveImages'

export const ImageTextTop = ({
  title,
  backgroundImage,
}: BaseBlock & {
  backgroundImage: ImageObj
}) => {
  const { bgImage } = useResponsiveImages(backgroundImage, backgroundImage)

  return (
    <Container className={layoutCss.containerShort}>
      <div className={css.bg} style={{ backgroundImage: `url(${bgImage})` }}>
        <Typography variant="h2">{title}</Typography>
      </div>
    </Container>
  )
}

export default ImageTextTop
