import { Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'
import LinkCard from '@/components/common/LinkCard'
import HeadphoneIcon from '@/public/images/headphone.svg'

type PodcastsProps = { podcasts: Entry<TypeExternalUrlSkeleton, undefined, string>[] }

export const Podcasts = ({ podcasts }: PodcastsProps) => (
  <>
    <Typography variant="h2" textAlign="center" mt={{ xs: '80px', md: '200px' }}>
      Podcast appearances
    </Typography>
    <Grid container columnSpacing={2} rowGap="30px" mt="80px">
      {podcasts.map((item, index) => (
        <Grid key={index} item xs={12} md={4}>
          <LinkCard title={item.fields.title || ''} icon={<HeadphoneIcon />} url={item.fields.url} cta="Listen now" />
        </Grid>
      ))}
    </Grid>
  </>
)

export default Podcasts
