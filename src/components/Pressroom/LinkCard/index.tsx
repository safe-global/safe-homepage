import { Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import type { Asset, UnresolvedLink } from 'contentful'
import { isAsset } from '@/lib/typeGuards'
import SafeLink from '@/components/common/SafeLink'
import css from './styles.module.css'
import React from 'react'

type CardProps = {
  title?: string
  image?: UnresolvedLink<'Asset'> | Asset<undefined, string>
  url: string
  cta: string
  icon?: React.ReactNode
}

const LinkCard = ({ title, image, url, cta, icon }: CardProps) => {
  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        {isAsset(image) && image.fields.file?.url ? (
          <img src={image.fields.file.url} alt={image.fields.title} />
        ) : (
          icon ?? null
        )}
      </div>

      <div className={css.cardBody}>
        <Typography variant="h3" className={css.title}>
          {title}
        </Typography>
        <SafeLink href={url}>
          <LinkButton underline={false} fullSize>
            {cta}
          </LinkButton>
        </SafeLink>
      </div>

      <ArrowIcon className={css.arrow} />
    </div>
  )
}

export default LinkCard
