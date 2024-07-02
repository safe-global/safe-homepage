import { Box, Container, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '@/components/DataRoom/LinksWrapper'

const WorldGDP = ({ title, link }: BaseBlock) => (
  <Container>
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h1" textAlign="center">
        {title}
      </Typography>

      {link && <LinksWrapper {...link} />}
    </Box>
  </Container>
)

export default WorldGDP
