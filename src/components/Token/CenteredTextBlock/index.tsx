import { Container, Typography } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const CenteredTextBlock = (props: BaseBlockEntry) => {
  const { caption, title, text } = props.fields

  return (
    <Container className={`${layoutCss.containerTiny} ${css.centeredContent}`}>
      <Typography variant="caption">{caption}</Typography>

      <div>
        <div className={css.title}>
          <RichText {...title} />
        </div>

        {text && (
          <div className={css.text}>
            <RichText {...text} />
          </div>
        )}
      </div>
    </Container>
  )
}

export default CenteredTextBlock
