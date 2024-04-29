import { DOCS_LINK, GRANTS_LINK, HELP_LINK, SAFECON_LINK, WALLET_LINK } from '@/config/constants'
import { AppRoutes } from '@/config/routes'

type NavItem = {
  label: string | JSX.Element
  sublabel?: string
  href: string
  target?: string
  rel?: string
  icon?: JSX.Element
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
      },
      {
        label: 'Documentation',
        href: DOCS_LINK,
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
  },
  {
    category: 'Wallet',
    items: [
      {
        label: 'Launch Wallet',
        href: WALLET_LINK,
        target: '_blank',
        rel: 'noreferrer',
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
      },
      {
        label: 'Grants',
        href: GRANTS_LINK,
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
  },
  {
    category: 'Community',
    items: [
      {
        label: 'Governance',
        href: AppRoutes.governance,
      },
      {
        label: 'SAFE Token',
        href: AppRoutes.token,
      },
      {
        label: 'Safe{Pass}',
        href: AppRoutes.pass,
      },
      {
        label: 'Safe{Con}',
        href: SAFECON_LINK,
      },
    ],
  },
  {
    category: 'Resources',
    items: [
      {
        label: 'Blog',
        href: AppRoutes.blog.index,
      },
      {
        label: `
          <>
            Careers <strong>Hiring</strong>
          </>
        `,
        href: AppRoutes.careers,
      },
      {
        label: 'Press room',
        href: AppRoutes.press,
      },
      {
        label: 'Help center',
        href: HELP_LINK,
        target: '_blank',
        rel: 'noreferrer',
      },
    ],
  },
]
