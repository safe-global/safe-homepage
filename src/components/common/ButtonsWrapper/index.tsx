import type { Button as ButtonType } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { Button } from '@mui/material'
import css from './styles.module.css'
import SafeLink from '@/components/common/SafeLink'

type ButtonsWrapperProps = {
  buttons?: ButtonType[]
  mobileDirection?: 'column' | 'row'
}

const ButtonsWrapper = ({ buttons, mobileDirection }: ButtonsWrapperProps) => {
  if (!buttons || buttons.length === 0) return null

  return (
    <div className={`${css.wrapper} ${mobileDirection === 'row' && css.mobileRow}`}>
      {buttons.map((button, index) => {
        const { text, variant, href, color = 'primary' } = button
        const isButton = variant === 'button'

        return (
          <SafeLink key={index} href={href}>
            {isButton ? (
              <Button variant="contained" size="large" color={color}>
                {text}
              </Button>
            ) : (
              <LinkButton>{text}</LinkButton>
            )}
          </SafeLink>
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
