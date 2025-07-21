import { Box, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import { type Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'
import MediaPlayer from '@/components/common/MediaPlayer'
import SafeLink from '@/components/common/SafeLink'

const VideoCard = ({ title, url }: { title?: string; url: string }) => (
  <div className={css.card}>
    <MediaPlayer url={url} />
    <div className={css.cardBody}>
      {title ? <Typography variant="h4">{title}</Typography> : null}
      <SafeLink href={url}>
        <LinkButton>Watch now</LinkButton>
      </SafeLink>
    </div>
  </div>
)

const FeaturedVideos = ({ videos }: { videos: Entry<TypeExternalUrlSkeleton, undefined, string>[] }) => (
  <Box component="div" mt={{ xs: '80px', md: '250px' }}>
    <Typography variant="h2" textAlign="center">
      Featured videos
    </Typography>
    <Grid container columnSpacing={2} rowGap="30px" mt="80px">
      {videos.map((video, index) => (
        <Grid key={index} item xs={12} md={4}>
          <VideoCard {...video.fields} />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default FeaturedVideos
