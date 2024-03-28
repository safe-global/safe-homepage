import { Box, Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'
import LinkCard from '@/components/common/LinkCard'
import HeadphoneIcon from '@/public/images/headphone.svg'

type PodcastsProps = { podcasts: Entry<TypeExternalUrlSkeleton, undefined, string>[] }

export const Podcasts = ({ podcasts }: PodcastsProps) => (
  <Box mt={{ xs: '80px', md: '250px' }}>
    <Typography variant="h2" textAlign="center">
      Podcast appearances
    </Typography>
    <Grid container columnSpacing={2} rowGap="30px" mt="80px">
      {podcasts.map((item, index) => (
        <Grid key={index} item xs={12} md={4}>
          <LinkCard
            title={item.fields.title || ''}
            icon={<HeadphoneIcon />}
            link={{ href: item.fields.url, title: 'Listen now' }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Podcasts
