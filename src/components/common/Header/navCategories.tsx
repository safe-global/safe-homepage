import { DOCS_LINK, GRANTS_LINK, HELP_LINK, SAFECON_LINK } from '@/config/constants'
import { AppRoutes } from '@/config/routes'
import PaperIcon from '@/public/images/Header/paper-icon.svg'
import SafeCoreIcon from '@/public/images/Header/safe-core-icon.svg'
import ProjectsIcon from '@/public/images/Header/projects-icon.svg'
import GrantsIcon from '@/public/images/Header/grants-icon.svg'
import GovernanceIcon from '@/public/images/Header/governance-icon.svg'
import SafeTokenIcon from '@/public/images/Header/safe-token-icon.svg'
import SafePassIcon from '@/public/images/Header/safe-pass-icon.svg'
import SafeConIcon from '@/public/images/Header/safe-con-icon.svg'
import CareersIcon from '@/public/images/Header/careers-icon.svg'
import PressRoomIcon from '@/public/images/Header/press-room-icon.svg'
import HelpCenterIcon from '@/public/images/Header/help-center-icon.svg'

export type NavItem = {
  label: string
  sublabel?: string
  href: string
  target?: string
  rel?: string
  icon?: JSX.Element
  tag?: string
}

type NavCategory =
  | {
      category: NavCategoriesType
      items: NavItem[]
      href?: never
    }
  | {
      category: NavCategoriesType
      items?: never
      href: string
    }

// Navigation categories
enum NavCategories {
  Developers = 'Developers',
  Wallet = 'Wallet',
  Ecosystem = 'Ecosystem',
  Community = 'Community',
  Resources = 'Resources',
}

export type NavCategoriesType = keyof typeof NavCategories

export const navCategories: NavCategory[] = [
  {
    category: NavCategories.Developers,
    items: [
      {
        label: 'Safe{Core}',
        href: AppRoutes.core,
        icon: <SafeCoreIcon />,
      },
      {
        label: 'Documentation',
        href: DOCS_LINK,
        target: '_blank',
        rel: 'noreferrer',
        icon: <PaperIcon />,
      },
    ],
  },
  {
    category: NavCategories.Wallet,
    href: AppRoutes.wallet,
  },
  {
    category: NavCategories.Ecosystem,
    items: [
      {
        label: 'Projects',
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
    category: NavCategories.Community,
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
    category: NavCategories.Resources,
    items: [
      {
        label: 'Blog',
        href: AppRoutes.blog.index,
        icon: <PaperIcon />,
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
