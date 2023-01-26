import { ButtonBase, ButtonProps } from '@mui/material'
import css from './styles.module.css'

const LinkButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonBase className={css.linkButton} {...props}>
      {children}
    </ButtonBase>
  )
}

export default LinkButton
