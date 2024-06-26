import { Box, Container, Typography } from '@mui/material'

const title = 'Want to see more?'

const SeeMore = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1">{title}</Typography>
    </Box>
  </Container>
)

export default SeeMore
