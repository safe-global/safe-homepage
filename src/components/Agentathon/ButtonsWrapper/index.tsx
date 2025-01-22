import { Button } from '@mui/material'
import css from './style.module.css'
import SafeLink from '@/components/common/SafeLink'
import type { Button as ButtonType } from '@/components/Home/types'

type ButtonsWrapperProps = {
  buttons?: ButtonType[]
  mobileDirection?: 'column' | 'row'
  isDisabled?: boolean
}

const ButtonsWrapper = ({ buttons, mobileDirection }: ButtonsWrapperProps) => {
  if (!buttons || buttons.length === 0) return null

  return (
    <div className={`${css.wrapper} ${mobileDirection === 'row' && css.mobileRow}`}>
      {buttons.map((button, index) => {
        const { text, variant, href, color = 'primary' } = button
        const isButton = variant === 'button'

        return (
          <SafeLink key={index} href={href} isDisabled={!!button.isDisabled}>
            {isButton ? (
              <Button variant="contained" size="large" color={color}>
                {text}
              </Button>
            ) : (
              <Button variant="outlined" size="large" color={color}>
                {text}
              </Button>
            )}
          </SafeLink>
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
