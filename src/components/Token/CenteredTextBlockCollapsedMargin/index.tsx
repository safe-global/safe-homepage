import { Box } from '@mui/material'
import CenteredTextBlock from '@/components/commonCMS/CenteredTextBlock'
import { type BaseBlockEntry } from '@/config/types'

const CenteredTextBlockCollapsedMargin = (props: BaseBlockEntry) => (
  <Box mt="-250px">
    <CenteredTextBlock {...props} />
  </Box>
)

export default CenteredTextBlockCollapsedMargin
