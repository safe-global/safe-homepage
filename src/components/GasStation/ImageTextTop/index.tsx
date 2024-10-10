import type { BaseBlock } from '@/components/Home/types'
import useResponsiveImages, { type ImageObj } from '@/hooks/useResponsiveImages'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const ImageTextTop = ({
  title,
  items,
  backgroundImage,
}: BaseBlock & {
  backgroundImage: ImageObj
}) => {
  const [bgImage] = useResponsiveImages(backgroundImage)

  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <div className={css.spot1} />
      <div className={css.bg} style={{ backgroundImage: `url(${bgImage})` }}>
        <Typography variant="h2" className={css.title}>
          {title}
        </Typography>
      </div>

      {/* extra gas stations */}
      {items?.map(({ image }) => {
        return image ? <img src={image.src} alt={image.alt} key={image.alt} className={css.showInXs} /> : null
      })}
    </Container>
  )
}

export default ImageTextTop
