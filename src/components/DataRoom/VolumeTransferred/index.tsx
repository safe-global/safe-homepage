import { Box, Container, Typography } from '@mui/material'

const title = 'With all time volume transferred...'
const text = 'and counting'

const Hero = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1">{title}</Typography>
      <Typography color="primary.light">{text}</Typography>
    </Box>
  </Container>
)

export default Hero
