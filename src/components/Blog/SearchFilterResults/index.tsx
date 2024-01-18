import type { BlogCategory } from '@/components/Blog'
import type { BlogPostEntry } from '@/components/Blog/Post'
import SearchBar from '@/components/Blog/SearchBar'
import usePostsSearch from '@/components/Blog/usePostsSearch'
import { Grid, Typography } from '@mui/material'
import { type NextRouter, useRouter } from 'next/router'
import type { Dispatch, SetStateAction } from 'react'
import { Fragment, useMemo, useState } from 'react'
import css from '../styles.module.css'
import Card from '@/components/Blog/Card'

const PAGE_LENGTH = 6
const PAGE_QUERY_PARAM = 'page'
const EMPTY_FILTER: Array<string> = []

const SpecificCategoryFilter = ({ category, onClick }: { category: string; onClick: (category: string) => void }) => {
  return (
    <button className={css.baseButton} onClick={() => onClick(category)}>
      {category}
    </button>
  )
}

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

// add a generic type to this compoenent
// maybe receives categories as well?
const SearchFilterResults = ({ allPosts, categories }: { allPosts: BlogPostEntry[]; categories: BlogCategory }) => {
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
    // if (noFilters) {
    //   return projects
    // }

    return _getFilteredPosts({ posts: allPosts, selectedCategories })
  }, [allPosts, selectedCategories])

  // Search results
  const searchResults = usePostsSearch(filteredPosts, query)

  const visibleResults = searchResults.slice(0, PAGE_LENGTH * page)
  console.log('visibleResults', visibleResults)
  // const shouldShowMoreButton = visibleResults.length < searchResults.length

  // TODO: change types
  const toggleSpecificCategory = (category: string) => {
    return onSelectCategory(category, !selectedCategories.includes(category))
  }

  return (
    <>
      <Grid container mt={15} mb={8}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2">Browse all</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <SearchBar query={query} setQuery={setQuery} />

          <Typography mt={2}>
            <Typography component="span" color="primary.light">
              Example:
            </Typography>{' '}
            {categories.map((category, idx, { length }) => {
              return (
                <Fragment key={category + idx}>
                  {/* TODO: Implement */}
                  <Typography component="span">
                    <SpecificCategoryFilter category={category} onClick={toggleSpecificCategory} />
                    {idx !== length - 1 && ', '}
                  </Typography>
                </Fragment>
              )
            })}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{
          xs: 2,
          md: '30px',
        }}
      >
        {visibleResults.map((post: any, index: number) => (
          // TODO: remove the index when enough posts are available
          <Grid key={`${post.fields.slug}-$${index}`} item xs={12} md={4}>
            <Card {...post} />
          </Grid>
        ))}
        {/* {shouldShowMoreButton && (
          <Grid item xs={12} mt={{ xs: 2, md: 0 }} display="flex" justifyContent="center">
            <Link
              href={{ query: { [PAGE_QUERY_PARAM]: page + 1 } }}
              shallow
              // Pagination marker for search engines
              rel="next"
            >
              <Button variant="contained" size="large">
                Show more
              </Button>
            </Link>
          </Grid>
        )} */}
      </Grid>
    </>
  )
}

export default SearchFilterResults
