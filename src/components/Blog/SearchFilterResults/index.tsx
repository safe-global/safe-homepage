import type { BlogPostEntry } from '@/components/Blog/Post'
import SearchBar from '@/components/Blog/SearchBar'
import usePostsSearch from '@/components/Blog/usePostsSearch'
import { Box, Button, ButtonBase, Grid, IconButton, Typography } from '@mui/material'
import { type NextRouter, useRouter } from 'next/router'
import { Fragment, useEffect, useMemo, useState } from 'react'
import css from './styles.module.css'

import Card from '@/components/Blog/Card'
import SearchIcon from '@/public/images/search.svg'
import { SpecificCategoryFilter } from '@/components/Ecosystem/Projects/Projects'
import NextLink from 'next/link'
import clsx from 'clsx'
import CloseIcon from '@/public/images/close.svg'
import { scrollToElement } from '@/lib/scrollSmooth'

const PAGE_LENGTH = 6
const PAGE_QUERY_PARAM = 'page'

const getPage = (query: NextRouter['query']): number => {
  const page = Array.isArray(query[PAGE_QUERY_PARAM]) ? query[PAGE_QUERY_PARAM][0] : query[PAGE_QUERY_PARAM]

  return Number(page) || 1
}

const SearchFilterResults = ({ allPosts, categories }: { allPosts: BlogPostEntry[]; categories: string[] }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const selectedCategory = router.query.category as string
  const page = getPage(router.query)

  const filteredPosts = useMemo(() => {
    return !selectedCategory ? allPosts : allPosts.filter((post) => post.fields.category === selectedCategory)
  }, [allPosts, selectedCategory])

  const searchResults = usePostsSearch(filteredPosts, searchQuery)
  const visibleResults = searchResults.slice(0, PAGE_LENGTH * page)
  const shouldShowMoreButton = visibleResults.length < searchResults.length

  useEffect(() => {
    const queryParams = { ...router.query }
    if (queryParams.category) scrollToElement('#results', 250)
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
      <Grid container mt={{ xs: '60px', md: 15 }}>
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

      {/* Category filter buttons */}
      <Grid container className={css.filterWrapper}>
        {categories.map((category) => {
          const isSelected = category === selectedCategory

          return (
            <Grid item key={category} className={css.filterCard} xs={12} md="auto">
              <ButtonBase
                className={clsx(css.filterButton, { [css.selected]: isSelected })}
                onClick={() => handleToggleCategory(category)}
              >
                <Typography>
                  {category}
                  {isSelected && (
                    <IconButton className={css.closeFilter} onClick={() => handleToggleCategory(category)}>
                      <CloseIcon />
                    </IconButton>
                  )}
                </Typography>
              </ButtonBase>
            </Grid>
          )
        })}
      </Grid>

      {visibleResults.length > 0 ? (
        <>
          <Grid container id="results" className={css.resultsWrapper}>
            {visibleResults.map((post: any) => (
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

const NoResults = ({ query }: { query: string }) => (
  <Box mt="60px" textAlign="center">
    <SearchIcon />
    <Typography variant="h4" my={2}>
      No results found for {query || 'selected filter'}
    </Typography>
    <Typography color="primary.light">Try searching something else</Typography>
  </Box>
)
