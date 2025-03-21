import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Typography } from '@mui/material'
import css from './styles.module.css'

type TextBlockNarrowProps = BaseBlock & { id?: string }

const TextBlockNarrow = ({ title, text, id }: TextBlockNarrowProps) => {
  return (
    <Container className={layoutCss.containerTiny} id={id}>
      <div className={css.block}>
        <Typography variant="h3">{title}</Typography>
        {text}
      </div>
    </Container>
  )
}

export default TextBlockNarrow
