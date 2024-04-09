import { Box, Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import type { TypeBaseBlockSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import RichText from '@/components/common/RichText'
import css from './styles.module.css'

type BaseBlockEntry = Entry<TypeBaseBlockSkeleton, undefined, string>

const CenteredTextBlock = (props: BaseBlockEntry) => {
  const { caption, title, text } = props.fields

  return (
    <Container className={`${layoutCss.container} ${css.centeredContent}`}>
      <Typography variant="caption" textAlign="center">
        {caption}
      </Typography>
      <Box textAlign="center" mt={2}>
        <RichText {...title} />
      </Box>
      <Typography textAlign="center" mb={3}>
        {text}
      </Typography>
    </Container>
  )
}

export default CenteredTextBlock
