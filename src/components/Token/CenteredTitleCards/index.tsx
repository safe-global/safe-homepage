import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/components/Home/types'
import RichText from '@/components/common/RichText'
import { isAsset, isEntryTypeBaseBlock, isEntryTypeExternalURL } from '@/lib/typeGuards'
import css from './styles.module.css'
import SafeLink from '@/components/common/SafeLink'
import LinkButton from '@/components/common/LinkButton'

const CardIconLink = (props: BaseBlockEntry) => {
  const { title, text, image, link } = props.fields

  return (
    <div className={css.card}>
      {isAsset(image) && image.fields.file?.url ? (
        <img src={image.fields.file.url} alt={image.fields.title ?? ''} />
      ) : null}

      <div className={css.cardBody}>
        <div>
          <RichText {...title} />

          <Typography color="primary.light">{text}</Typography>
        </div>

        {link && isEntryTypeExternalURL(link) ? (
          <SafeLink href={link.fields.url}>
            <LinkButton underline={false}>{link.fields.title}</LinkButton>
          </SafeLink>
        ) : undefined}
      </div>
    </div>
  )
}

const CenteredTitleCards = (props: BaseBlockEntry) => {
  const { title, text, items } = props.fields

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <Container className={layoutCss.containerMedium}>
      <div className={css.textBlockContainer}>
        <RichText {...title} />

        <Typography>{text}</Typography>
      </div>

      <Grid container columnSpacing="30px" rowGap="16px" mt={{ xs: '40px', md: '80px' }}>
        {itemsList?.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <CardIconLink {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CenteredTitleCards
