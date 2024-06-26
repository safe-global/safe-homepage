import { Box, Container, Typography } from '@mui/material'

const title = 'How we compare to other industry leaders'

const IndustryComparison = () => (
  <Container sx={{ backgroundColor: '#12FF80', paddingInline: '5rem' }}>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" color="text.dark">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default IndustryComparison
