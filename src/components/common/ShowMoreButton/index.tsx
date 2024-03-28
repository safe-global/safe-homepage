import { Box, Button } from '@mui/material'
import { type NextRouter } from 'next/router'
import NextLink from 'next/link'

const PAGE_QUERY_PARAM = 'page'

export const getPage = (query: NextRouter['query']): number => {
  const page = Array.isArray(query[PAGE_QUERY_PARAM]) ? query[PAGE_QUERY_PARAM][0] : query[PAGE_QUERY_PARAM]

  return Number(page) || 1
}

const ShowMoreButton = ({ page }: { page: number }) => (
  <Box display="flex" justifyContent="center" mt="60px">
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
