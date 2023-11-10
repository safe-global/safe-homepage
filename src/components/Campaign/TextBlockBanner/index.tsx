import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import type { Entry } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'
import type { TypeTextBlockBannerSkeleton } from '@/contentful/types'

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
            <Link href={button.fields.btnHref} target="_blank" rel="noreferrer" passHref>
              <Button variant="contained" size="large" color="secondary">
                {button.fields.btnCopy}
              </Button>
            </Link>
          ) : undefined}
        </div>
      </Container>
    </div>
  )
}

export default TextBlockBanner
