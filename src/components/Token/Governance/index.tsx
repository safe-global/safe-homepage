import { Box, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import LinkCard from '@/components/Token/LinkCard'
import { isAsset, isEntryTypeBaseBlock } from '@/lib/typeGuards'
import css from './styles.module.css'

const Governance = (props: BaseBlockEntry) => {
  const { caption, title, text, image, items } = props.fields

  const backgroundUrl = isAsset(image) && image.fields.file?.url ? image.fields.file.url : ''

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <div className={css.bg} style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <Container className={`${layoutCss.containerMedium} ${css.container}`}>
        <Typography variant="caption">{caption}</Typography>
        <Grid container columnSpacing={2} rowGap="20px" mt={{ xs: '20px', md: '48px' }}>
          <Grid item xs={12} md={6}>
            <RichText {...title} />
          </Grid>
          <Grid item xs={12} md={6} display="flex" alignItems="center">
            {text && (
              <Box mb={3}>
                <RichText {...text} />
              </Box>
            )}
          </Grid>
        </Grid>

        <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }}>
          {itemsList.map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <LinkCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Governance
