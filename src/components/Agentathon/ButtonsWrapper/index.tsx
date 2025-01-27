import { Button } from '@mui/material'
import css from './style.module.css'
import SafeLink from '@/components/common/SafeLink'
import type { Button as ButtonType } from '@/components/Home/types'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'

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
            <Button variant={isButton ? 'contained' : 'outlined'} size="large" color={color} className={css.button}>
              {text}
              {isButton && <ArrowIcon className={css.icon} />}
            </Button>
          </SafeLink>
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
