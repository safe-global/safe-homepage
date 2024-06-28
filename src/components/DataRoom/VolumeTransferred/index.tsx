import { Box, Container, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'

const VolumeTransferred = ({ title, text }: BaseBlock) => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1">{title}</Typography>
      <Typography color="primary.light">{text}</Typography>
    </Box>
  </Container>
)

export default VolumeTransferred
