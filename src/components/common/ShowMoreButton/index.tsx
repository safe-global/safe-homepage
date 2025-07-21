import { PAGE_QUERY_PARAM } from '@/lib/getPage'
import { Box, Button } from '@mui/material'
import NextLink from 'next/link'

const ShowMoreButton = ({ page }: { page: number }) => (
  <Box component="div" display="flex" justifyContent="center" mt="60px">
    <NextLink
      href={{ query: { [PAGE_QUERY_PARAM]: page + 1 } }}
      shallow
      // Pagination marker for search engines
      rel="next"
    >
      <Button variant="contained" size="large">
        Show more
      </Button>
    </NextLink>
  </Box>
)

export default ShowMoreButton
