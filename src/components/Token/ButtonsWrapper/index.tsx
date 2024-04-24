import LinkButton from '@/components/common/LinkButton'
import { Button } from '@mui/material'
import NextLink from 'next/link'
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
          <NextLink key={index} href={href} target="_blank" className={`${isDisabled ? css.disabled : ''}`}>
            {isButton ? (
              <Button variant="contained" size="large" disabled={!!isDisabled}>
                {text}
              </Button>
            ) : (
              <LinkButton>{text}</LinkButton>
            )}
          </NextLink>
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
