import { Box, Container, Typography } from '@mui/material'

const title: JSX.Element = (
  <>
    <b>1.75% transactions on chain</b> originate from a <b>Safe</b>
  </>
)

const TransactionsOnChain = () => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>
    </Box>
  </Container>
)

export default TransactionsOnChain
