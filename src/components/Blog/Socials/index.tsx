import XIcon from '@/public/images/x-icon.svg'
import LinkedInIcon from '@/public/images/linkedin-icon.svg'
import { type Entry } from 'contentful'
import { type TypeAuthorSkeleton } from '@/contentful/types'
import useCurrentUrl from '@/hooks/useCurrentUrl'
import { xSharingUrl } from '@/lib/xSharingUrl'
import SocialIcons, { type SocialsIconProps } from '@/components/common/SocialIcons'

const linkedInSharingUrl = (currentUrl: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`

const Socials = ({ title, authors }: { title: string; authors: Entry<TypeAuthorSkeleton, undefined, string>[] }) => {
  const currentUrl = useCurrentUrl()

  const sharingText = `${title} by @${authors
    .map((author) => author.fields.name)
    .join(', @')
    .toString()}`

  const xUrl = xSharingUrl(currentUrl, sharingText)
  const linkedInUrl = linkedInSharingUrl(currentUrl)

  const items: SocialsIconProps[] = [
    {
      label: 'X',
      url: xUrl,
      icon: XIcon,
    },
    {
      label: 'LinkedIn',
      url: linkedInUrl,
      icon: LinkedInIcon,
    },
  ]

  return <SocialIcons items={items} />
}

export default Socials
