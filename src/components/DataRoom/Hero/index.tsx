import { Box, Container, Typography } from '@mui/material'

const title = 'Welcome to Safe Data Room'
const text = 'Explore Mind Bending Sats from Safe Universe'

const Hero = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1">{title}</Typography>
      <Typography color="primary.light">{text}</Typography>
    </Box>
  </Container>
)

export default Hero
