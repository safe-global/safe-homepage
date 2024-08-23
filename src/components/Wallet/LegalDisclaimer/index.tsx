import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const LegalDisclaimer = ({ caption, text }: BaseBlock) => (
  <Container className={`${layoutCss.containerShort} ${css.container}`}>
    <Typography variant="caption" component="div" className={css.caption}>
      {caption}
    </Typography>
    <div className={css.body}>{text}</div>
  </Container>
)

export default LegalDisclaimer
