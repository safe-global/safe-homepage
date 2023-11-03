import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeLogoTextBlockSkeleton } from '@/contentful/types'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'

type LogoTextBlockCenteredEntry = Entry<TypeLogoTextBlockSkeleton, undefined, string>

const LogoTextBlockCentered = (props: LogoTextBlockCenteredEntry) => {
  const { logo, cta, title, description, button } = props.fields

  return (
    <Container className={layoutCss.containerMedium}>
      <div className={css.container}>
        {isAsset(logo) && logo.fields.file?.url ? (
          <Image src={logo.fields.file.url} alt={`Cover Image for ${title}`} width="84" height="84" />
        ) : undefined}
        <Typography className={css.cta}>{cta}</Typography>

        <Typography variant="h1" mb={4}>
          {title}
        </Typography>

        <Typography variant="h4" mb={5} color="primary.light">
          {description}
        </Typography>

        {isEntryTypeButton(button) ? (
          <Link href={button.fields.btnHref} target="_blank" rel="noreferrer" passHref>
            <Button variant="contained" size="large">
              {button.fields.btnCopy}
            </Button>
          </Link>
        ) : undefined}
      </div>
    </Container>
  )
}

export default LogoTextBlockCentered
