import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import { type BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'
import css from './styles.module.css'

const LinkCard = ({ caption, title, text, link }: Partial<BaseBlock>) => (
  <div className={css.cardWrapper}>
    <div className={css.outline}>
      <div className={css.card}>
        <div className={css.cardHeader}>
          {caption ? <Typography variant="caption">{caption}</Typography> : undefined}
        </div>

        <div className={css.cardBody}>
          <Typography variant="h4" className={css.title}>
            {title}
          </Typography>

          {text ? <Typography mb="auto">{text}</Typography> : undefined}

          {link ? (
            <LinkButton underline={false} fullSize href={link.href}>
              {link.title}
            </LinkButton>
          ) : undefined}
        </div>

        <ArrowIcon className={css.arrow} />
      </div>
    </div>
  </div>
)

export default LinkCard
