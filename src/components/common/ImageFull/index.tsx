import type { BaseBlock } from '@/components/Home/types'
import { Container } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import clsx from 'clsx'
import css from './styles.module.css'
import Link from 'next/link'
import LinkButton from '@/components/common/LinkButton'


export const ImageTextTop = ({ image, link }: BaseBlock) => {

  return (
    <Container className={clsx(layoutCss.containerTiny, css.block)}>
      {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
      {link && (
          <Link href={link.href} target={'_blank'} rel={'nofollow noopener'}>
            <LinkButton>{link.title}</LinkButton>
          </Link>
      )}


    </Container>

  )
}

export default ImageTextTop
