import type { ButtonProps } from '@mui/material'
import { ButtonBase } from '@mui/material'
import css from './styles.module.css'
import AngleIcon from '@/public/images/angle-icon.svg'
import clsx from 'clsx'

const LinkButton = ({
  children,
  underline = true,
  className,
  fullSize = false,
  ...props
}: ButtonProps & { underline?: boolean; fullSize?: boolean }) => {
  return (
    <ButtonBase
      className={clsx(css.linkButton, underline && css.underline, fullSize && css.fullSize, className)}
      {...props}
      disableRipple
    >
      {children}
      {children ? (
        <div className={css.arrow}>
          <AngleIcon />
        </div>
      ) : undefined}
    </ButtonBase>
  )
}

export default LinkButton
