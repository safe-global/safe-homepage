import { ButtonBase, Fade, Paper, Popper } from '@mui/material'
import { useRef } from 'react'
import clsx from 'clsx'
import type { NavCategories, NavCategory, NavItem } from '@/components/common/Header/navCategories'
import Menu from '@/components/common/Header/Menu'
import css from './styles.module.css'

type NavigationButtonProps = {
  category: NavCategory['category']
  items: NavItem[]
  subMenuOpen: null | NavCategories
  onItemClick: () => void
}

const NavigationButton = ({ category, items, subMenuOpen, onItemClick }: NavigationButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isOpen = subMenuOpen === category

  const categoryString = typeof category === 'string' ? category : 'Unknown'

  return (
    <ButtonBase
      className={clsx(css.navButton, css.hideInMobile, { [css.active]: isOpen })}
      disableRipple
      aria-label={categoryString}
      aria-haspopup
      aria-controls={`${categoryString}-popper`}
      aria-expanded={isOpen}
      ref={buttonRef}
    >
      {category}
      <Popper
        id={`${categoryString}-popper`}
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
