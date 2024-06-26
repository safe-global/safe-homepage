import { Box, Container, Typography } from '@mui/material'

const title: JSX.Element = (
  <>
    <b>
      <em>Safe</em>
    </b>{' '}
    TVL <b>x</b> TVL of <b>category leaders</b>
  </>
)

const TVLComparison = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default TVLComparison
