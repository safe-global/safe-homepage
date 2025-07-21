import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import Card from '@/components/Blog/Card'
import { useRouter } from 'next/router'
import ShowMoreButton from '@/components/common/ShowMoreButton'
import SearchIcon from '@/public/images/search.svg'
import CategoryFilter from '@/components/common/CategoryFilter'
import { PressroomIds } from '@/components/Pressroom/ContentsNavigation'
import { containsTag } from '@/lib/containsTag'
import { getPage } from '@/lib/getPage'
import { useAllPosts } from '@/hooks/useAllPosts'
import type { PostEntryCollection } from '@/config/types'
import { isPublishedPressRelease } from '@/lib/contentful/isPressRelease'

const categories = ['Safe{Core}', 'Safe{Wallet}', 'Safe{DAO}', 'Ecosystem', 'Institutional', 'Internal']

const PAGE_LENGTH = 4

const PressReleases = ({ allPosts }: { allPosts: PostEntryCollection }) => {
  const router = useRouter()
  const selectedTag = router.query.category as string
  const page = getPage(router.query)

  const { localAllPosts } = useAllPosts(allPosts)

  const filteredPosts = useMemo(() => {
    const pressPosts = localAllPosts.items.filter(isPublishedPressRelease)

    return !selectedTag ? pressPosts : pressPosts.filter((post) => containsTag(post.fields.tags, selectedTag))
  }, [localAllPosts.items, selectedTag])

  const visibleResults = filteredPosts.slice(0, PAGE_LENGTH * page)
  const shouldShowMoreButton = visibleResults.length < filteredPosts.length

  return (
    <Box component="div" id={PressroomIds.PRESS_RELEASES} mt={{ xs: '80px', md: '250px' }}>
      <Divider sx={{ mb: '140px' }} />
      <Typography variant="h2">Press releases</Typography>

      <Grid container columnSpacing="30px" rowGap="30px" mt="60px">
        {/* Quick filter bar*/}
        <Grid item xs={12} md={4}>
          <CategoryFilter categories={categories} isColumn />
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
            <Box component="div" mt="60px" textAlign="center">
              <SearchIcon />
              <Typography variant="h4" my={2}>
                No results found for selected filter
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default PressReleases
