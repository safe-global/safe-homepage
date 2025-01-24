import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'

type TextBlockNarrowProps = BaseBlock & { id?: string };

const TextBlockNarrow = ({ title, text, id }: TextBlockNarrowProps) => {
  return (
    <Container className={clsx(layoutCss.containerTiny, css.block)} id={id}>
      <Typography variant="h3">{title}</Typography>
      {text}
    </Container>
  )
}

export default TextBlockNarrow
