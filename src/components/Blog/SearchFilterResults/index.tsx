import SearchBar from '@/components/Blog/SearchBar'
import usePostsSearch from '@/components/Blog/usePostsSearch'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useMemo, useState } from 'react'
import Card from '@/components/Blog/Card'
import SearchIcon from '@/public/images/search.svg'
import { SpecificCategoryFilter } from '@/components/Ecosystem/Projects/Projects'
import { scrollToElement } from '@/lib/scrollSmooth'
import ShowMoreButton from '@/components/common/ShowMoreButton'
import CategoryFilter from '@/components/common/CategoryFilter'
import { getPage } from '@/lib/getPage'
import { useAllPosts } from '@/hooks/useAllPosts'
import { isPressReleasePost } from '@/lib/contentful/isPressRelease'
import { isDraft } from '@/lib/contentful/isDraft'
import { isSelectedCategory } from '@/lib/contentful/isSelectedCategory'
import type { PostEntryCollection } from '@/config/types'

const PAGE_LENGTH = 6

const SearchFilterResults = ({ allPosts, categories }: { allPosts: PostEntryCollection; categories: string[] }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const selectedCategory = router.query.category
  const page = getPage(router.query)

  const { localAllPosts } = useAllPosts(allPosts)

  const filteredPosts = useMemo(() => {
    const visiblePosts = localAllPosts.items.filter((post) => !isPressReleasePost(post) && !isDraft(post))

    return typeof selectedCategory === 'string'
      ? visiblePosts.filter((post) => isSelectedCategory(post, selectedCategory))
      : visiblePosts
  }, [localAllPosts, selectedCategory])

  const searchResults = usePostsSearch(filteredPosts, searchQuery)
  const visibleResults = searchResults.slice(0, PAGE_LENGTH * page)
  const shouldShowMoreButton = visibleResults.length < searchResults.length

  // Scroll to results when navigating to the page with a category query param
  useEffect(() => {
    if (router.query.category) scrollToElement('#results', 250)
  })

  const handleToggleCategory = (category: string) => {
    const queryParams = { ...router.query }

    if (queryParams.category === category) {
      delete queryParams.category
    } else {
      queryParams.category = category
    }

    router.push(
      {
        query: queryParams,
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <>
      <Grid container mt={{ xs: '60px', md: '140px' }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2">All posts</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />

          <Box mt={2}>
            <Typography component="span" color="primary.light">
              Example:{' '}
            </Typography>
            {categories.map((category, idx, { length }) => (
              <Fragment key={category}>
                <Typography component="span">
                  <SpecificCategoryFilter category={category} onClick={handleToggleCategory} />
                  {idx !== length - 1 && ', '}
                </Typography>
              </Fragment>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box mt="40px">
        <CategoryFilter categories={categories} />
      </Box>

      {visibleResults.length > 0 ? (
        <>
          <Grid container columnSpacing="30px" rowGap="30px" id="results" mt="60px">
            {visibleResults.map((post) => (
              <Grid key={post.fields.slug} item xs={12} md={4}>
                <Card {...post} />
              </Grid>
            ))}
          </Grid>

          {shouldShowMoreButton && <ShowMoreButton page={page} />}
        </>
      ) : (
        <NoResults query={searchQuery} />
      )}
    </>
  )
}

export default SearchFilterResults

const NoResults = ({ query }: { query: string }) => (
  <Box mt="60px" textAlign="center">
    <SearchIcon />
    <Typography variant="h4" my={2}>
      No results found for {query || 'selected filter'}
    </Typography>
    <Typography color="primary.light">Try searching something else</Typography>
  </Box>
)
