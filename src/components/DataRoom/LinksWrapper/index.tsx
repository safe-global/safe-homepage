import Socials from '@/components/Blog/Socials'
import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import type { Link } from '@/components/Home/types'
import css from './styles.module.css'

// TODO: define the content to display in the Socials component buttons
const LinksWrapper = ({ title, href }: Link) => {
  return (
    <div className={css.wrapper}>
      <SafeLink href={href}>
        <LinkButton>{title}</LinkButton>
      </SafeLink>
      <Socials authors={[]} title="" />
    </div>
  )
}

export default LinksWrapper
