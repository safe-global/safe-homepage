import { Box, Typography } from '@mui/material'
import RichText from '@/components/common/RichText'
import { isAsset } from '@/lib/typeGuards'
import type { BaseBlockEntry } from '@/config/types'
import css from './styles.module.css'

const BigImageCard = (props: BaseBlockEntry) => {
  const { caption, title, text, image } = props.fields

  return (
    <div className={css.card}>
      <Typography variant="caption">{caption}</Typography>

      {isAsset(image) && image.fields.file?.url ? (
        <img src={image.fields.file.url} alt={image.fields.title ?? ''} className={css.image} />
      ) : null}

      <Typography variant="h4" width="80%">
        <RichText {...title} />
      </Typography>

      {text ? (
        <Box color="primary.light">
          <RichText {...text} />
        </Box>
      ) : null}
    </div>
  )
}

export default BigImageCard
