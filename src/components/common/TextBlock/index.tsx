import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Typography } from '@mui/material'

const TextBlock = ({ title, text }: BaseBlock) => {
  return (
    <Container className={layoutCss.containerShort}>
      <Typography variant="h1">{title}</Typography>
      {text}
    </Container>
  )
}

export default TextBlock
