import { Box, Container, Grid } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import RichText from '@/components/common/RichText'
import { type BaseBlockEntry } from '@/config/types'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import { isAsset, isEntryTypeBaseBlock, isEntryTypeExternalURL } from '@/lib/typeGuards'
import dynamic from 'next/dynamic'

const CardEntry = (props: BaseBlockEntry) => {
  const { title, text } = props.fields

  return (
    <div>
      <Box component="div" color="primary.light">
        <RichText {...title} />
      </Box>
      {text && (
        <div className={css.entryText}>
          <RichText {...text} />
        </div>
      )}
    </div>
  )
}

// Client-side only imports. Framer Motion components are not SSR compatible.
const FloatingToken = dynamic(() => import('../FloatingToken'))

const Tokenomics = (props: BaseBlockEntry) => {
  const { title, link, image, items, bgImage } = props.fields

  const backgroundUrl = isAsset(bgImage) && bgImage.fields.file?.url ? bgImage.fields.file.url : ''

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <div className={css.gradient}>
      <div className={css.bg} style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <Container className={`${layoutCss.containerMedium} ${css.container}`}>
          <Grid container columnSpacing={2} rowGap="30px">
            <Grid item xs={12} md={6} className={css.tokenWrapper}>
              {/* SAFE Token Logo */}
              {isAsset(image) ? <FloatingToken image={image} /> : null}

              <RichText {...title} />
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={css.card}>
                <div className={css.cardBody}>
                  {itemsList.map((item) => (
                    <CardEntry key={item.fields.caption} {...item} />
                  ))}
                </div>
                <div className={css.cardFooter}>
                  {link && isEntryTypeExternalURL(link) ? (
                    <LinkButton href={link.fields.url} underline={false}>
                      {link.fields.title}
                    </LinkButton>
                  ) : undefined}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Tokenomics
