import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const LegalDisclaimer = ({ caption, text }: BaseBlock) => {
  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <Typography variant="caption" component="div" className={css.caption}>
        {caption}
      </Typography>
      <Typography variant="body2" color="primary.light">
        {text}
      </Typography>
    </Container>
  )
}

export default LegalDisclaimer
