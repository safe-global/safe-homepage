import { type BaseBlock } from '@/components/Home/types'
import { Box, Container, Typography } from '@mui/material'

const TitleSlidingIcons = ({ title, text }: BaseBlock) => {
  return (
    <Container>
      <Box height="25vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant="h1">Title Sliding Icons</Typography>
        <Typography variant="h3">{title}</Typography>
        <Typography color="primary.light">{text}</Typography>
      </Box>
    </Container>
  )
}

export default TitleSlidingIcons
