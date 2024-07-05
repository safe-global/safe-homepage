import type { BaseBlock } from '@/components/Home/types'
import useResponsiveImages, { type ImageObj } from '@/hooks/useResponsiveImages'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const ImageTextTop = ({
  title,
  backgroundImage,
}: BaseBlock & {
  backgroundImage: ImageObj
}) => {
  const [bgImage] = useResponsiveImages(backgroundImage)

  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <div className={css.spot1} />
      <div className={css.bg} style={{ backgroundImage: `url(${bgImage})` }}>
        <Typography variant="h2">{title}</Typography>
      </div>
    </Container>
  )
}

export default ImageTextTop
