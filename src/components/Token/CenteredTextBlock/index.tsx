import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import type { TypeBaseBlockSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import css from './styles.module.css'

type BaseBlockEntry = Entry<TypeBaseBlockSkeleton, undefined, string>

const CenteredTextBlock = (props: BaseBlockEntry) => {
  const { caption, title, text } = props.fields

  return (
    <Container className={`${layoutCss.container} ${css.centeredContent}`}>
      <Typography variant="caption" textAlign="center" mb={3}>
        {caption}
      </Typography>
      <Typography variant="h2" textAlign="center" marginX="auto" mb="100px">
        {title}
      </Typography>
      <Typography textAlign="center" mb="100px">
        {text}
      </Typography>
    </Container>
  )
}

export default CenteredTextBlock
