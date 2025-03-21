import type { BaseBlock } from '@/components/Home/types'
import { Container } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import clsx from 'clsx'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'

export const ImageFull = ({ image, link }: BaseBlock) => {
  return (
    <Container className={clsx(layoutCss.containerTiny, css.container)}>
      <div className={css.imageCont}>{image ? <img src={image.src} alt={image.alt} /> : null}</div>
      <div className={css.block}>
        {link && (
          <a href={link.href} target="_blank">
            <LinkButton>{link.title}</LinkButton>
          </a>
        )}
      </div>
    </Container>
  )
}

export default ImageFull
