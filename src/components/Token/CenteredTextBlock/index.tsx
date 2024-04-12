import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/components/Home/types'
import RichText from '@/components/common/RichText'
import css from './styles.module.css'

const CenteredTextBlock = (props: BaseBlockEntry) => {
  const { caption, title, text } = props.fields

  return (
    <Container className={`${layoutCss.container} ${css.centeredContent}`}>
      <Typography variant="caption">{caption}</Typography>
      <div className={css.title}>
        <RichText {...title} />
      </div>
      <div className={css.text}>
        <Typography>{text}</Typography>
      </div>
    </Container>
  )
}

export default CenteredTextBlock
