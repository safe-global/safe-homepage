import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/components/Home/types'
import RichText from '@/components/common/RichText'

const LegalDisclaimer = (props: BaseBlockEntry) => {
  const { caption, title } = props.fields

  return (
    <Container className={layoutCss.containerShort}>
      <Typography variant="caption">{caption}</Typography>
      <Typography variant="body2" color="primary.light" component="div">
        <RichText {...title} />
      </Typography>
    </Container>
  )
}

export default LegalDisclaimer
