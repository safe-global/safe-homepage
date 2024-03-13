import { Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import SafeLink from '@/components/common/SafeLink'
import css from './styles.module.css'
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type CardProps = {
  title: string | JSX.Element
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  url: string
  cta: string
  icon?: React.ReactNode
}

const LinkCard = ({ title, image, url, cta, icon }: CardProps) => (
  <div className={css.card}>
    <div className={css.cardHeader}>{image ? <img src={image.src} alt={image.alt} /> : icon ?? undefined}</div>

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

export default LinkCard
