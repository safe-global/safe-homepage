import { Box, Container, Grid } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import RichText from '@/components/common/RichText'
import { type BaseBlockEntry } from '@/config/types'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import { isAsset, isEntryTypeBaseBlock, isEntryTypeExternalURL } from '@/lib/typeGuards'
import { motion } from 'framer-motion'

const CardEntry = (props: BaseBlockEntry) => {
  const { title, text } = props.fields

  return (
    <div>
      <Box color="primary.light">
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

const Tokenomics = (props: BaseBlockEntry) => {
  const { title, link, image, items, bgImage } = props.fields

  const backgroundUrl = isAsset(bgImage) && bgImage.fields.file?.url ? bgImage.fields.file.url : ''

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <div className={css.bg} style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <Container className={`${layoutCss.containerMedium} ${css.container}`}>
        <Grid container columnSpacing={2} rowGap="30px">
          <Grid item xs={12} md={6} className={css.tokenWrapper}>
            {/* SAFE Token Logo */}
            <motion.div
              animate={{ y: ['0%', '-5%', '0%'], rotateY: [0, -35, 0] }}
              transition={{
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              {isAsset(image) && image.fields.file?.url ? (
                <img src={image.fields.file.url} alt={image.fields.title ?? ''} />
              ) : null}
            </motion.div>

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
                  <LinkButton underline={false}>{link.fields.title}</LinkButton>
                ) : undefined}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Tokenomics
