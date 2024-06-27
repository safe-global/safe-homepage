import { Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import ExternalLinkIcon from '@/public/images/external-link.svg'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const ExternalLinkCard = ({ title, image, link }: Pick<BaseBlock, 'title' | 'image' | 'link'>) => (
  <div className={css.card}>
    <div className={css.cardHeader}>{image ? <img src={image.src} alt={image.alt} /> : undefined}</div>

    <div className={css.cardBody}>
      <Typography variant="h5" className={css.title}>
        {title}
      </Typography>
    </div>

    <LinkButton underline={false} fullSize href={link?.href} />

    <ExternalLinkIcon className={css.icon} />
  </div>
)

export default ExternalLinkCard
