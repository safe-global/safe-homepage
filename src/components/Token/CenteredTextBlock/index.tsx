import { Box, Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/components/Home/types'
import RichText from '@/components/common/RichText'
import css from './styles.module.css'

const CenteredTextBlock = (props: BaseBlockEntry) => {
  const { caption, title, text } = props.fields

  return (
    <Container className={`${layoutCss.container} ${css.centeredContent}`}>
      <Typography variant="caption" textAlign="center">
        {caption}
      </Typography>
      <Box textAlign="center">
        <RichText {...title} />
      </Box>
      <Typography textAlign="center" mb={3} maxWidth="725px" marginX="auto">
        {text}
      </Typography>
    </Container>
  )
}

export default CenteredTextBlock