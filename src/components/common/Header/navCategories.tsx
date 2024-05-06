import { DOCS_LINK, GRANTS_LINK, HELP_LINK, SAFECON_LINK } from '@/config/constants'
import { AppRoutes } from '@/config/routes'
import BlogIcon from '@/public/images/Header/blog-icon-round-corners.svg'
import SafeCoreIcon from '@/public/images/Header/safe-core-icon-round-corners.svg'
import DocumentationIcon from '@/public/images/Header/documentation-icon-round-corners.svg'
import ProjectsIcon from '@/public/images/Header/projects-icon-round-corners.svg'
import GrantsIcon from '@/public/images/Header/grants-icon-round-corners.svg'
import GovernanceIcon from '@/public/images/Header/governance-icon-round-corners.svg'
import SafeTokenIcon from '@/public/images/Header/safe-token-icon-round-corners.svg'
import SafePassIcon from '@/public/images/Header/safe-pass-icon-round-corners.svg'
import SafeConIcon from '@/public/images/Header/safe-con-icon-round-corners.svg'
import CareersIcon from '@/public/images/Header/careers-icon-round-corners.svg'
import PressRoomIcon from '@/public/images/Header/press-room-icon-round-corners.svg'
import HelpCenterIcon from '@/public/images/Header/help-center-icon-round-corners.svg'

export type NavItem = {
  label: string
  sublabel?: string
  href: string
  target?: string
  rel?: string
  icon?: JSX.Element
  tag?: string
}

type NavCategory = {
  category: string
  items: NavItem[]
}

export const navCategories: NavCategory[] = [
  {
    category: 'Developers',
    items: [
      {
        label: 'Safe{Core}',
        sublabel: 'Open-source and modular account abstraction stack',
        href: AppRoutes.core,
        icon: <SafeCoreIcon />,
      },
      {
        label: 'Documentation',
        href: DOCS_LINK,
        target: '_blank',
        rel: 'noreferrer',
        icon: <DocumentationIcon />,
      },
    ],
  },
  {
    category: 'Wallet',
    items: [
      {
        label: 'Safe{Wallet}',
        href: AppRoutes.wallet,
      },
    ],
  },
  {
    category: 'Ecosystem',
    items: [
      {
        label: 'Projects',
        sublabel: 'Explore 200+ ecosystem projects building with Safe',
        href: AppRoutes.ecosystem,
        icon: <ProjectsIcon />,
      },
      {
        label: 'Grants',
        href: GRANTS_LINK,
        target: '_blank',
        rel: 'noreferrer',
        icon: <GrantsIcon />,
      },
    ],
  },
  {
    category: 'Community',
    items: [
      {
        label: 'Governance',
        href: AppRoutes.governance,
        icon: <GovernanceIcon />,
      },
      {
        label: 'SAFE Token',
        href: AppRoutes.token,
        icon: <SafeTokenIcon />,
      },
      {
        label: 'Safe{Pass}',
        href: AppRoutes.pass,
        icon: <SafePassIcon />,
      },
      {
        label: 'Safe{Con}',
        href: SAFECON_LINK,
        target: '_blank',
        rel: 'noreferrer',
        icon: <SafeConIcon />,
      },
    ],
  },
  {
    category: 'Resources',
    items: [
      {
        label: 'Blog',
        href: AppRoutes.blog.index,
        icon: <BlogIcon />,
      },
      {
        label: 'Careers',
        tag: 'Hiring',
        href: AppRoutes.careers,
        icon: <CareersIcon />,
      },
      {
        label: 'Press room',
        href: AppRoutes.press,
        icon: <PressRoomIcon />,
      },
      {
        label: 'Help center',
        href: HELP_LINK,
        target: '_blank',
        rel: 'noreferrer',
        icon: <HelpCenterIcon />,
      },
    ],
  },
]
