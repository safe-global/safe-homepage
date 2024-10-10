import { Container, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const CenteredTextBlock = ({ caption, title, text, buttons }: BaseBlock) => (
  <Container className={`${layoutCss.containerShort} ${css.container}`}>
    <Typography variant="caption">{caption}</Typography>

    <div className={css.title}>
      <Typography variant="h2">{title}</Typography>
    </div>

    <div className={css.text}>
      <Typography>{text}</Typography>
    </div>

    <div className={css.buttons}>
      <ButtonsWrapper buttons={buttons} />
    </div>
  </Container>
)

export default CenteredTextBlock
