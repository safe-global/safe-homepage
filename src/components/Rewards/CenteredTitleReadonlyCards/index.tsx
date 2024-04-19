import { Box, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import { isAsset, isEntryTypeBaseBlock, isEntryTypeExternalURL } from '@/lib/typeGuards'
import css from './styles.module.css'

const Card = (props: BaseBlockEntry) => {
  const { title, text, image } = props.fields

  return (
    <Grid item xs={12} md={3} className={css.card}>
      {isAsset(image) && image.fields.file?.url ? (
        <img src={image.fields.file.url} alt={image.fields.title ?? ''} />
      ) : null}

      <div>
        <RichText {...title} />

        {text && (
          <Box color="primary.light">
            <RichText {...text} />
          </Box>
        )}
      </div>
    </Grid>
  )
}

// The cards are readonly. Cards are displayed in a grid.
const CenteredTitleReadonlyCards = (props: BaseBlockEntry) => {
  const { caption, title, text, items, link } = props.fields

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <Container className={layoutCss.containerMedium}>
      {caption && (
        <Typography variant="caption" component="div" mb="32px" textAlign="center">
          {caption}
        </Typography>
      )}

      <div className={css.textBlockContainer}>
        <RichText {...title} />

        {text && <RichText {...text} />}
      </div>

      <Grid container mt={{ xs: '40px', md: '80px' }} className={css.roundCorners}>
        {itemsList.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Grid>

      {link && isEntryTypeExternalURL(link) ? (
        <Typography className={css.extra}>{link.fields.title}</Typography>
      ) : undefined}
    </Container>
  )
}

export default CenteredTitleReadonlyCards
