import { Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import YouTube from '@/components/Blog/YouTube'
import LinkButton from '@/components/common/LinkButton'
import { type Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'

const VideoCard = ({ title, url }: { title: string; description: string; image: string; url: string }) => {
  return (
    <div className={css.card}>
      <YouTube url={url} />
      <div className={css.cardBody}>
        <Typography variant="h3">{title}</Typography>
        <LinkButton href={url}>Watch now</LinkButton>
      </div>
    </div>
  )
}

const FeaturedVideos = ({ videos }: { videos: Entry<TypeExternalUrlSkeleton, undefined, string>[] }) => {
  return (
    <>
      <Typography variant="h2" textAlign="center" mt={{ xs: '80px', md: '200px' }}>
        Featured videos
      </Typography>
      <Grid container columnSpacing={2} rowGap="30px" mt="80px">
        {videos.map((video: any, index: number) => (
          <Grid key={index} item xs={12} md={4}>
            <VideoCard {...video.fields} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default FeaturedVideos
