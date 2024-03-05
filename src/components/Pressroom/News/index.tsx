import { Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import type { Asset, UnresolvedLink, Entry } from 'contentful'
import { type TypeExternalUrlSkeleton } from '@/contentful/types'
import css from './styles.module.css'
import { isAsset } from '@/lib/typeGuards'
import SafeLink from '@/components/common/SafeLink'

type CardProps = {
  title?: string
  image?: UnresolvedLink<'Asset'> | Asset<undefined, string>
  url: string
}

const Card = ({ title, image, url }: CardProps) => {
  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        {isAsset(image) && image.fields.file?.url ? (
          <img src={image.fields.file.url} alt={`${image.fields.title}`} />
        ) : null}
      </div>

      <div className={css.cardBody}>
        <Typography variant="h3" className={css.title}>
          {title}
        </Typography>
        <SafeLink href={url}>
          <LinkButton underline={false} fullSize>
            Read more
          </LinkButton>
        </SafeLink>
      </div>

      <ArrowIcon className={css.arrow} />
    </div>
  )
}

export const News = ({ news }: { news: Entry<TypeExternalUrlSkeleton, undefined, string>[] }) => {
  return (
    <>
      <Typography variant="h2" textAlign="center" mt={{ xs: '80px', md: '200px' }}>
        <em>Safe</em> in the news
      </Typography>
      <Grid container columnSpacing={2} rowGap="30px" mt="80px">
        {news.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Card key={index} {...item.fields} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default News
