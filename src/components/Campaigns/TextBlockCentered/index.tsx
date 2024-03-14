import { Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTextBlockCenteredSkeleton } from '@/contentful/types'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import { trackEvent } from '@/services/analytics/trackEvent'
import { SOCIAL_LOGIN_EVENTS } from '@/services/analytics/events/socialLogin'
import SafeLink from '@/components/common/SafeLink'

type TextBlockCenteredEntry = Entry<TypeTextBlockCenteredSkeleton, undefined, string>

const TextBlockCentered = (props: TextBlockCenteredEntry) => {
  const { logo, cta, title, description, button } = props.fields

  return (
    <Container className={layoutCss.containerMedium}>
      <div className={css.container}>
        <div className={css.spot} />
        {isAsset(logo) && logo.fields.file?.url ? (
          <Image src={logo.fields.file.url} alt={`Cover Image for ${title}`} width="84" height="84" />
        ) : undefined}
        <Typography variant="h4" className={css.cta}>
          {cta}
        </Typography>

        <Typography variant="h1" textAlign="center">
          {title}
        </Typography>

        <Typography color="primary.light">{description}</Typography>

        {isEntryTypeButton(button) ? (
          <SafeLink href={button.fields.btnHref}>
            <Button
              variant="contained"
              size="large"
              onClick={() =>
                trackEvent({
                  ...SOCIAL_LOGIN_EVENTS.START_NOW_CLICK,
                  label: 'centered-block',
                })
              }
            >
              {button.fields.btnCopy}
            </Button>
          </SafeLink>
        ) : undefined}
      </div>
    </Container>
  )
}

export default TextBlockCentered
