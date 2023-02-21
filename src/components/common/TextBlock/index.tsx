import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'

const TextBlock = ({ title, text }: BaseBlock) => {
  return (
    <Container className={clsx(layoutCss.containerShort, css.block)}>
      <Typography variant="h1">{title}</Typography>
      {text}
    </Container>
  )
}

export default TextBlock
