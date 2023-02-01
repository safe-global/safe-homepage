import type { ButtonProps } from '@mui/material'
import { ButtonBase } from '@mui/material'
import css from './styles.module.css'
import AngleIcon from '@/public/images/angle-icon.svg'

const LinkButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonBase className={css.linkButton} {...props}>
      {children}
      <div className={css.arrow}>
        <AngleIcon />
      </div>
    </ButtonBase>
  )
}

export default LinkButton
