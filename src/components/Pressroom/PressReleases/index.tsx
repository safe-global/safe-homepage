import { type BlogPostEntry } from '@/components/Blog/Post'
import { Box, Grid, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import Card from '@/components/Blog/Card'
import { useRouter } from 'next/router'
import ShowMoreButton from '@/components/common/ShowMoreButton'
import SearchIcon from '@/public/images/search.svg'
import CategoryFilter from '@/components/common/CategoryFilter'
import { getPage } from '@/lib/getPage'

const categories = ['Safe{Core}', 'Safe{Wallet}', 'Safe{DAO}', 'Ecosystem', 'Institutional', 'Internal']

const PAGE_LENGTH = 4

const PressReleases = ({ allPosts }: { allPosts: BlogPostEntry[] }) => {
  const router = useRouter()
  const selectedCategory = router.query.category
  const page = getPage(router.query)

  const filteredPosts = useMemo(() => {
    return !selectedCategory ? allPosts : allPosts.filter((post) => post.fields.category === selectedCategory)
  }, [allPosts, selectedCategory])

  const visibleResults = filteredPosts.slice(0, PAGE_LENGTH * page)
  const shouldShowMoreButton = visibleResults.length < allPosts.length

  return (
    <>
      <Typography variant="h2" mt={{ xs: '80px', md: '200px' }}>
        Press releases
      </Typography>

      <Grid container columnSpacing="30px" rowGap="30px" mt="60px">
        {/* Quick filter bar*/}
        <Grid item xs={12} md={4}>
          <CategoryFilter categories={categories} />
        </Grid>

        {/* Press posts */}
        <Grid item xs={12} md={8}>
          {visibleResults.length > 0 ? (
            <>
              <Grid container columnSpacing="30px" rowGap="30px">
                {visibleResults.map((post) => (
                  <Grid key={post.fields.slug} item xs={12} md={6}>
                    <Card {...post} />
                  </Grid>
                ))}
              </Grid>

              {shouldShowMoreButton && <ShowMoreButton page={page} />}
            </>
          ) : (
            <Box mt="60px" textAlign="center">
              <SearchIcon />
              <Typography variant="h4" my={2}>
                No results found for selected filter
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default PressReleases
