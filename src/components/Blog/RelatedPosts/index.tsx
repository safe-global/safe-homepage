import { Typography } from '@mui/material'
import React from 'react'

const RelatedPosts = () => {
  return (
    <>
      <Typography variant="h3" mt={15} mb={4}>
        Read more
      </Typography>
      {/* <Grid container spacing={2}>
        {relatedPosts.slice(0, 3).map((post: any) => (
          <Grid key={post.fields.slug} item xs={12} md={4}>
            <Card {...post} />
          </Grid>
        ))}
      </Grid> */}
    </>
  )
}

export default RelatedPosts
