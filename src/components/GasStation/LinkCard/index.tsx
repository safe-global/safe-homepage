import { Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import css from './styles.module.css'
import type { Link } from '@/components/Home/types'

export type CardProps = {
  title: string | JSX.Element
  link?: Link
}

const LinkCard = ({ title, link }: CardProps) => (
  <div className={`${css.card} ${css.outline}`}>
    <div className={css.cardBody}>
      <Typography variant="h5" className={css.title}>
        {title}
      </Typography>

      {link ? (
        <SafeLink href={link?.href}>
          <LinkButton underline={false} fullSize>
            {link.title}
          </LinkButton>
        </SafeLink>
      ) : undefined}
    </div>
  </div>
)

export default LinkCard
