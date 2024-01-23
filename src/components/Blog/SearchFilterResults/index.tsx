import type { BlogPostEntry } from '@/components/Blog/Post'
import SearchBar from '@/components/Blog/SearchBar'
import usePostsSearch from '@/components/Blog/usePostsSearch'
import { Box, Button, ButtonBase, Grid, Typography } from '@mui/material'
import { type NextRouter, useRouter } from 'next/router'
import type { Dispatch, SetStateAction } from 'react'
import { Fragment, useMemo, useState } from 'react'
import css from './styles.module.css'

import Card from '@/components/Blog/Card'
import SearchIcon from '@/public/images/search.svg'
import { SpecificCategoryFilter } from '@/components/Ecosystem/Projects/Projects'
import NextLink from 'next/link'

const PAGE_LENGTH = 6
const PAGE_QUERY_PARAM = 'page'
const EMPTY_FILTER: Array<string> = []

export const _getFilteredPosts = ({ posts, selectedCategories }: { posts: any[]; selectedCategories: string[] }) => {
  const isMatch = (all: string[], selected: string[]) => {
    // No selection means no filter applied
    if (selected.length === 0) {
      return true
    }

    return selected.some((item) => {
      return all.includes(item)
    })
  }

  return posts.filter((post) => {
    const categories = [post.fields.category]

    return isMatch(categories, selectedCategories)
  })
}

const SearchFilterResults = ({ allPosts, categories }: { allPosts: BlogPostEntry[]; categories: string[] }) => {
  const [selectedCategories, setSelectedCategories] = useState(EMPTY_FILTER)
  const [query, setQuery] = useState('')
  const getPage = (query: NextRouter['query']): number => {
    const page = Array.isArray(query[PAGE_QUERY_PARAM]) ? query[PAGE_QUERY_PARAM][0] : query[PAGE_QUERY_PARAM]

    return Number(page) || 1
  }

  const onSelect = (setState: Dispatch<SetStateAction<string[]>>) => (property: string, checked: boolean) => {
    setState((prev) => {
      if (checked) {
        return prev.concat(property)
      } else {
        return prev.filter((item) => item !== property)
      }
    })
  }

  const onSelectCategory = onSelect(setSelectedCategories)

  const router = useRouter()
  const page = getPage(router.query)

  // Category filtered results
  const filteredPosts = useMemo(() => {
    return _getFilteredPosts({ posts: allPosts, selectedCategories })
  }, [allPosts, selectedCategories])

  // Search results
  const searchResults = usePostsSearch(filteredPosts, query)

  const visibleResults = searchResults.slice(0, PAGE_LENGTH * page)

  // TODO: uncomment when enough posts are available
  // const shouldShowMoreButton = visibleResults.length < searchResults.length
  const shouldShowMoreButton = true

  // TODO: change types
  const toggleSpecificCategory = (category: string) => {
    return onSelectCategory(category, !selectedCategories.includes(category))
  }

  return (
    <>
      <Grid container mt={{ xs: '60px', md: 15 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2">All posts</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <SearchBar query={query} setQuery={setQuery} />

          <Box mt={2}>
            <Typography component="span" color="primary.light">
              Example:{' '}
            </Typography>
            {categories.map((category, idx, { length }) => {
              return (
                <Fragment key={`${category}-${idx}`}>
                  <Typography component="span">
                    <SpecificCategoryFilter category={category} onClick={toggleSpecificCategory} />
                    {idx !== length - 1 && ', '}
                  </Typography>
                </Fragment>
              )
            })}
          </Box>
        </Grid>
      </Grid>

      {/* Quick filter buttons */}
      <Grid container className={css.filterWrapper}>
        {categories.map((category) => (
          <Grid item key={category} className={css.filterCard} xs={12} md="auto">
            <ButtonBase className={css.filterButton} onClick={() => toggleSpecificCategory(category)}>
              <Typography>{category}</Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>

      {visibleResults.length > 0 ? (
        <Grid container className={css.resultsWrapper}>
          {visibleResults.map((post: any, index: number) => (
            // TODO: remove the index when enough posts are available
            <Grid key={`${post.fields.slug}-$${index}`} item xs={12} md={4}>
              <Card {...post} />
            </Grid>
          ))}

          {shouldShowMoreButton && (
            <Grid item xs={12} display="flex" justifyContent="center">
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
            </Grid>
          )}
        </Grid>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <SearchIcon />
          <Typography variant="h4" my={2}>
            No results found for {query || 'selected filters'}
          </Typography>
          <Typography color="primary.light">Try searching something else</Typography>
        </div>
      )}
    </>
  )
}

export default SearchFilterResults
