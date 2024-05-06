import CenteredTextBlock from '@/components/Token/CenteredTextBlock'
import { type BaseBlockEntry } from '@/config/types'
import { Box } from '@mui/material'

const CenteredTextBlockCollapsedMargin = (props: BaseBlockEntry) => {
  return (
    <Box mt="-250px">
      <CenteredTextBlock {...props} />
    </Box>
  )
}

export default CenteredTextBlockCollapsedMargin
