import { Box, Container, Typography } from '@mui/material'

const title: JSX.Element = (
  <>
    We store... <br /> <b>10% of all USDC</b>
  </>
)

const USDCStorage = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default USDCStorage
