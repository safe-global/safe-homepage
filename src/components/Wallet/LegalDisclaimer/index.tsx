import { Container, Divider, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const LegalDisclaimer = ({ caption, text }: BaseBlock) => (
  <Container className={css.container}>
    <Typography variant="caption" component="div" className={css.caption}>
      {caption}
    </Typography>

    <div className={css.body}>{text}</div>

    <Divider />
  </Container>
)

export default LegalDisclaimer
