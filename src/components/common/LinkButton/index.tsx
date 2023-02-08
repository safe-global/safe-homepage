import type { ButtonProps } from '@mui/material'
import { ButtonBase } from '@mui/material'
import css from './styles.module.css'
import AngleIcon from '@/public/images/angle-icon.svg'
import clsx from 'clsx'

const LinkButton = ({ children, underline = true, className, ...props }: ButtonProps & { underline?: boolean }) => {
  return (
    <ButtonBase className={clsx(css.linkButton, underline && css.underline, className)} {...props}>
      {children}
      <div className={css.arrow}>
        <AngleIcon />
      </div>
    </ButtonBase>
  )
}

export default LinkButton
