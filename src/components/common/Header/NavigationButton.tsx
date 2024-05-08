import { ButtonBase, Fade, Paper, Popper, Typography } from '@mui/material'
import { useRef } from 'react'
import clsx from 'clsx'
import type { NavCategoriesType, NavCategory, NavItem } from '@/components/common/Header/navCategories'
import Menu from '@/components/common/Header/Menu'
import css from './styles.module.css'

type NavigationButtonProps = {
  category: NavCategory['category']
  items: NavItem[]
  subMenuOpen: null | NavCategoriesType
  onItemClick: () => void
}

const NavigationButton = ({ category, items, subMenuOpen, onItemClick }: NavigationButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isOpen = subMenuOpen === category

  return (
    <ButtonBase
      className={clsx(css.navButton, css.hideInMobile, { [css.active]: isOpen })}
      disableRipple
      aria-label={category}
      aria-haspopup
      aria-controls={`${category}-popper`}
      aria-expanded={isOpen}
      ref={buttonRef}
    >
      <Typography>{category}</Typography>
      <Popper
        className={css.hideInMobile}
        id={`${category}-popper`}
        open={isOpen}
        anchorEl={buttonRef?.current}
        transition
        placement="bottom-start"
        style={{
          zIndex: 1200,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={css.menu}>
              <Menu items={items} onItemClick={onItemClick} />
            </Paper>
          </Fade>
        )}
      </Popper>
    </ButtonBase>
  )
}

export default NavigationButton
