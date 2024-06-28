import { Box, Container, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'

const IndustryComparison = ({ title }: BaseBlock) => (
  <Container sx={{ backgroundColor: '#12FF80', paddingInline: '5rem' }}>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" color="text.dark">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default IndustryComparison
