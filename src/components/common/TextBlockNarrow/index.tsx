import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Divider, Typography } from '@mui/material'
import css from './styles.module.css'

type TextBlockNarrowProps = BaseBlock & {
  id?: string
  divider?: boolean
}

const TextBlockNarrow = ({ title, text, id, divider }: TextBlockNarrowProps) => {
  return (
    <Container className={layoutCss.containerTiny} id={id}>
      <div className={css.block}>
        <Typography variant="h3">{title}</Typography>
        {text}
      </div>
      {divider && <Divider sx={{ mt: 10 }} />}
    </Container>
  )
}

export default TextBlockNarrow
