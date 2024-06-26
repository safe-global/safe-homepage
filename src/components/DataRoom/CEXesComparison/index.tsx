import { Box, Container, Typography } from '@mui/material'

const title: JSX.Element = (
  <>
    <em>Safe</em> has <b>more assets</b> secured than many Fintechs and CEXes
  </>
)

const CEXesComparison = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default CEXesComparison
