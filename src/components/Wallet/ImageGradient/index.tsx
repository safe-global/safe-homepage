import { Container, Divider } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const ImageGradient = ({ image }: Partial<BaseBlock>) => (
  <Container className={css.container}>
    <img src={image?.src} alt={image?.alt} />

    <Divider />
  </Container>
)

export default ImageGradient
