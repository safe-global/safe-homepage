import { Container, Typography } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isEntryTypeButton } from '@/lib/typeGuards'

const CenteredTextBlock = (props: BaseBlockEntry) => {
  const { caption, title, text, buttons } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []

  return (
    <Container className={`${layoutCss.containerShort} ${css.centeredContent}`}>
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

      <div className={css.centeredContent}>
        <ButtonsWrapper buttons={buttonsList} />
      </div>
    </Container>
  )
}

export default CenteredTextBlock
