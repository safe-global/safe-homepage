import LinkButton from '@/components/common/LinkButton'
import { Button } from '@mui/material'
import SafeLink from '@/components/common/SafeLink'
import { type ButtonEntry } from '@/config/types'
import css from './styles.module.css'

type ButtonsWrapperProps = { buttons: ButtonEntry[] }

const ButtonsWrapper = ({ buttons }: ButtonsWrapperProps) => {
  if (buttons.length === 0) return null

  return (
    <div className={css.wrapper}>
      {buttons.map((button, index) => {
        const { text, href, variant, isDisabled } = button.fields
        const isButton = variant === 'button'

        return (
          <SafeLink key={index} href={href} isDisabled={!!isDisabled}>
            {isButton ? (
              <Button variant="contained" size="large" disabled={!!isDisabled}>
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
