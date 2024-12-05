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
import GasStationIcon from '@/public/images/Header/gas-station-icon.svg'
import SafeFoundryIcon from '@/public/images/Header/safe-foundry-icon.svg'
import DataRoomIcon from '@/public/images/Header/data-room-icon.svg'

export type NavItem = {
  label: string
  sublabel?: string
  href: string
  target?: string
  rel?: string
  icon?: JSX.Element
  tag?: string
}

export type NavCategory =
  | {
      category: NavCategories
      items: NavItem[]
      href?: never
    }
  | {
      category: NavCategories
      items?: never
      href: string
    }

// Navigation categories
export enum NavCategories {
  Developers = 'Developers',
  Wallet = 'Wallet',
  Ecosystem = 'Ecosystem',
  Community = 'Community',
  Resources = 'Resources',
  SafePass = 'Safe <u><i>PASS</i></u>',
  Safenet = 'Safenet <span>New</span>',
}

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
      {
        label: 'Gas Station',
        href: AppRoutes.gasStation,
        icon: <GasStationIcon />,
      },
      {
        label: 'Safe{Foundry}',
        href: AppRoutes.foundry,
        icon: <SafeFoundryIcon />,
      },
    ],
  },
  {
    category: NavCategories.Wallet,
    href: AppRoutes.wallet,
  },
  {
    category: NavCategories.Safenet,
    href: AppRoutes.safenet,
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
        label: 'Data room',
        href: AppRoutes.dataroom,
        icon: <DataRoomIcon />,
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
