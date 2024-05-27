import NextLink from 'next/link'
import { type NavItem } from '@/components/common/Header/navCategories'
import { Typography } from '@mui/material'
import css from './Menu.module.css'

const Menu = ({ items, onItemClick }: { items: NavItem[]; onItemClick: () => void }) => (
  <ul className={css.menuList}>
    {items.map((subItem) => (
      <li key={subItem.href}>
        <NextLink
          href={subItem.href}
          target={subItem.target}
          rel={subItem.rel}
          onClick={onItemClick}
          className={css.menuLink}
        >
          {subItem.icon}
          <div className={css.textContainer}>
            <div className={css.title}>
              <div className={css.subItemTitle}>{subItem.label}</div>
              {subItem.tag && <div className={css.tag}>{subItem.tag}</div>}
            </div>
            <Typography variant="body2" color="text.secondary">
              {subItem.sublabel}
            </Typography>
          </div>
        </NextLink>
      </li>
    ))}
  </ul>
)

export default Menu
