import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import css from './styles.module.css'

const LegalDisclaimer = (props: BaseBlockEntry) => {
  const { caption, title } = props.fields

  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <Typography variant="caption" component="div" className={css.caption}>
        {caption}
      </Typography>
      <Typography variant="body2" component="div" color="primary.light">
        <RichText {...title} />
      </Typography>
    </Container>
  )
}

export default LegalDisclaimer
