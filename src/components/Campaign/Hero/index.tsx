import { Button, Chip, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import css from './styles.module.css'
import type { TypeHeroSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import RichText from '@/components/Campaign/RichText'
import { createImageData } from '@/lib/createImageData'
import { SOCIAL_LOGIN_EVENTS } from '@/services/analytics/events/socialLogin'
import { trackEvent } from '@/services/analytics/trackEvent'

type HeroEntry = Entry<TypeHeroSkeleton, undefined, string>

const Hero = (props: HeroEntry) => {
  const { caption, title, description, image, button, trustedBy, hasMoreComing, availableOn } = props.fields

  const trustedByData = createImageData(trustedBy)
  const availableOnData = createImageData(availableOn)

  return (
    <Container className={layoutCss.containerTiny}>
      <Grid container className={css.gridContainer}>
        <div className={css.spot} />
        <Grid item md={5} className={css.textBlock}>
          {caption && (
            <Chip
              label={
                <Typography variant="caption" color="text.primary">
                  {caption}
                </Typography>
              }
              className={css.chip}
              variant="outlined"
            />
          )}

          <Typography variant="h1" mb={4} className={css.title}>
            <RichText {...title} />
          </Typography>

          <Typography variant="h4" mb={5} color="primary.light">
            {description}
          </Typography>

          {isEntryTypeButton(button) ? (
            <Link href={button.fields.btnHref} target="_blank" rel="noreferrer" passHref>
              <Button
                variant="contained"
                size="large"
                onClick={() =>
                  trackEvent({
                    ...SOCIAL_LOGIN_EVENTS.START_NOW_CLICK,
                    label: 'hero',
                  })
                }
              >
                {button.fields.btnCopy}
              </Button>
            </Link>
          ) : undefined}
        </Grid>

        {isAsset(image) && image.fields.file?.url ? (
          <Grid item md={5} className={css.image}>
            <img src={image.fields.file.url} alt={`Cover image for ${image.fields.description}`} />
          </Grid>
        ) : undefined}
      </Grid>

      <div className={css.heroFooter}>
        <div>
          <Typography className={css.tagline}>Trusted by the best</Typography>
          <div className={css.logos}>
            {trustedByData?.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>

        <div>
          <Typography className={css.tagline}>Available on</Typography>
          <div className={css.chains}>
            {availableOnData?.map((item, index) => (
              <img key={index} src={item.src} alt={item.alt} />
            ))}
          </div>
          {hasMoreComing ? (
            <Typography className={css.tagline} color="primary.light">
              More coming soon
            </Typography>
          ) : undefined}
        </div>
      </div>
    </Container>
  )
}

export default Hero
