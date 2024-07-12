import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import type { Link } from '@/components/Home/types'
import css from './styles.module.css'
import SocialIcons, { type SocialsIconProps } from '@/components/common/SocialIcons'
import XIcon from '@/public/images/x-icon.svg'
import LinkedInIcon from '@/public/images/linkedin-icon.svg'
import LinkedInDarkIcon from '@/public/images/linkedin-dark-icon.svg'
import { xSharingUrl } from '@/lib/xSharingUrl'
import { linkedInSharingUrl } from '@/lib/linkedInSharingUrl'

const LinksWrapper = ({ link, variant = 'light' }: { link: Link; variant?: 'light' | 'dark' }) => {
  const { title, href } = link

  const xUrl = xSharingUrl(href, '')
  const linkedInUrl = linkedInSharingUrl(href)

  const items: SocialsIconProps[] = [
    {
      label: 'X',
      url: xUrl,
      icon: XIcon,
    },
    {
      label: 'LinkedIn',
      url: linkedInUrl,
      icon: variant === 'light' ? LinkedInIcon : LinkedInDarkIcon,
    },
  ]

  return (
    <div className={`${css.wrapper} ${variant === 'dark' ? css.dark : ''}`}>
      <SafeLink href={href}>
        <LinkButton className={`${variant === 'dark' ? css.sameColor : ''}`}>{title}</LinkButton>
      </SafeLink>

      <SocialIcons items={items} />
    </div>
  )
}

export default LinksWrapper
