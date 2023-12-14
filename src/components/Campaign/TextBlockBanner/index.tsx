import { Button, Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import type { Entry } from 'contentful'
import Image from 'next/image'
import type { TypeTextBlockBannerSkeleton } from '@/contentful/types'
import { trackEvent } from '@/services/analytics/trackEvent'
import { SOCIAL_LOGIN_EVENTS } from '@/services/analytics/events/socialLogin'
import SafeLink from '@/components/common/SafeLink'

type TextBlockBannerEntry = Entry<TypeTextBlockBannerSkeleton, undefined, string>

const TextBlockBanner = (props: TextBlockBannerEntry) => {
  const { logo, title, description, button } = props.fields

  return (
    <div className={css.gradient}>
      <Container className={layoutCss.containerMedium}>
        <div className={css.container}>
          {isAsset(logo) && logo.fields.file?.url ? (
            <Image src={logo.fields.file.url} alt={`Cover Image for ${title}`} width="84" height="84" />
          ) : undefined}

          <Typography variant="h1" mb={4} color="text.dark" textAlign="center">
            {title}
          </Typography>

          <Typography variant="h4" mb={5} color="text.dark">
            {description}
          </Typography>

          {isEntryTypeButton(button) ? (
            <SafeLink href={button.fields.btnHref}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => {
                  trackEvent({
                    ...SOCIAL_LOGIN_EVENTS.START_NOW_CLICK,
                    label: 'banner',
                  })
                }}
              >
                {button.fields.btnCopy}
              </Button>
            </SafeLink>
          ) : undefined}
        </div>
      </Container>
    </div>
  )
}

export default TextBlockBanner
