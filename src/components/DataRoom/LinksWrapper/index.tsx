import LinkButton from '@/components/common/LinkButton'
import SafeLink from '@/components/common/SafeLink'
import type { Link } from '@/components/Home/types'

const LinksWrapper = ({ title, href }: Link) => {
  return (
    <div>
      <SafeLink href={href}>
        <LinkButton>{title}</LinkButton>
      </SafeLink>
    </div>
  )
}

export default LinksWrapper
