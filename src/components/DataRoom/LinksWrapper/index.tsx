import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import type { Link } from '@/components/Home/types'
import css from './styles.module.css'
import SocialIcons, { type SocialsIconProps } from '@/components/common/SocialIcons'
import XIcon from '@/public/images/x-icon.svg'
import LinkedInIcon from '@/public/images/linkedin-icon.svg'
import LinkedInDarkIcon from '@/public/images/linkedin-dark-icon.svg'

// TODO: define the content to display in the Socials component buttons
const LinksWrapper = ({ link, variant = 'light' }: { link: Link; variant?: 'light' | 'dark' }) => {
  const { title, href } = link

  const items: SocialsIconProps[] = [
    {
      label: 'X',
      url: '',
      icon: XIcon,
    },
    {
      label: 'LinkedIn',
      url: '',
      icon: variant === 'light' ? LinkedInIcon : LinkedInDarkIcon,
    },
  ]

  return (
    <div className={`${css.wrapper} ${variant === 'dark' ? css.dark : ''}`}>
      <SafeLink href={href}>
        <LinkButton className={css.sameColor}>{title}</LinkButton>
      </SafeLink>

      <SocialIcons items={items} />
    </div>
  )
}

export default LinksWrapper
