import { Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import { type BaseBlock } from '@/components/Home/types'
import ExternalLinkIcon from '@/public/images/external-link.svg'
import css from './styles.module.css'

const ExternalLinkCard = ({ title, image, link }: Pick<BaseBlock, 'title' | 'image' | 'link'>) => (
  <div className={css.card}>
    <div className={css.cardHeader}>{image ? <img src={image.src} alt={image.alt} /> : undefined}</div>

    <div className={css.cardBody}>
      <Typography variant="h5" className={css.title}>
        {title}
      </Typography>
    </div>

    <a href={link?.href} target="_blank" rel="noreferrer">
      <LinkButton underline={false} fullSize />
    </a>

    <ExternalLinkIcon className={css.icon} />
  </div>
)

export default ExternalLinkCard
