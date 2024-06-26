import { Box, Container, Typography } from '@mui/material'

const title = 'CryptoPunks'
const text = '14% of all CryptoPunks are in Safe'

const CryptoPunks = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1">{title}</Typography>
      <Typography color="primary.light">{text}</Typography>
    </Box>
  </Container>
)

export default CryptoPunks
