import { Box, Container, Typography } from '@mui/material'

const title: JSX.Element = (
  <>
    <b>
      <em>Safe</em> TVL
    </b>{' '}
    is ~.1% <br /> of World GDP at <b>$100+B</b>
  </>
)

const WorldGDP = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default WorldGDP
