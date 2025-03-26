import type { BaseBlock } from '@/components/Home/types'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const TextFull = ({ title, text }: BaseBlock) => {
  return (
    <Container className={layoutCss.containerMedium}>
      <div className={css.container}>
        <div className={css.block}>
          <Typography variant="h3" mb={4}>
            {title}
          </Typography>
          <p>{text}</p>
        </div>
      </div>
    </Container>
  )
}

export default TextFull
